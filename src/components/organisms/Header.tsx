import React from 'react';
import { IconWrapper } from '../atoms/IconWrapper';
import { Avatar } from '../atoms/Avatar';
import { Button } from '../atoms/Button';
import { Search, Bell, ChevronDown } from 'lucide-react';

export function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between bg-background px-6 lg:px-8">
            <div>
                <h1 className="text-xl font-bold text-foreground">Overview</h1>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full shadow-sm bg-white border-border/60 hover:bg-muted-bg">
                    <IconWrapper icon={Search} size={18} className="text-foreground" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full shadow-sm bg-white border-border/60 hover:bg-muted-bg relative">
                    <IconWrapper icon={Bell} size={18} className="text-foreground" />
                    <span className="absolute top-2 right-2.5 h-1.5 w-1.5 rounded-full bg-danger"></span>
                </Button>

                <div className="ml-2 flex items-center gap-3 pl-4 border-l border-border/50 cursor-pointer rounded-full transition-colors bg-white pr-2 py-1 shadow-sm border">
                    <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        alt="Jerry Warren"
                        size="md"
                    />
                    <div className="hidden flex-col md:flex">
                        <span className="text-sm font-semibold">Jerry Warren</span>
                        <span className="text-[11px] text-muted-foreground">Admin</span>
                    </div>
                    <IconWrapper icon={ChevronDown} size={16} className="text-muted-foreground hidden md:block" />
                </div>
            </div>
        </header>
    );
}
