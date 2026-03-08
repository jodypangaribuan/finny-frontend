import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'secondary';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 gap-2",
                    {
                        "bg-primary text-white hover:bg-primary-hover shadow-sm": variant === 'primary',
                        "border border-border bg-white text-foreground hover:bg-muted-bg": variant === 'outline',
                        "hover:bg-muted-bg text-muted-foreground hover:text-foreground": variant === 'ghost',
                        "bg-muted-bg text-foreground hover:bg-border": variant === 'secondary',

                        "h-8 px-3 text-xs": size === 'sm',
                        "h-10 px-4 py-2 text-sm": size === 'md',
                        "h-12 px-6 text-sm": size === 'lg',
                        "h-10 w-10": size === 'icon',
                        "w-full": fullWidth,
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
