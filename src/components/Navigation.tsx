"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Daily Routine", href: "/routine" },
    { name: "15 Habits", href: "/habits" },
    { name: "Startup Models", href: "/models" },
];

export function Navigation() {
    const pathname = usePathname();

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-between glass-card rounded-2xl px-6 py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(200,255,0,0.6)]" />
                        </div>
                        <span className="text-sm font-semibold tracking-wide text-foreground">
                            FOUNDER<span className="text-primary">OS</span>
                        </span>
                    </Link>

                    {/* Nav Links */}
                    <div className="flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm rounded-xl transition-all duration-300",
                                        isActive
                                            ? "text-primary-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-primary rounded-xl"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10 font-medium">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <Link
                        href="/models"
                        className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300"
                    >
                        <div className="pulse-dot !w-[6px] !h-[6px]" />
                        Start Building
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
