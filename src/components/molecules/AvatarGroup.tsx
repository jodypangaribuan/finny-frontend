import React from 'react';
import { Avatar } from '../atoms/Avatar';

interface AvatarGroupProps {
    users: Array<{ src?: string; fallback?: string }>;
    max?: number;
}

/**
 * Renders a grouped row of user avatars with an optional overflow count badge.
 * @example
 * AvatarGroup({ users, max: 4 })
 * <div>...</div>
 * @param {AvatarGroupProps} users - Array of user objects to display as avatars.
 * @param {number} [max=4] - Maximum number of avatars to show before displaying a remaining count.
 * @returns {JSX.Element} A flex container containing overlapping avatars and an optional "+remaining" badge.
 **/
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
