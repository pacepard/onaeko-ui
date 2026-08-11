import * as React from 'react';

import { Button, type ButtonProps } from '@/components/Button';
import { cn } from '@/lib/cn';

export type IconButtonProps = Omit<ButtonProps, 'size' | 'children'> & {
    'aria-label': string;
    children: React.ReactNode;
};

function IconButton({ className, children, ...props }: IconButtonProps) {
    return (
        <Button
            size="icon"
            className={cn(className)}
            {...props}
        >
            {children}
        </Button>
    );
}

export { IconButton };
