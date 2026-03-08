import React from 'react';
import { Card } from '../atoms/Card';
import { WidgetHeader } from '../molecules/WidgetHeader';
import { SavingsGoal } from '../molecules/SavingsGoal';
import { Badge } from '../atoms/Badge';

export function SavingsWidget() {
    return (
        <Card className="p-4 bg-card h-full flex flex-col justify-between">
            <div>
                <WidgetHeader title="Savings" actionLabel="This Week" />

                <div className="flex items-end gap-2 mb-5">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">$93,845.00</h2>
                    <Badge variant="success" className="mb-1 py-0 px-1.5 text-[9px] font-bold">↑ 16.8%</Badge>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-auto">
                <SavingsGoal
                    title="Dream House"
                    target={75849.00}
                    current={84857.00}
                    colorClass="bg-primary"
                />
                <SavingsGoal
                    title="Education"
                    target={65445.00}
                    current={53949.00}
                    colorClass="bg-[#FACC15]"
                />
            </div>
        </Card>
    );
}
