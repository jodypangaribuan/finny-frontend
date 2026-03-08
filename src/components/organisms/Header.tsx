"use client";

import React from 'react';
import { IconWrapper } from '../atoms/IconWrapper';
import { Avatar } from '../atoms/Avatar';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';

interface HeaderProps {
    onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex h-14 lg:h-16 w-full items-center justify-between bg-card border-b border-border/40 px-4 lg:px-6">

            <div className="flex items-center gap-3">
                {/* Mobile hamburger */}
                <button
                    onClick={onMenuToggle}
                    className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted-bg transition-colors lg:hidden"
                >
                    <Menu size={20} className="text-foreground" />
                </button>

                {/* Mobile brand */}
                <div className="flex items-center gap-2 lg:hidden">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-white">
                        <div className="w-3 h-3 border-[1.5px] border-white dark:border-card rounded-[2px] relative bg-white dark:bg-card">
                            <div className="w-1 h-1 absolute top-[-4px] right-[-4px] bg-primary"></div>
                        </div>
                    </div>
                    <span className="text-base font-bold text-foreground">Finny</span>
                </div>

                {/* Desktop title */}
                <h1 className="text-base font-bold text-foreground hidden lg:block">Overview</h1>
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
                <button className="flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full hover:bg-muted-bg transition-colors">
                    <IconWrapper icon={Search} size={16} className="text-foreground lg:hidden" />
                    <IconWrapper icon={Search} size={18} className="text-foreground hidden lg:block" />
                </button>
                <button className="flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full hover:bg-muted-bg transition-colors relative">
                    <IconWrapper icon={Bell} size={16} className="text-foreground lg:hidden" />
                    <IconWrapper icon={Bell} size={18} className="text-foreground hidden lg:block" />
                    <span className="absolute top-1 lg:top-1.5 right-1.5 lg:right-2 h-2 w-2 rounded-full bg-danger border-2 border-white dark:border-card"></span>
                </button>

                {/* Desktop profile */}
                <div className="hidden lg:flex ml-1 items-center gap-2.5 cursor-pointer rounded-xl transition-colors bg-card hover:bg-muted-bg py-1.5 px-2">
                    <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        alt="Jerry Warren"
                        size="sm"
                    />
                    <div className="flex flex-col">
                        <span className="text-[13px] font-semibold leading-tight">Jerry Warren</span>
                        <span className="text-[10px] text-muted-foreground leading-tight">Admin</span>
                    </div>
                    <IconWrapper icon={ChevronDown} size={14} className="text-muted-foreground" />
                </div>

                {/* Mobile avatar only */}
                <div className="lg:hidden">
                    <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        alt="Jerry Warren"
                        size="sm"
                    />
                </div>
            </div>
        </header>
    );
}
