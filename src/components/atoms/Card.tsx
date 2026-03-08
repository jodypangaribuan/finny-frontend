import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-border/60 bg-card text-foreground shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden",
                className
            )}
            {...props}
        />
    );
}
