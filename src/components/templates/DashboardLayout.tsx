import React from 'react';
import { Sidebar } from '../organisms/Sidebar';
import { Header } from '../organisms/Header';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-background text-foreground">
            <Sidebar />
            <div className="flex flex-1 flex-col lg:pl-[220px] min-w-0">
                <Header />
                <main className="flex-1 p-5 lg:px-6 lg:py-5 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
