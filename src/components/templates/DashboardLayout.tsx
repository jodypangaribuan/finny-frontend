"use client";

import React, { useState } from 'react';
import { Sidebar } from '../organisms/Sidebar';
import { Header } from '../organisms/Header';
import { MobileBottomNav } from '../organisms/MobileBottomNav';

/**
 * Renders the main dashboard shell with a collapsible sidebar, header, content area, and mobile bottom navigation.
 * @example
 * DashboardLayout({ children: <div>Dashboard content</div> })
 * <div>Dashboard content</div>
 * @param {React.ReactNode} children - The content to display inside the dashboard main area.
 * @returns {JSX.Element} The dashboard layout component.
 **/
export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-background text-foreground">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex flex-1 flex-col lg:pl-[220px] min-w-0">
                <Header onMenuToggle={() => setSidebarOpen(true)} />
                <main className="flex-1 p-4 lg:px-6 lg:py-5 overflow-x-hidden pb-20">
                    {children}
                </main>
            </div>
            <MobileBottomNav />
        </div>
    );
}
