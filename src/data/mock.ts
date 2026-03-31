import { CashflowData, Transaction, User } from '../types';

export const cashflowData: CashflowData[] = [
    { name: 'Dec', income: 4500, expense: 12000 },
    { name: 'Jan', income: 7500, expense: 12500 },
    { name: 'Feb', income: 4500, expense: 9000 },
    { name: 'Mar', income: 9000, expense: 13000 },
    { name: 'Apr', income: 6000, expense: 11000 },
    { name: 'May', income: 8448.05, expense: 16848.05 },
    { name: 'Jun', income: 5000, expense: 13500 },
    { name: 'Jul', income: 4500, expense: 10500 },
    { name: 'Aug', income: 8000, expense: 14000 },
    { name: 'Sep', income: 5000, expense: 11000 },
];

export const recentTransactions: Transaction[] = [
    { name: 'PayPal', cardNumber: '****9484', date: '16 Jul 2024', amount: 848.84, iconBgColor: 'bg-[#003087]', iconText: 'P' },
    { name: 'Wise', cardNumber: '****9485', date: '15 Jul 2024', amount: -665.56, iconBgColor: 'bg-[#9FE870] text-[#163300]', iconText: '37' },
    { name: 'Atlassian', cardNumber: '****9485', date: '14 Jul 2024', amount: 546.84, iconBgColor: 'bg-[#0052CC]', iconText: 'A' },
    { name: 'Dropbox', cardNumber: '****9486', date: '13 Jul 2024', amount: -738.59, iconBgColor: 'bg-[#0061FF]', iconText: 'D' },
];

export const quickTransferUsers: User[] = [
    { src: 'https://i.pravatar.cc/150?u=1', fallback: 'RF', id: '1', name: 'Robert Fox' },
    { src: 'https://i.pravatar.cc/150?u=2', fallback: 'AS', id: '2' },
    { src: 'https://i.pravatar.cc/150?u=3', fallback: 'MJ', id: '3' },
    { src: 'https://i.pravatar.cc/150?u=4', fallback: 'KL', id: '4' },
    { src: 'https://i.pravatar.cc/150?u=5', fallback: 'EW', id: '5' },
    { src: 'https://i.pravatar.cc/150?u=6', fallback: 'RJ', id: '6' },
];
