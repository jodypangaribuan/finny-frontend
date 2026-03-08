import React from 'react';
import { Sidebar } from '../organisms/Sidebar';
import { Header } from '../organisms/Header';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-background text-foreground">
            <Sidebar />
            <div className="flex flex-1 flex-col lg:pl-64 min-w-0">
                <Header />
                <main className="flex-1 p-6 lg:p-8 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
