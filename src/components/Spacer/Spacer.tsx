import { cn } from '@/lib/cn';

export type SpacerProps = {
    height?: string | number;
    width?: string | number;
    className?: string;
};

function Spacer({ height = 0, width = 0, className }: SpacerProps) {
    return (
        <div
            data-slot="spacer"
            aria-hidden
            className={cn('shrink-0', className)}
            style={{
                height,
                width,
            }}
        />
    );
}

export { Spacer };
