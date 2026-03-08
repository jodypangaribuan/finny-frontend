import React from 'react';
import { cn } from '@/lib/utils';

interface TransactionItemProps {
    name: string;
    date: string;
    amount: number;
    cardNumber: string;
    avatarSrc?: string;
    avatarFallback?: string;
    iconBgColor?: string;
    iconText?: string;
}

export function TransactionItem({
    name,
    date,
    amount,
    cardNumber,
    avatarSrc,
    avatarFallback,
    iconBgColor,
    iconText
}: TransactionItemProps) {
    const isPositive = amount > 0;

    return (
        <div className="flex items-center py-3.5 gap-2">
            {/* Name column */}
            <div className="flex items-center gap-3 w-5/12">
                <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold text-sm overflow-hidden", iconBgColor || "bg-primary")}>
                    {iconText || name.charAt(0)}
                </div>
                <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{name}</p>
                    <p className="text-xs text-muted-foreground">{cardNumber}</p>
                </div>
            </div>

            {/* Date column */}
            <div className="w-4/12 text-sm text-muted-foreground">
                {date}
            </div>

            {/* Amount column */}
            <div className={cn(
                "w-3/12 text-sm font-semibold text-right",
                isPositive ? "text-primary" : "text-danger"
            )}>
                {isPositive ? '+' : ''}{amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
        </div>
    );
}
