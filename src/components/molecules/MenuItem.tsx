import React from 'react';
import { cn } from '@/lib/utils';
import { IconWrapper } from '../atoms/IconWrapper';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
    icon: LucideIcon;
    label: string;
    isActive?: boolean;
    notificationCount?: number;
    onClick?: () => void;
}

export function MenuItem({ icon, label, isActive, notificationCount, onClick }: MenuItemProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors cursor-pointer",
                {
                    "bg-white text-foreground shadow-sm shadow-blue-500/5": isActive,
                    "text-muted-foreground hover:bg-white/50 hover:text-foreground": !isActive,
                }
            )}
        >
            <div className="flex items-center gap-3">
                <IconWrapper icon={icon} size={20} className={isActive ? "text-primary" : "text-muted-foreground"} />
                <span className={cn(isActive && "font-semibold")}>{label}</span>
            </div>
            {notificationCount ? (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-danger text-[10px] font-bold text-white">
                    {notificationCount}
                </div>
            ) : null}
        </button>
    );
}
