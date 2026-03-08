import React from 'react';
import { Card } from '../atoms/Card';
import { WidgetHeader } from '../molecules/WidgetHeader';
import { SavingsGoal } from '../molecules/SavingsGoal';
import { Badge } from '../atoms/Badge';

export function SavingsWidget() {
    return (
        <Card className="p-6 bg-white h-full flex flex-col justify-between">
            <div>
                <WidgetHeader title="Savings" actionLabel="This Week" />

                <div className="flex items-end gap-3 mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">$93,845.00</h2>
                    <Badge variant="success" className="mb-2 py-0.5 px-2 text-[10px] font-bold">+16.8%</Badge>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-auto">
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
