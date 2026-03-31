import React from 'react';
import { Card } from '../atoms/Card';
import { WidgetHeader } from '../molecules/WidgetHeader';
import { Button } from '../atoms/Button';
import { Plus } from 'lucide-react';
import { Avatar } from '../atoms/Avatar';

/**
 * Renders a quick transfer widget with a horizontal list of user avatars and a create/add button.
 * @example
 * QuickTransferWidget()
 * <QuickTransferWidget />
 * @returns {JSX.Element} The rendered quick transfer widget component.
 **/
export function QuickTransferWidget() {
    const users = [
        { src: 'https://i.pravatar.cc/150?u=1', fallback: 'RF', id: '1', name: 'Robert Fox' },
        { src: 'https://i.pravatar.cc/150?u=2', fallback: 'AS', id: '2' },
        { src: 'https://i.pravatar.cc/150?u=3', fallback: 'MJ', id: '3' },
        { src: 'https://i.pravatar.cc/150?u=4', fallback: 'KL', id: '4' },
        { src: 'https://i.pravatar.cc/150?u=5', fallback: 'EW', id: '5' },
        { src: 'https://i.pravatar.cc/150?u=6', fallback: 'RJ', id: '6' },
    ];

    return (
        <Card className="p-4 bg-card">
            <WidgetHeader title="Quick transfer" actionLabel="This Week" />

            <div className="flex items-center gap-3 overflow-x-auto pb-1 pt-4 hide-scrollbar">
                <Button variant="outline" size="icon" className="h-11 w-11 rounded-full shrink-0 border-dashed border-[1.5px] text-muted-foreground border-border/60 bg-muted-bg/20 hover:bg-muted-bg">
                    <Plus size={18} className="text-foreground" />
                </Button>

                <div className="flex items-center gap-2.5">
                    <div className="flex flex-col items-center gap-1.5 relative group cursor-pointer">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap shadow-md transition-opacity">
                            {users[0].name}
                            <div className="absolute -bottom-[4px] left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-primary"></div>
                        </div>
                        <Avatar src={users[0].src} size="lg" className="ring-2 ring-primary ring-offset-2 ring-offset-card shrink-0 border-0 shadow-sm" />
                    </div>

                    {users.slice(1).map(user => (
                        <div key={user.id} className="cursor-pointer group">
                            <Avatar src={user.src} size="lg" className="shrink-0 border-0 opacity-80 group-hover:opacity-100 transition-all group-hover:scale-105" />
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}
