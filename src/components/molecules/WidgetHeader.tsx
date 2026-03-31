import { Button } from '../atoms/Button';
import { IconWrapper } from '../atoms/IconWrapper';
import { ChevronDown } from 'lucide-react';

interface WidgetHeaderProps {
    title: string;
    actionLabel?: string;
    onAction?: () => void;
}

/**
* Renders a widget header with a title and an optional action button.
* @example
* WidgetHeader({ title: "Overview", actionLabel: "More", onAction: () => {} })
* <div>...</div>
* @param {WidgetHeaderProps} props - Component props containing the title, optional action label, and action handler.
* @returns {JSX.Element} The rendered widget header element.
**/
export function WidgetHeader({ title, actionLabel, onAction }: WidgetHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-[14px]">{title}</h3>
            {actionLabel && (
                <Button variant="outline" size="sm" onClick={onAction} className="rounded-full text-[10px] h-7 px-3 text-muted-foreground border-border/50 font-medium">
                    {actionLabel}
                    <IconWrapper icon={ChevronDown} size={12} className="ml-0.5" />
                </Button>
            )}
        </div>
    );
}
