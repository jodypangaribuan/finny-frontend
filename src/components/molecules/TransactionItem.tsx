import { cn } from '@/lib/utils';

interface TransactionItemProps {
    name: string;
    date: string;
    amount: number;
    cardNumber: string;
    iconBgColor?: string;
    iconText?: string;
}

/**
 * Renders a transaction list item showing the merchant name, date, card number, and formatted amount.
 * @example
 * TransactionItem({
 *   name: "Coffee Shop",
 *   date: "2026-03-31",
 *   amount: -12.5,
 *   cardNumber: "**** 4242",
 *   avatarSrc: "/avatar.png",
 *   avatarFallback: "CS",
 *   iconBgColor: "bg-blue-500",
 *   iconText: "C"
 * })
 * null
 * @param {TransactionItemProps} props - Transaction details and display customization options.
 * @returns {JSX.Element} The rendered transaction item row.
 **/
export function TransactionItem({
    name,
    date,
    amount,
    cardNumber,
    iconBgColor,
    iconText
}: TransactionItemProps) {
    const isPositive = amount > 0;

    return (
        <div className="flex items-center py-2.5 gap-1.5">
            {/* Name column */}
            <div className="flex items-center gap-2.5 w-5/12">
                <div className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white font-bold text-[11px] overflow-hidden", iconBgColor || "bg-primary")}>
                    {iconText || name.charAt(0)}
                </div>
                <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-foreground truncate">{name}</p>
                    <p className="text-[10px] text-muted-foreground">{cardNumber}</p>
                </div>
            </div>

            {/* Date column */}
            <div className="w-4/12 text-[12px] text-muted-foreground">
                {date}
            </div>

            {/* Amount column */}
            <div className={cn(
                "w-3/12 text-[12px] font-semibold text-right",
                isPositive ? "text-primary" : "text-danger"
            )}>
                {isPositive ? '+' : ''}{amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
        </div>
    );
}
