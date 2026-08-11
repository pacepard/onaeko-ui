export type Theme = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'onaeko-theme';

export function getSystemTheme(): 'light' | 'dark' {
    if (typeof window === 'undefined') {
        return 'light';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function resolveTheme(theme: Theme): 'light' | 'dark' {
    return theme === 'system' ? getSystemTheme() : theme;
}

/**
 * Apply a resolved theme by toggling the `dark` class on `documentElement`.
 */
export function applyTheme(theme: Theme): 'light' | 'dark' {
    const resolved = resolveTheme(theme);

    if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', resolved === 'dark');
        document.documentElement.style.colorScheme = resolved;
    }

    return resolved;
}

/**
 * Initialize theme from an explicit value or localStorage, then apply it.
 * Safe to call from application bootstrap (client-side only).
 */
export function initTheme(theme?: Theme): Theme {
    if (typeof window === 'undefined') {
        return theme ?? 'system';
    }

    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const next = theme ?? stored ?? 'system';

    applyTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);

    return next;
}

export function setTheme(theme: Theme): Theme {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, theme);
    }

    applyTheme(theme);
    return theme;
}

export function getStoredTheme(): Theme {
    if (typeof window === 'undefined') {
        return 'system';
    }

    return (window.localStorage.getItem(STORAGE_KEY) as Theme | null) ?? 'system';
}
