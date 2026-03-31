"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Renders a theme toggle switch that switches between light and dark modes.
 * @example
 * ThemeToggle()
 * <button>...</button>
 * @returns {JSX.Element} A theme toggle button, or a placeholder while the component is not mounted.
 **/
export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-6 w-11 rounded-full bg-border/50" />;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="group relative flex h-6 w-11 cursor-pointer items-center justify-between rounded-full border border-border/80 bg-muted-bg/50 p-1 transition-all duration-500 hover:border-border dark:border-border/40 dark:bg-black/30"
            aria-label="Toggle Dark Mode"
        >
            {/* Sun icon (left side background) */}
            <Sun
                size={12}
                className="ml-[1px] text-muted-foreground/50 transition-all duration-500"
            />
            {/* Moon icon (right side background) */}
            <Moon
                size={12}
                className="mr-[1px] text-muted-foreground/50 transition-all duration-500"
            />

            {/* The sliding toggle thumb */}
            <div
                className={`absolute left-[2px] top-[1.5px] flex size-[19px] items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) dark:bg-muted-foreground ${isDark ? "translate-x-[20px]" : "translate-x-0"
                    }`}
            >
                {isDark ? (
                    <Moon size={11} className="text-white drop-shadow-md" strokeWidth={3} />
                ) : (
                    <Sun size={11} className="text-yellow-500 drop-shadow-md" strokeWidth={3} />
                )}
            </div>
        </button>
    );
}
