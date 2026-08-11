import * as React from 'react';

function composeEventHandlers<E>(
    originalEventHandler?: (event: E) => void,
    ourEventHandler?: (event: E) => void,
    { checkForDefaultPrevented = true } = {},
) {
    return function handleEvent(event: E) {
        originalEventHandler?.(event);

        if (
            checkForDefaultPrevented &&
            typeof event === 'object' &&
            event !== null &&
            'defaultPrevented' in event &&
            (event as { defaultPrevented: boolean }).defaultPrevented
        ) {
            return;
        }

        ourEventHandler?.(event);
    };
}

function useComposedRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
    return React.useCallback(
        (node: T) => {
            for (const ref of refs) {
                if (typeof ref === 'function') {
                    ref(node);
                } else if (ref != null) {
                    (ref as React.MutableRefObject<T>).current = node;
                }
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps -- composed ref list
        refs,
    );
}

export { composeEventHandlers, useComposedRefs };
