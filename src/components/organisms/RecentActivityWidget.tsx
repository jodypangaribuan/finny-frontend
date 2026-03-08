import React from 'react';
import { Card } from '../atoms/Card';
import { WidgetHeader } from '../molecules/WidgetHeader';
import { TransactionItem } from '../molecules/TransactionItem';

export function RecentActivityWidget() {
    const transactions = [
        { name: 'PayPal', cardNumber: '****9484', date: '16 Jul 2024', amount: 848.84, iconColor: 'bg-[#003087]' },
        { name: 'Wise', cardNumber: '****9485', date: '15 Jul 2024', amount: -665.56, iconColor: 'bg-[#9FE870] text-[#163300]' },
        { name: 'Atlassian', cardNumber: '****9485', date: '14 Jul 2024', amount: 546.84, iconColor: 'bg-[#0052CC]' },
        { name: 'Dropbox', cardNumber: '****9486', date: '13 Jul 2024', amount: -738.59, iconColor: 'bg-[#0061FF]' },
    ];

    return (
        <Card className="p-6 bg-white flex flex-col h-full">
            <WidgetHeader title="Recently Activity" actionLabel="This Week" />

            <div className="flex text-[11px] font-semibold text-muted-foreground mb-3 mt-2 px-1 border-b border-border/40 pb-2">
                <div className="w-1/2 xs:w-7/12 md:w-5/12">Name</div>
                <div className="w-0 md:w-4/12 hidden md:block">Date</div>
                <div className="w-1/2 xs:w-5/12 md:w-3/12 text-right">Amount</div>
            </div>

            <div className="flex flex-col flex-1 pb-1">
                {transactions.map((t, i) => (
                    <div key={i} className="border-b border-border/40 last:border-0">
                        <TransactionItem
                            name={t.name}
                            cardNumber={t.cardNumber}
                            date={t.date}
                            amount={t.amount}
                            iconBgColor={t.iconColor}
                        />
                    </div>
                ))}
            </div>
        </Card>
    );
}
