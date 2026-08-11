import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
}

window.ResizeObserver = ResizeObserverMock;

if (!Element.prototype.hasPointerCapture) {
    Element.prototype.hasPointerCapture = () => false;
}
if (!Element.prototype.setPointerCapture) {
    Element.prototype.setPointerCapture = () => {};
}
if (!Element.prototype.releasePointerCapture) {
    Element.prototype.releasePointerCapture = () => {};
}

HTMLElement.prototype.scrollIntoView = function scrollIntoView() {};

if (typeof window.PointerEvent === 'undefined') {
    class PointerEventPolyfill extends MouseEvent {
        readonly pointerId: number;
        readonly pointerType: string;
        readonly isPrimary: boolean;

        constructor(type: string, params: PointerEventInit = {}) {
            super(type, params);
            this.pointerId = params.pointerId ?? 1;
            this.pointerType = params.pointerType ?? 'mouse';
            this.isPrimary = params.isPrimary ?? true;
        }
    }

    // @ts-expect-error jsdom lacks PointerEvent
    window.PointerEvent = PointerEventPolyfill;
}
