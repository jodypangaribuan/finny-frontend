import React from 'react';
import { Avatar } from '../atoms/Avatar';

interface AvatarGroupProps {
    users: Array<{ src?: string; fallback?: string }>;
    max?: number;
}

export function AvatarGroup({ users, max = 4 }: AvatarGroupProps) {
    const displayUsers = users.slice(0, max);
    const remaining = users.length - max;

    return (
        <div className="flex -space-x-4 overflow-hidden">
            {displayUsers.map((user, i) => (
                <Avatar key={i} src={user.src} fallback={user.fallback} className="ring-2 ring-white" />
            ))}
            {remaining > 0 && (
                <div className="flex size-10 items-center justify-center rounded-full bg-muted-bg text-sm font-medium text-foreground ring-2 ring-white">
                    +{remaining}
                </div>
            )}
        </div>
    );
}
