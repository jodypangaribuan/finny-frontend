import React from 'react';
import { Card } from '../atoms/Card';
import { WidgetHeader } from '../molecules/WidgetHeader';
import { TransactionItem } from '../molecules/TransactionItem';
import { ChevronDown } from 'lucide-react';

export function RecentActivityWidget() {
    const transactions = [
        { name: 'PayPal', cardNumber: '****9484', date: '16 Jul 2024', amount: 848.84, iconBgColor: 'bg-[#003087]', iconText: 'P' },
        { name: 'Wise', cardNumber: '****9485', date: '15 Jul 2024', amount: -665.56, iconBgColor: 'bg-[#9FE870] text-[#163300]', iconText: '37' },
        { name: 'Atlassian', cardNumber: '****9485', date: '14 Jul 2024', amount: 546.84, iconBgColor: 'bg-[#0052CC]', iconText: 'A' },
        { name: 'Dropbox', cardNumber: '****9486', date: '13 Jul 2024', amount: -738.59, iconBgColor: 'bg-[#0061FF]', iconText: 'D' },
    ];

    return (
        <Card className="p-6 bg-white flex flex-col h-full">
            <WidgetHeader title="Recently Activity" actionLabel="This Week" />

            <div className="flex text-[11px] font-semibold text-muted-foreground mb-1 mt-2 px-1 border-b border-border/40 pb-3">
                <div className="w-5/12 flex items-center gap-1">
                    Name <ChevronDown size={10} />
                </div>
                <div className="w-4/12 flex items-center gap-1">
                    Date <ChevronDown size={10} />
                </div>
                <div className="w-3/12 text-right">Amount</div>
            </div>

            <div className="flex flex-col flex-1 pb-1">
                {transactions.map((t, i) => (
                    <div key={i} className="border-b border-border/40 last:border-0">
                        <TransactionItem
                            name={t.name}
                            cardNumber={t.cardNumber}
                            date={t.date}
                            amount={t.amount}
                            iconBgColor={t.iconBgColor}
                            iconText={t.iconText}
                        />
                    </div>
                ))}
            </div>
        </Card>
    );
}
