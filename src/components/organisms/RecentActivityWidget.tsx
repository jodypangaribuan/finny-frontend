import { Card } from '../atoms/Card';
import { WidgetHeader } from '../molecules/WidgetHeader';
import { TransactionItem } from '../molecules/TransactionItem';
import { ChevronDown } from 'lucide-react';
import { Transaction } from '../../types';

interface RecentActivityWidgetProps {
    transactions?: Transaction[];
}

/**
 * Renders a recent activity widget showing a list of recent transactions with names, dates, and amounts.
 * @example
 * RecentActivityWidget()
 * <RecentActivityWidget />
 * @returns {JSX.Element} The recent activity widget component.
 */
export function RecentActivityWidget({ transactions = [] }: RecentActivityWidgetProps) {
    return (
        <Card className="p-4 bg-card flex flex-col h-full">
            <WidgetHeader title="Recently Activity" actionLabel="This Week" />

            <div className="flex text-[10px] font-semibold text-muted-foreground my-1 px-0.5 border-b border-border/30 pb-2">
                <div className="w-5/12 flex items-center gap-0.5">
                    Name <ChevronDown size={8} />
                </div>
                <div className="w-4/12 flex items-center gap-0.5">
                    Date <ChevronDown size={8} />
                </div>
                <div className="w-3/12 text-right">Amount</div>
            </div>

            <div className="flex flex-col flex-1">
                {transactions.map((t) => (
                    <div key={t.name + t.date} className="border-b border-border/30 last:border-0">
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
