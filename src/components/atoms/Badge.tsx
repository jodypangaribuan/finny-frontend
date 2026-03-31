import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'success' | 'danger' | 'neutral';
}

/**
* Renders a badge element with variant-based styling and custom class support.
* @example
* Badge({ className: "my-badge", variant: "success", children: "New" })
* <div className="...">New</div>
* @param {BadgeProps} { className, variant = 'neutral', children, ...props } - Props used to configure the badge appearance and content.
* @returns {JSX.Element} A styled badge container element.
**/
export function Badge({ className, variant = 'neutral', children, ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold transition-colors",
                {
                    "bg-success-bg text-success": variant === 'success',
                    "bg-danger-bg text-danger": variant === 'danger',
                    "bg-muted-bg text-muted": variant === 'neutral',
                },
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
