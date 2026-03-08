import React from 'react';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { IconWrapper } from '../atoms/IconWrapper';
import { Info, ChevronDown, Copy, ArrowUpRight, ArrowDownLeft, Plus } from 'lucide-react';

export function BalanceWidget() {
    return (
        <Card className="p-5 relative bg-white flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-medium">
                    My Balance
                    <IconWrapper icon={Info} size={12} className="text-muted-foreground/50" />
                </div>
                <button className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/50 rounded-full px-2.5 py-0.5 bg-white">
                    <IconWrapper icon={ChevronDown} size={10} /> July 16 <IconWrapper icon={ChevronDown} size={10} />
                </button>
            </div>

            <div className="flex items-end gap-2 mb-1">
                <h2 className="text-[28px] font-bold tracking-tight text-foreground leading-tight">$24,847.84</h2>
                <Badge variant="success" className="mb-1 py-0 px-1.5 text-[9px] font-bold">↑ 16.8%</Badge>
            </div>

            <div className="flex items-center gap-1.5 mb-5 mt-0.5">
                <span className="text-xs font-mono tracking-wider text-muted-foreground">7484 7475 8383 9384</span>
                <button className="flex items-center gap-1 text-[10px] text-muted-foreground font-medium bg-muted-bg/80 border border-border/40 hover:bg-border/50 px-2 py-0.5 rounded transition-colors ml-1">
                    <IconWrapper icon={Copy} size={10} /> Copy
                </button>
            </div>

            <div className="flex items-center gap-2 w-full mt-auto">
                <Button variant="primary" className="flex-1 rounded-lg h-10 text-xs font-semibold shadow-md shadow-primary/20 bg-primary gap-1.5">
                    <IconWrapper icon={ArrowUpRight} size={14} /> Transfer
                </Button>
                <Button variant="outline" className="flex-1 rounded-lg h-10 text-xs font-semibold border-border/60 bg-white text-foreground hover:bg-muted-bg gap-1.5">
                    <IconWrapper icon={ArrowDownLeft} size={14} /> Received
                </Button>
                <Button variant="outline" size="icon" className="shrink-0 h-10 w-10 rounded-lg border-border/60 bg-white text-foreground hover:bg-muted-bg">
                    <Plus size={16} strokeWidth={2.5} />
                </Button>
            </div>
        </Card>
    );
}
