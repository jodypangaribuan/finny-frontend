import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-3xl border border-border bg-card text-foreground shadow-sm bg-white overflow-hidden",
                className
            )}
            {...props}
        />
    );
}
