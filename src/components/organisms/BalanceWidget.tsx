import React from 'react';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { IconWrapper } from '../atoms/IconWrapper';
import { Info, ChevronDown, Copy, ArrowUpRight, ArrowDownLeft, Plus } from 'lucide-react';

export function BalanceWidget() {
    return (
        <Card className="p-6 relative bg-white flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                    My Balance
                    <IconWrapper icon={Info} size={14} className="text-muted-foreground/50" />
                </div>
                <button className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/60 rounded-full px-3 py-1 bg-muted-bg">
                    July 16 <IconWrapper icon={ChevronDown} size={14} />
                </button>
            </div>

            <div className="flex items-end gap-3 mb-2">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">$24,847.84</h2>
                <Badge variant="success" className="mb-2 py-0.5 px-2 text-[10px] font-bold">+16.8%</Badge>
            </div>

            <div className="flex items-center gap-2 mb-8 mt-1">
                <span className="text-sm font-mono tracking-widest text-muted-foreground">7484 7475 8383 9384</span>
                <button className="flex items-center gap-1 text-[11px] text-muted-foreground font-medium bg-muted-bg border border-border/60 hover:bg-border/50 px-2 py-1 rounded transition-colors ml-2">
                    <IconWrapper icon={Copy} size={12} /> Copy
                </button>
            </div>

            <div className="flex items-center gap-3 w-full mt-auto">
                <Button variant="primary" className="flex-1 rounded-xl h-12 text-sm font-semibold shadow-lg shadow-primary/20 bg-primary">
                    <IconWrapper icon={ArrowUpRight} size={18} /> Transfer
                </Button>
                <Button variant="outline" className="flex-1 rounded-xl h-12 text-sm font-semibold border-border bg-muted-bg/30 text-foreground hover:bg-muted-bg">
                    <IconWrapper icon={ArrowDownLeft} size={18} /> Received
                </Button>
                <Button variant="outline" size="icon" className="shrink-0 h-12 w-12 rounded-xl border-border bg-muted-bg/30 text-foreground hover:bg-muted-bg">
                    <Plus size={20} strokeWidth={2.5} />
                </Button>
            </div>
        </Card>
    );
}
