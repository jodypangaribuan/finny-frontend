import React from 'react';
import { Button } from '../atoms/Button';
import { IconWrapper } from '../atoms/IconWrapper';
import { ChevronDown } from 'lucide-react';

interface WidgetHeaderProps {
    title: string;
    actionLabel?: string;
    onAction?: () => void;
}

export function WidgetHeader({ title, actionLabel, onAction }: WidgetHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">{title}</h3>
            {actionLabel && (
                <Button variant="outline" size="sm" onClick={onAction} className="rounded-full text-xs h-8 text-muted-foreground border-border/60 font-medium">
                    {actionLabel}
                    <IconWrapper icon={ChevronDown} size={14} className="ml-1" />
                </Button>
            )}
        </div>
    );
}
