export type Theme = 'light' | 'dark' | 'system';

export type ThemeStorageOptions = {
    /**
     * Cookie `Domain` for sharing theme across subdomains.
     * Example: `.onaeko.com` so accounts.onaeko.com and learn.onaeko.com share preference.
     * Omit on localhost (host-only cookie still syncs across ports).
     */
    cookieDomain?: string;
};

const STORAGE_KEY = 'onaeko-theme';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

let storageOptions: ThemeStorageOptions = {};

function readCookie(name: string): string | null {
    if (typeof document === 'undefined') {
        return null;
    }

    const prefix = `${encodeURIComponent(name)}=`;
    const parts = document.cookie.split(';');

    for (const part of parts) {
        const trimmed = part.trim();
        if (trimmed.startsWith(prefix)) {
            return decodeURIComponent(trimmed.slice(prefix.length));
        }
    }

    return null;
}

function writeCookie(name: string, value: string, cookieDomain?: string): void {
    if (typeof document === 'undefined') {
        return;
    }

    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;

    if (cookieDomain) {
        cookie += `; domain=${cookieDomain}`;
    }

    document.cookie = cookie;
}

function isTheme(value: string | null): value is Theme {
    return value === 'light' || value === 'dark' || value === 'system';
}

function readStoredTheme(): Theme | null {
    if (typeof window === 'undefined') {
        return null;
    }

    const fromCookie = readCookie(STORAGE_KEY);
    if (isTheme(fromCookie)) {
        return fromCookie;
    }

    const fromStorage = window.localStorage.getItem(STORAGE_KEY);
    return isTheme(fromStorage) ? fromStorage : null;
}

function writeStoredTheme(theme: Theme, options: ThemeStorageOptions = storageOptions): void {
    if (typeof window === 'undefined') {
        return;
    }

    window.localStorage.setItem(STORAGE_KEY, theme);
    writeCookie(STORAGE_KEY, theme, options.cookieDomain);
}

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
 * Initialize theme from an explicit value, shared cookie, or localStorage, then apply it.
 * Pass `cookieDomain: '.onaeko.com'` so theme syncs across *.onaeko.com apps.
 */
export function initTheme(theme?: Theme, options: ThemeStorageOptions = {}): Theme {
    if (options.cookieDomain !== undefined || Object.keys(options).length > 0) {
        storageOptions = { ...storageOptions, ...options };
    }

    if (typeof window === 'undefined') {
        return theme ?? 'system';
    }

    const stored = readStoredTheme();
    const next = theme ?? stored ?? 'system';

    applyTheme(next);
    writeStoredTheme(next);

    return next;
}

export function setTheme(theme: Theme, options?: ThemeStorageOptions): Theme {
    if (options) {
        storageOptions = { ...storageOptions, ...options };
    }

    writeStoredTheme(theme);
    applyTheme(theme);
    return theme;
}

export function getStoredTheme(): Theme {
    return readStoredTheme() ?? 'system';
}
