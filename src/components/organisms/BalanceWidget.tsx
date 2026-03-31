import React from 'react';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { IconWrapper } from '../atoms/IconWrapper';
import { Info, ChevronDown, Copy, ArrowUpRight, ArrowDownLeft, Plus } from 'lucide-react';

/**
 * Displays a balance summary card with account info, current balance, change indicator, and action buttons.
 * @example
 * BalanceWidget()
 * <Card>...</Card>
 * @returns {JSX.Element} A balance widget UI component.
 **/
export function BalanceWidget() {
    return (
        <Card className="p-4 lg:p-5 relative bg-card flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-muted-foreground text-[11px] lg:text-xs font-medium">
                    My Balance
                    <IconWrapper icon={Info} size={11} className="text-muted-foreground/50" />
                </div>
                <button className="flex items-center gap-1 text-[9px] lg:text-[10px] font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/50 rounded-full px-2 lg:px-2.5 py-0.5 bg-card">
                    <IconWrapper icon={ChevronDown} size={9} /> July 16 <IconWrapper icon={ChevronDown} size={9} />
                </button>
            </div>

            <div className="flex items-end gap-2 mb-1">
                <h2 className="text-[24px] lg:text-[28px] font-bold tracking-tight text-foreground leading-tight">$24,847.84</h2>
                <Badge variant="success" className="mb-1 py-0 px-1.5 text-[8px] lg:text-[9px] font-bold">↑ 16.8%</Badge>
            </div>

            <div className="flex items-center gap-1.5 mb-4 lg:mb-5 mt-0.5">
                <span className="text-[11px] lg:text-xs font-mono tracking-wider text-muted-foreground">7484 7475 8383 9384</span>
                <button className="flex items-center gap-1 text-[9px] lg:text-[10px] text-muted-foreground font-medium bg-muted-bg/80 border border-border/40 hover:bg-border/50 px-1.5 lg:px-2 py-0.5 rounded transition-colors ml-1">
                    <IconWrapper icon={Copy} size={9} /> Copy
                </button>
            </div>

            <div className="flex items-center gap-2 w-full mt-auto">
                <Button variant="primary" className="flex-1 rounded-lg h-9 lg:h-10 text-[11px] lg:text-xs font-semibold shadow-md shadow-primary/20 bg-primary text-white gap-1">
                    <IconWrapper icon={ArrowUpRight} size={13} /> Transfer
                </Button>
                <Button variant="outline" className="flex-1 rounded-lg h-9 lg:h-10 text-[11px] lg:text-xs font-semibold border-border/60 bg-card text-foreground hover:bg-muted-bg gap-1">
                    <IconWrapper icon={ArrowDownLeft} size={13} /> Received
                </Button>
                <Button variant="outline" size="icon" className="shrink-0 size-9 lg:size-10 rounded-lg border-border/60 bg-card text-foreground hover:bg-muted-bg">
                    <Plus size={14} strokeWidth={2.5} />
                </Button>
            </div>
        </Card>
    );
}
