import React from 'react';
import { cn } from '@/lib/utils';

interface SavingsGoalProps {
    title: string;
    target: number;
    current: number;
    colorClass: string;
}

export function SavingsGoal({ title, target, current, colorClass }: SavingsGoalProps) {
    const percentage = Math.min(Math.round((current / target) * 100), 100);

    return (
        <div className="flex flex-col gap-2 w-full">
            <div className={cn("border-l-[3px] pl-2.5 py-0.5", colorClass.replace('bg-', 'border-'))}>
                <div className="text-[12px] font-bold">{title}</div>
                <div className="text-[10px] text-muted-foreground">Target: ${target.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </div>

            <div className="font-semibold text-[12px]">
                ${current.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>

            <div className="h-5 w-full rounded bg-muted-bg/80 overflow-hidden flex relative">
                <div
                    className={cn("h-full flex items-center px-2 text-[9px] font-bold text-white transition-all duration-500 rounded", colorClass)}
                    style={{ width: `${percentage}%` }}
                >
                    {percentage}%
                </div>
                <div className="flex-1 right-0 absolute inset-y-0 opacity-10 bg-[length:8px_8px]"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
                        backgroundPosition: '0 0, 4px 4px',
                        left: `${percentage}%`
                    }}>
                </div>
            </div>
        </div>
    );
}
