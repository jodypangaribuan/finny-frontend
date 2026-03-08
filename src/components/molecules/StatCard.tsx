import React from 'react';
import { Card } from '../atoms/Card';
import { Badge } from '../atoms/Badge';
import { IconWrapper } from '../atoms/IconWrapper';
import { Info, ChevronDown, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
    title: string;
    amount: string;
    trend: number;
    comparisonText: string;
    hasDropdown?: boolean;
}

export function StatCard({ title, amount, trend, comparisonText, hasDropdown }: StatCardProps) {
    const isPositive = trend >= 0;

    return (
        <Card className="p-4 md:p-5 w-full flex flex-col justify-between h-full bg-white">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-medium">
                    {title}
                    <IconWrapper icon={Info} size={12} className="text-muted-foreground/50" />
                </div>
                {hasDropdown && (
                    <button className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/50 rounded-full px-2.5 py-0.5 bg-white">
                        <IconWrapper icon={ChevronDown} size={10} /> July 16 <IconWrapper icon={ChevronDown} size={10} />
                    </button>
                )}
            </div>

            <div className="text-2xl font-bold mb-4 text-foreground">{amount}</div>

            <div className="flex items-center gap-1.5 mt-auto">
                <Badge variant={isPositive ? 'success' : 'danger'} className="gap-0.5 px-1.5 py-0 rounded text-[10px] font-semibold">
                    <IconWrapper icon={isPositive ? TrendingUp : TrendingDown} size={10} />
                    {Math.abs(trend)}%
                </Badge>
                <span className="text-muted-foreground text-[10px] whitespace-nowrap overflow-hidden text-ellipsis">{comparisonText}</span>
            </div>
        </Card>
    );
}
