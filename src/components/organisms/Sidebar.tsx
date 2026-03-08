import React from 'react';
import { MenuItem } from '../molecules/MenuItem';
import { IconWrapper } from '../atoms/IconWrapper';
import {
    LayoutGrid, Wallet, ArrowLeftRight, Landmark,
    TrendingUp, BarChart2, DollarSign, FileText,
    MessageSquare, Settings, AlertCircle, HelpCircle,
    Moon
} from 'lucide-react';

export function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-border bg-white py-6 transition-transform lg:flex shrink-0">
            <div className="flex items-center gap-3 px-6 mb-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                    <div className="w-4 h-4 border-2 border-white rounded-[4px] relative bg-white">
                        <div className="w-2 h-2 absolute top-[-6px] right-[-6px] bg-primary group-hover:bg-primary-hover"></div>
                    </div>
                </div>
                <span className="text-xl font-bold text-foreground tracking-tight">DeliFin</span>
            </div>

            <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 sidebar-scrollbar pb-4">
                <div className="flex flex-col gap-1">
                    <div className="px-4 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Menu</div>
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

                <div className="flex flex-col gap-1 mt-auto">
                    <div className="px-4 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Help & Settings</div>
                    <MenuItem icon={Settings} label="Settings" />
                    <MenuItem icon={AlertCircle} label="Feedback" />
                    <MenuItem icon={HelpCircle} label="Help & Center" />
                </div>
            </div>

            <div className="mt-2 flex items-center justify-between px-6 pt-4 border-t border-border/40">
                <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                    <IconWrapper icon={Moon} size={20} />
                    <span>Dark Mode</span>
                </div>
                <div className="h-6 w-11 rounded-full bg-muted-bg border border-border/80 p-[2px] relative flex md:items-center cursor-pointer">
                    <div className="h-4 w-4 rounded-full bg-white shadow-sm transition-transform" />
                </div>
            </div>
        </aside>
    );
}
