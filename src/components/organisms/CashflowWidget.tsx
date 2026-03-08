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
            <div className="bg-foreground text-background text-xs font-bold py-1 px-3 rounded-full shadow-lg flex items-center gap-2">
                <span>${payload[0].value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
        );
    }
    return null;
};

export function CashflowWidget() {
    return (
        <Card className="p-6 bg-white h-full flex flex-col">
            <WidgetHeader title="Cashflow" actionLabel="This Month" />

            <div className="flex items-center justify-between mb-8">
                <div>
                    <div className="text-sm text-muted-foreground font-medium mb-1">Total Balance</div>
                    <div className="flex items-end gap-3">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">$83,074.00</h2>
                        <Badge variant="success" className="mb-[3px] py-0.5 px-2 text-[10px] font-bold">+16.8%</Badge>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm"></div>
                        <span className="text-xs font-semibold text-muted-foreground">Expense</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-sm"></div>
                        <span className="text-xs font-semibold text-muted-foreground">Income</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 w-full min-h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 10, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 11, fontWeight: 500 }}
                            dy={15}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 11, fontWeight: 500 }}
                            tickFormatter={(value) => `${value >= 1000 ? value / 1000 + 'K' : value}`}
                            allowDecimals={false}
                            tickCount={6}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E2E8F0', strokeWidth: 1, strokeDasharray: '3 3' }} />
                        <Line
                            type="monotone"
                            dataKey="expense"
                            stroke="#1F64FF"
                            strokeWidth={3.5}
                            dot={{ r: 0 }}
                            activeDot={{ r: 6, fill: '#0a0a0a', stroke: '#1F64FF', strokeWidth: 3 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="income"
                            stroke="#FACC15"
                            strokeWidth={3.5}
                            dot={{ r: 0 }}
                            activeDot={{ r: 6, fill: '#0a0a0a', stroke: '#FACC15', strokeWidth: 3 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
