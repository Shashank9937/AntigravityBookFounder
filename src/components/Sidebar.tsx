"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Terminal,
    BookOpen,
    Activity,
    Target,
    Trello,
    BrainCircuit,
    Crosshair,
    Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "UPM OS // Dashboard", href: "/", icon: Terminal },
    { name: "Book Intelligence", href: "/books", icon: BookOpen },
    { name: "Execution Velocity", href: "/execution", icon: Activity },
    { name: "Opportunity Intel", href: "/opportunity", icon: Target },
    { name: "Leverage Creation", href: "/leverage", icon: Trello },
    { name: "AI Co-Pilot", href: "/ai", icon: BrainCircuit },
    { name: "Founder Optimizer", href: "/performance", icon: Crosshair },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 h-full bg-background border-r border-border flex flex-col uppercase tracking-wider text-xs">
            <div className="p-4 border-b border-border flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-bold tracking-widest text-primary">UPM // 0.1</span>
            </div>

            <div className="flex-1 py-4 flex flex-col gap-1 px-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-sm transition-all duration-200",
                                isActive
                                    ? "bg-primary/10 text-primary border-l-2 border-primary"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            <item.icon className="w-4 h-4" />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </div>

            <div className="p-4 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    <Settings className="w-4 h-4" />
                    <span>System Config</span>
                </div>
            </div>
        </div>
    );
}
