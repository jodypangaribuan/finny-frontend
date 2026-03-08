import React from 'react';
import { Avatar } from '../atoms/Avatar';
import { cn } from '@/lib/utils';

interface TransactionItemProps {
    name: string;
    date: string;
    amount: number;
    cardNumber: string;
    avatarSrc?: string;
    avatarFallback?: string;
    iconBgColor?: string;
}

export function TransactionItem({
    name,
    date,
    amount,
    cardNumber,
    avatarSrc,
    avatarFallback,
    iconBgColor
}: TransactionItemProps) {
    const isPositive = amount > 0;

    return (
        <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
                <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold overflow-hidden", iconBgColor || "bg-primary")}>
                    {avatarSrc ? <Avatar src={avatarSrc} alt={name} size="md" className="border-0" /> : avatarFallback || name.charAt(0)}
                </div>
                <div>
                    <p className="text-sm font-semibold text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground">{cardNumber}</p>
                </div>
            </div>

            <div className="text-sm font-medium text-muted-foreground">
                {date}
            </div>

            <div className={cn(
                "text-sm font-semibold text-right",
                isPositive ? "text-primary" : "text-danger"
            )}>
                {isPositive ? '+' : ''}{amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
        </div>
    );
}
