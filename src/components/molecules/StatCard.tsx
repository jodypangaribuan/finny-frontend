import React from 'react';
import { Card } from '../atoms/Card';
import { Badge } from '../atoms/Badge';
import { IconWrapper } from '../atoms/IconWrapper';
import { Info, ChevronDown, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
    title: string;
    amount: string;
    trend: number; // positive or negative percentage
    comparisonText: string;
    hasDropdown?: boolean;
}

export function StatCard({ title, amount, trend, comparisonText, hasDropdown }: StatCardProps) {
    const isPositive = trend >= 0;

    return (
        <Card className="p-5 relative md:p-6 w-full flex flex-col justify-between h-full bg-white">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                    {title}
                    <IconWrapper icon={Info} size={14} className="text-muted-foreground/50" />
                </div>
                {hasDropdown && (
                    <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/60 rounded-full px-3 py-1 bg-white">
                        July 16 <IconWrapper icon={ChevronDown} size={14} />
                    </button>
                )}
            </div>

            <div className="text-3xl font-bold mb-4">{amount}</div>

            <div className="flex items-center gap-2">
                <Badge variant={isPositive ? 'success' : 'danger'} className="gap-1 px-2 py-0.5 rounded-md text-xs">
                    <IconWrapper icon={isPositive ? TrendingUp : TrendingDown} size={12} />
                    {Math.abs(trend)}%
                </Badge>
                <span className="text-muted-foreground text-xs whitespace-nowrap overflow-hidden text-ellipsis">{comparisonText}</span>
            </div>
        </Card>
    );
}
