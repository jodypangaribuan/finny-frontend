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
                "flex w-full items-center justify-between rounded-lg px-3 py-2 text-[13px] font-medium transition-colors cursor-pointer",
                {
                    "bg-primary/5 dark:bg-muted-bg text-foreground shadow-[0_1px_3px_rgba(0,0,0,0.06)]": isActive,
                    "text-muted-foreground hover:bg-muted-bg/50 hover:text-foreground": !isActive,
                }
            )}
        >
            <div className="flex items-center gap-2.5">
                <IconWrapper icon={icon} size={18} className={isActive ? "text-primary" : "text-muted-foreground"} />
                <span className={cn(isActive && "font-semibold")}>{label}</span>
            </div>
            {notificationCount ? (
                <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-danger text-[9px] font-bold text-white min-w-[18px] min-h-[18px]">
                    {notificationCount}
                </div>
            ) : null}
        </button>
    );
}
