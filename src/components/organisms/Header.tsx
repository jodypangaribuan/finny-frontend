import React from 'react';
import { IconWrapper } from '../atoms/IconWrapper';
import { Avatar } from '../atoms/Avatar';
import { Search, Bell, ChevronDown } from 'lucide-react';

export function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-white border-b border-border/40 px-5 lg:px-6">
            <div>
                <h1 className="text-base font-bold text-foreground">Overview</h1>
            </div>

            <div className="flex items-center gap-3">
                <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted-bg transition-colors">
                    <IconWrapper icon={Search} size={18} className="text-foreground" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted-bg transition-colors relative">
                    <IconWrapper icon={Bell} size={18} className="text-foreground" />
                    <span className="absolute top-1.5 right-2 h-2 w-2 rounded-full bg-danger border-2 border-white"></span>
                </button>

                <div className="ml-1 flex items-center gap-2.5 cursor-pointer rounded-xl transition-colors bg-white py-1.5 px-2">
                    <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        alt="Jerry Warren"
                        size="sm"
                    />
                    <div className="hidden flex-col md:flex">
                        <span className="text-[13px] font-semibold leading-tight">Jerry Warren</span>
                        <span className="text-[10px] text-muted-foreground leading-tight">Admin</span>
                    </div>
                    <IconWrapper icon={ChevronDown} size={14} className="text-muted-foreground hidden md:block" />
                </div>
            </div>
        </header>
    );
}
