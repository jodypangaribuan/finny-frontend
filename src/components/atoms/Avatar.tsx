import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    fallback?: string;
}

export function Avatar({ className, src, alt = "Avatar", size = 'md', fallback, ...props }: AvatarProps) {
    return (
        <div
            className={cn(
                "relative flex shrink-0 overflow-hidden rounded-full bg-muted-bg text-muted-foreground items-center justify-center border-2 border-white",
                {
                    "h-8 w-8 text-xs": size === 'sm',
                    "h-10 w-10 text-sm": size === 'md',
                    "h-12 w-12 text-base": size === 'lg',
                    "h-14 w-14 text-lg": size === 'xl',
                },
                className
            )}
            {...props}
        >
            {src ? (
                <Image src={src} alt={alt} fill className="aspect-square h-full w-full object-cover" />
            ) : (
                <span className="font-medium">{fallback || alt.charAt(0)}</span>
            )}
        </div>
    );
}
