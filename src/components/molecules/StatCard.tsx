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
        <Card className="p-3 lg:p-4 xl:p-5 w-full flex flex-col justify-between h-full bg-white">
            <div className="flex items-center justify-between mb-2 lg:mb-3">
                <div className="flex items-center gap-1 lg:gap-1.5 text-muted-foreground text-[10px] lg:text-xs font-medium">
                    {title}
                    <IconWrapper icon={Info} size={10} className="text-muted-foreground/50 hidden sm:block" />
                </div>
                {hasDropdown && (
                    <button className="hidden sm:flex items-center gap-1 text-[9px] lg:text-[10px] font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/50 rounded-full px-2 lg:px-2.5 py-0.5 bg-white">
                        <IconWrapper icon={ChevronDown} size={9} /> July 16 <IconWrapper icon={ChevronDown} size={9} />
                    </button>
                )}
            </div>

            <div className="text-lg lg:text-2xl font-bold mb-2 lg:mb-4 text-foreground">{amount}</div>

            <div className="flex items-center gap-1 lg:gap-1.5 mt-auto">
                <Badge variant={isPositive ? 'success' : 'danger'} className="gap-0.5 px-1 lg:px-1.5 py-0 rounded text-[8px] lg:text-[10px] font-semibold">
                    <IconWrapper icon={isPositive ? TrendingUp : TrendingDown} size={9} />
                    {Math.abs(trend)}%
                </Badge>
                <span className="text-muted-foreground text-[8px] lg:text-[10px] whitespace-nowrap overflow-hidden text-ellipsis">{comparisonText}</span>
            </div>
        </Card>
    );
}
