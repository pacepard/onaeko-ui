import * as React from 'react';
import type { LucideIcon, LucideProps } from 'lucide-react';

export type IconProps = LucideProps & {
    icon: LucideIcon;
    title?: string;
};

/**
 * Thin wrapper around a Lucide icon component for consistent sizing defaults.
 */
function Icon({ icon: Glyph, size = 16, strokeWidth = 2, title, ...props }: IconProps) {
    return (
        <Glyph
            size={size}
            strokeWidth={strokeWidth}
            aria-hidden={title ? undefined : true}
            role={title ? 'img' : undefined}
            {...props}
        >
            {title ? <title>{title}</title> : null}
        </Glyph>
    );
}

export { Icon };
