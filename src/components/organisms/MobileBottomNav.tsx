"use client";

import React from 'react';
import { IconWrapper } from '../atoms/IconWrapper';
import {
    LayoutGrid, Wallet, ArrowLeftRight, TrendingUp,
    BarChart2, MoreHorizontal
} from 'lucide-react';

/**
 * Renders a fixed mobile-only bottom navigation bar with multiple navigation items.
 * @example
 * MobileBottomNav()
 * <nav>...</nav>
 * @returns {JSX.Element} The mobile bottom navigation component.
**/
export function MobileBottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
            <div className="bg-card border-t border-border/40 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_10px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-around py-1.5">
                    <NavItem icon={LayoutGrid} label="Overview" isActive />
                    <NavItem icon={Wallet} label="Wallet" />
                    <NavItem icon={ArrowLeftRight} label="Transfer" />
                    <NavItem icon={TrendingUp} label="Invest" />
                    <NavItem icon={BarChart2} label="Stats" />
                    <NavItem icon={MoreHorizontal} label="More" />
                </div>
            </div>
        </nav>
    );
}

/**
 * Renders a single navigation item button for the mobile bottom navigation.
 * @example
 * NavItem({ icon, label, isActive })
 * <button>...</button>
 * @param {any} icon - Icon element to display inside the navigation item.
 * @param {string} label - Text label shown below the icon.
 * @param {boolean} [isActive] - Whether the navigation item is currently active.
 * @returns {JSX.Element} A button element representing a mobile navigation item.
 */
function NavItem({
    icon,
    label,
    isActive,
}: {
    icon: any;
    label: string;
    isActive?: boolean;
}) {
    return (
        <button className="flex flex-col items-center gap-0.5 py-1 px-2 min-w-[48px] transition-colors">
            <div className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${isActive ? 'bg-primary/10' : ''}`}>
                <IconWrapper
                    icon={icon}
                    size={20}
                    className={isActive ? "text-primary" : "text-muted-foreground"}
                />
            </div>
            <span className={`text-[9px] font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                {label}
            </span>
        </button>
    );
}
