"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
    Sun, Brain, Target, Users, Phone, BookOpen, Moon,
    ArrowRight, ChevronRight, Dumbbell, PenTool, Coffee,
    Code2, Lightbulb, BarChart3, Headphones, Star
} from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

const timeBlocks = [
    {
        id: "morning",
        time: "5:30 – 7:30 AM",
        title: "Mental Clarity Block",
        purpose: "Strategic thinking and energy",
        icon: Sun,
        color: "text-chart-3",
        bgColor: "bg-chart-3/10",
        borderColor: "border-chart-3/20",
        activities: [
            { icon: Coffee, text: "Wake up early" },
            { icon: Dumbbell, text: "Exercise (strength / cardio)" },
            { icon: BookOpen, text: "Read or learn" },
            { icon: PenTool, text: "Write or think" },
        ],
        examples: [
            "Jeff Bezos avoids early meetings and protects morning thinking time.",
            "Elon Musk starts reviewing priorities immediately.",
        ],
        keyHabit: "Morning is reserved for thinking, not reacting.",
    },
    {
        id: "deepwork",
        time: "8:00 – 11:00 AM",
        title: "Deep Work Block",
        purpose: "Highest impact work — this is where real progress happens",
        icon: Target,
        color: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary/20",
        activities: [
            { icon: Lightbulb, text: "Product decisions" },
            { icon: Code2, text: "Engineering discussions" },
            { icon: Brain, text: "Strategy" },
            { icon: PenTool, text: "Writing product docs & solving major problems" },
        ],
        examples: [
            "At Stripe, founders focus deeply on product architecture and developer experience.",
        ],
        keyHabit: "No distractions. Phones off.",
    },
    {
        id: "execution",
        time: "11:00 AM – 3:00 PM",
        title: "Product + Team Execution",
        purpose: "Structured meetings, not random meetings",
        icon: Users,
        color: "text-chart-2",
        bgColor: "bg-chart-2/10",
        borderColor: "border-chart-2/20",
        activities: [
            { icon: BarChart3, text: "Product roadmap" },
            { icon: Target, text: "Engineering blockers" },
            { icon: Users, text: "Hiring decisions" },
            { icon: TrendingUp, text: "Growth metrics" },
        ],
        examples: [
            "At Airbnb, founders spend hours refining product details and user experience.",
        ],
        keyHabit: "Only meetings that move the needle.",
    },
    {
        id: "customer",
        time: "3:00 – 6:00 PM",
        title: "Customer / Market Interaction",
        purpose: "Billionaire founders stay extremely close to customers",
        icon: Phone,
        color: "text-chart-5",
        bgColor: "bg-chart-5/10",
        borderColor: "border-chart-5/20",
        activities: [
            { icon: Phone, text: "Talking to customers" },
            { icon: Star, text: "Reading feedback" },
            { icon: BarChart3, text: "Studying market trends" },
            { icon: Headphones, text: "Reviewing sales calls" },
        ],
        examples: [
            "Brian Chesky personally studied user feedback and redesigned Airbnb's product multiple times.",
        ],
        keyHabit: "Customer proximity = product-market fit.",
    },
    {
        id: "learning",
        time: "6:00 – 8:00 PM",
        title: "Learning & Idea Expansion",
        purpose: "Expand thinking beyond the immediate",
        icon: BookOpen,
        color: "text-chart-4",
        bgColor: "bg-chart-4/10",
        borderColor: "border-chart-4/20",
        activities: [
            { icon: BookOpen, text: "Reading" },
            { icon: BarChart3, text: "Studying markets" },
            { icon: Headphones, text: "Watching lectures" },
            { icon: Lightbulb, text: "Brainstorming" },
        ],
        examples: [
            'Bill Gates famously schedules "Think Weeks".',
        ],
        keyHabit: "Learn across disciplines to find hidden patterns.",
    },
    {
        id: "reflection",
        time: "8:30 – 9:30 PM",
        title: "Reflection & Planning",
        purpose: "Daily review and next-day planning",
        icon: Moon,
        color: "text-muted-foreground",
        bgColor: "bg-muted/30",
        borderColor: "border-muted",
        activities: [
            { icon: Star, text: "What did we achieve today?" },
            { icon: Target, text: "What slowed us down?" },
            { icon: Brain, text: "What matters most tomorrow?" },
        ],
        examples: [
            "Then they plan the next day with absolute clarity.",
        ],
        keyHabit: "Never start a day without a plan.",
    },
];

const weeklySystem = [
    {
        day: "Monday",
        label: "Strategy Day",
        focus: ["Company direction", "Key metrics", "Product roadmap"],
        color: "bg-primary",
        textColor: "text-primary",
    },
    {
        day: "Tuesday",
        label: "Product Day",
        focus: ["Feature decisions", "Engineering progress", "User experience"],
        color: "bg-chart-2",
        textColor: "text-chart-2",
    },
    {
        day: "Wednesday",
        label: "Customer Day",
        focus: ["Customer interviews", "Feedback analysis"],
        color: "bg-chart-3",
        textColor: "text-chart-3",
    },
    {
        day: "Thursday",
        label: "Growth Day",
        focus: ["Marketing", "Partnerships", "Distribution"],
        color: "bg-chart-5",
        textColor: "text-chart-5",
    },
    {
        day: "Friday",
        label: "Hiring Day",
        focus: ["Interviews", "Leadership building"],
        color: "bg-chart-4",
        textColor: "text-chart-4",
    },
    {
        day: "Saturday",
        label: "Learning + Thinking",
        focus: ["New technology", "Markets", "Competition"],
        color: "bg-primary",
        textColor: "text-primary",
    },
    {
        day: "Sunday",
        label: "Reset",
        focus: ["Light thinking", "Recharge"],
        color: "bg-muted-foreground",
        textColor: "text-muted-foreground",
    },
];

const dailyOS = [
    { time: "6:00 AM", activity: "Wake up" },
    { time: "6:15", activity: "Exercise" },
    { time: "7:00", activity: "Reading" },
    { time: "7:30", activity: "Thinking + Journaling" },
    { time: "8:30", activity: "Deep Work" },
    { time: "11:30", activity: "Team Meetings" },
    { time: "2:00", activity: "Product + Operations" },
    { time: "4:00", activity: "Customer Calls" },
    { time: "6:00", activity: "Learning" },
    { time: "8:00", activity: "Reflection" },
];

// We need the import for the chart icon used in the data
import { TrendingUp } from "lucide-react";

export default function RoutinePage() {
    return (
        <div className="relative min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 -z-10">
                <div className="grid-pattern absolute inset-0" />
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-chart-3/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            {/* ===== HERO ===== */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
                    >
                        <Sun className="w-3 h-3 text-chart-3" />
                        <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                            Daily + Weekly System
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        The Founder
                        <br />
                        <span className="gradient-text">Daily Routine</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        How billionaire founders structure every hour of their day to maximize
                        execution velocity and compounding advantage.
                    </motion.p>
                </div>
            </section>

            {/* ===== TIME BLOCKS ===== */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto space-y-6">
                    {timeBlocks.map((block, idx) => (
                        <motion.div
                            key={block.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeUp}
                            custom={0}
                            className={`glass-card rounded-2xl overflow-hidden border ${block.borderColor}`}
                        >
                            {/* Header */}
                            <div className={`px-8 py-5 flex items-center gap-4 ${block.bgColor}`}>
                                <block.icon className={`w-5 h-5 ${block.color}`} />
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-lg font-bold">{block.title}</h3>
                                        <span className="text-xs font-mono text-muted-foreground">{block.time}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-0.5">{block.purpose}</p>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="px-8 py-6">
                                {/* Activities */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                    {block.activities.map((act, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm">
                                            <act.icon className="w-4 h-4 text-muted-foreground shrink-0" />
                                            <span>{act.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Examples */}
                                <div className="space-y-2 mb-4">
                                    {block.examples.map((ex, i) => (
                                        <p key={i} className="text-sm text-muted-foreground italic pl-4 border-l-2 border-border">
                                            {ex}
                                        </p>
                                    ))}
                                </div>

                                {/* Key Habit */}
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${block.bgColor}`}>
                                    <ChevronRight className={`w-3 h-3 ${block.color}`} />
                                    <span className={`text-xs font-semibold ${block.color}`}>{block.keyHabit}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== QUICK REFERENCE TIMELINE ===== */}
            <section className="py-24 px-6 border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.h2
                            variants={fadeUp}
                            custom={0}
                            className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
                        >
                            Quick Reference
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            custom={1}
                            className="text-muted-foreground"
                        >
                            Your daily schedule at a glance
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Timeline line */}
                        <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border" />

                        {dailyOS.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="flex items-center gap-6 py-3 group"
                            >
                                <span className="text-xs font-mono text-muted-foreground w-16 text-right shrink-0">
                                    {item.time}
                                </span>
                                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(200,255,0,0.4)] transition-all shrink-0 relative z-10" />
                                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                    {item.activity}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== WEEKLY SYSTEM ===== */}
            <section className="py-24 px-6 border-t border-border">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.p
                            variants={fadeUp}
                            custom={0}
                            className="text-xs font-medium text-chart-2 tracking-widest uppercase mb-3"
                        >
                            Weekly System
                        </motion.p>
                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                        >
                            The Billionaire Founder
                            <br />
                            <span className="gradient-text">Weekly Rhythm</span>
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-4"
                    >
                        {weeklySystem.map((day, i) => (
                            <motion.div
                                key={day.day}
                                variants={fadeUp}
                                custom={i}
                                className="glass-card glass-card-hover rounded-2xl p-6"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-3 h-3 rounded-full ${day.color}`} />
                                    <div>
                                        <h3 className="text-base font-bold">{day.day}</h3>
                                        <p className={`text-xs font-medium ${day.textColor}`}>{day.label}</p>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {day.focus.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <ChevronRight className="w-3 h-3 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== NAV FOOTER ===== */}
            <section className="py-16 px-6 border-t border-border">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                    <Link
                        href="/"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        ← Back to Home
                    </Link>
                    <Link
                        href="/habits"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_40px_rgba(200,255,0,0.2)] transition-all duration-500"
                    >
                        Next: 15 Unicorn Habits
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
