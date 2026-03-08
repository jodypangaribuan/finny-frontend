import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: LucideIcon;
    size?: number;
}

export function IconWrapper({ className, icon: Icon, size = 20, ...props }: IconWrapperProps) {
    return (
        <div className={cn("inline-flex items-center justify-center shrink-0", className)} {...props}>
            <Icon size={size} strokeWidth={2} />
        </div>
    );
}
