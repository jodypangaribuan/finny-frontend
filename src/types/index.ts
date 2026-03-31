export interface CashflowData {
    name: string;
    income: number;
    expense: number;
}

export interface Transaction {
    name: string;
    cardNumber: string;
    date: string;
    amount: number;
    iconBgColor?: string;
    iconText?: string;
}

export interface User {
    id: string;
    src?: string;
    fallback?: string;
    name?: string;
}
