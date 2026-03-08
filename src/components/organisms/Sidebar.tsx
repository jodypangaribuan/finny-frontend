"use client";

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { MenuItem } from '../molecules/MenuItem';
import { IconWrapper } from '../atoms/IconWrapper';
import {
    LayoutGrid, Wallet, ArrowLeftRight, Landmark,
    TrendingUp, BarChart2, DollarSign, FileText,
    MessageSquare, Settings, AlertCircle, HelpCircle,
    Moon, X
} from 'lucide-react';

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && theme === 'dark';

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm transition-opacity"
                    onClick={onClose}
                />
            )}

            <aside className={`
                fixed left-0 top-0 z-50 h-screen w-[220px] flex-col border-r border-border/40 bg-card py-5 transition-transform duration-300 ease-in-out
                lg:flex lg:translate-x-0
                ${isOpen ? 'flex translate-x-0' : 'hidden lg:flex -translate-x-full lg:translate-x-0'}
            `}>
                <div className="flex items-center justify-between px-5 mb-6">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
                            <div className="w-3.5 h-3.5 border-[1.5px] border-white dark:border-card rounded-[3px] relative bg-white dark:bg-card">
                                <div className="w-1.5 h-1.5 absolute top-[-5px] right-[-5px] bg-primary"></div>
                            </div>
                        </div>
                        <span className="text-lg font-bold text-foreground tracking-tight">Finny</span>
                    </div>
                    {/* Mobile close button */}
                    <button onClick={onClose} className="lg:hidden flex h-7 w-7 items-center justify-center rounded-lg hover:bg-muted-bg transition-colors">
                        <X size={16} className="text-muted-foreground" />
                    </button>
                </div>

                <div className="flex flex-1 flex-col overflow-y-auto px-3 sidebar-scrollbar pb-3">
                    <div className="flex flex-col gap-0.5">
                        <div className="px-3 py-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Menu</div>
                        <MenuItem icon={LayoutGrid} label="Overview" isActive />
                        <MenuItem icon={Wallet} label="My Wallet" />
                        <MenuItem icon={ArrowLeftRight} label="Transaction" />
                        <MenuItem icon={Landmark} label="Loans" />
                        <MenuItem icon={TrendingUp} label="Investment" />
                        <MenuItem icon={BarChart2} label="Statistic" />
                        <MenuItem icon={DollarSign} label="Budgeting" />
                        <MenuItem icon={FileText} label="Report" />
                        <MenuItem icon={MessageSquare} label="Message" notificationCount={4} />
                    </div>

                    <div className="flex flex-col gap-0.5 mt-4">
                        <div className="px-3 py-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Help & Settings</div>
                        <MenuItem icon={Settings} label="Settings" />
                        <MenuItem icon={AlertCircle} label="Feedback" />
                        <MenuItem icon={HelpCircle} label="Help & Center" />
                    </div>
                </div>

                <div className="mt-2 flex items-center justify-between px-5 pt-3 border-t border-border/30">
                    <div className="flex items-center gap-2.5 text-xs font-medium text-muted-foreground">
                        <IconWrapper icon={Moon} size={16} />
                        <span>Dark Mode</span>
                    </div>
                    <div
                        className="h-5 w-9 rounded-full bg-muted-bg border border-border/60 p-[2px] relative flex items-center cursor-pointer overflow-hidden"
                        onClick={() => setTheme(isDark ? 'light' : 'dark')}
                    >
                        <div
                            className={`h-4 w-4 rounded-full bg-white dark:bg-muted-foreground shadow-sm absolute transition-all duration-300 ease-in-out ${isDark ? 'translate-x-[16px]' : 'translate-x-0'}`}
                        />
                    </div>
                </div>
            </aside>
        </>
    );
}
