"use client";

import React from 'react';
import { Card } from '../atoms/Card';
import { WidgetHeader } from '../molecules/WidgetHeader';
import { Badge } from '../atoms/Badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
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

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-foreground text-card text-[10px] font-bold py-1 px-2.5 rounded-full shadow-lg flex items-center gap-1.5">
                <span>${payload[0].value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
        );
    }
    return null;
};

/**
 * Renders a cashflow dashboard widget showing total balance, month-over-month change, and a line chart comparing expense and income trends.
 * @example
 * CashflowWidget()
 * <Card>...</Card>
 * @returns {JSX.Element} A React element representing the cashflow widget.
 */
export function CashflowWidget() {
    return (
        <Card className="p-4 bg-card h-full flex flex-col">
            <WidgetHeader title="Cashflow" actionLabel="This Month" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 lg:mb-5 gap-2">
                <div>
                    <div className="text-[10px] lg:text-[11px] text-muted-foreground font-medium mb-0.5">Total Balance</div>
                    <div className="flex items-end gap-2">
                        <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-foreground">$83,074.00</h2>
                        <Badge variant="success" className="mb-[2px] py-0 px-1.5 text-[8px] lg:text-[9px] font-bold">↑ 16.8%</Badge>
                    </div>
                </div>
                <div className="flex items-center gap-3 lg:gap-4">
                    <div className="flex items-center gap-1.5">
                        <div className="size-2 rounded-full bg-primary"></div>
                        <span className="text-[9px] lg:text-[10px] font-semibold text-muted-foreground">Expense</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="size-2 rounded-full bg-yellow-400"></div>
                        <span className="text-[9px] lg:text-[10px] font-semibold text-muted-foreground">Income</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 w-full min-h-[160px] lg:min-h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 5, left: -30, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 9, fontWeight: 500 }}
                            dy={8}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 9, fontWeight: 500 }}
                            tickFormatter={(value) => (value >= 1000 ? `${value / 1000}K` : `${value}`)}
                            allowDecimals={false}
                            tickCount={5}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E2E8F0', strokeWidth: 1, strokeDasharray: '3 3' }} />
                        <Line
                            type="monotone"
                            dataKey="expense"
                            stroke="#1F64FF"
                            strokeWidth={2.5}
                            dot={{ r: 0 }}
                            activeDot={{ r: 4, fill: '#0a0a0a', stroke: '#1F64FF', strokeWidth: 2 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="income"
                            stroke="#FACC15"
                            strokeWidth={2.5}
                            dot={{ r: 0 }}
                            activeDot={{ r: 4, fill: '#0a0a0a', stroke: '#FACC15', strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
