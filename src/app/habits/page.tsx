"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight, Users, Target, Brain, Rocket, PenTool,
    BookOpen, Star, Share2, RefreshCw, Shield, BarChart3,
    Clock, Battery, Search, Flame, ChevronRight
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
};

const habits = [
    {
        number: 1,
        title: "Extreme Customer Proximity",
        description: "Top founders spend 10–20% of their time directly talking to customers.",
        examples: [
            "Brian Chesky personally interviewed early Airbnb users.",
            "Jeff Bezos kept customer emails forwarded to him.",
        ],
        habit: "Talk to 5 customers every week.",
        icon: Users,
        color: "text-chart-2",
        bgColor: "bg-chart-2/10",
    },
    {
        number: 2,
        title: "Obsession With One Problem",
        description: "Unicorn founders usually focus on one problem for years.",
        examples: [
            "Patrick Collison focused on developer payments for a decade.",
            "Elon Musk focused on electrification and space.",
        ],
        habit: "Avoid chasing new ideas constantly.",
        icon: Target,
        color: "text-chart-3",
        bgColor: "bg-chart-3/10",
    },
    {
        number: 3,
        title: "Daily Deep Work",
        description: "Most unicorn founders have 3–5 hours of uninterrupted work daily.",
        examples: [
            "Product thinking, writing strategy, solving core problems.",
        ],
        habit: "Block 4 hours of deep focus every morning.",
        icon: Brain,
        color: "text-primary",
        bgColor: "bg-primary/10",
    },
    {
        number: 4,
        title: "Fast Iteration Speed",
        description: "Successful startups run experiments weekly.",
        examples: [
            "Early Airbnb changed product features almost every week.",
        ],
        habit: "Ship something every week.",
        icon: Rocket,
        color: "text-chart-5",
        bgColor: "bg-chart-5/10",
    },
    {
        number: 5,
        title: "Writing Thinking",
        description: "Top founders write instead of only talking.",
        examples: [
            "At Amazon, meetings start with a 6-page written memo.",
        ],
        habit: "Write documents to clarify thinking.",
        icon: PenTool,
        color: "text-chart-4",
        bgColor: "bg-chart-4/10",
    },
    {
        number: 6,
        title: "Reading Across Disciplines",
        description: "Unicorn founders read widely: business, technology, psychology, history.",
        examples: [
            "Bill Gates reads ~50 books per year.",
        ],
        habit: "Read 1 book per week across different domains.",
        icon: BookOpen,
        color: "text-chart-2",
        bgColor: "bg-chart-2/10",
    },
    {
        number: 7,
        title: "Talent Magnetism",
        description: "Unicorn founders attract exceptional people.",
        examples: [
            "Mark Zuckerberg recruited extremely strong early engineers.",
        ],
        habit: "Spend 20–30% time hiring once company grows.",
        icon: Star,
        color: "text-primary",
        bgColor: "bg-primary/10",
    },
    {
        number: 8,
        title: "Distribution Thinking",
        description: "Successful founders think about how the product spreads — viral loops, network effects, partnerships.",
        examples: [
            "PayPal grew using referral incentives.",
        ],
        habit: "Always ask: how does this product spread?",
        icon: Share2,
        color: "text-chart-3",
        bgColor: "bg-chart-3/10",
    },
    {
        number: 9,
        title: "Rapid Learning Loops",
        description: "Unicorn founders create fast feedback loops: Build → Launch → Learn → Improve.",
        examples: [
            "This cycle happens constantly at every successful startup.",
        ],
        habit: "Compress the feedback loop to days, not months.",
        icon: RefreshCw,
        color: "text-chart-5",
        bgColor: "bg-chart-5/10",
    },
    {
        number: 10,
        title: "High Pain Tolerance",
        description: "Every unicorn founder experienced extreme stress and setbacks.",
        examples: [
            "Tesla nearly went bankrupt multiple times.",
        ],
        habit: "Build psychological resilience deliberately.",
        icon: Shield,
        color: "text-chart-4",
        bgColor: "bg-chart-4/10",
    },
    {
        number: 11,
        title: "Metric Obsession",
        description: "Top founders track a few key numbers daily: revenue growth, activation rate, retention, churn.",
        examples: [
            "Stripe tracks developer activation carefully.",
        ],
        habit: "Know your 3 most important metrics by heart.",
        icon: BarChart3,
        color: "text-chart-2",
        bgColor: "bg-chart-2/10",
    },
    {
        number: 12,
        title: "Long-Term Thinking",
        description: "Unicorn founders often think in 10-year horizons.",
        examples: [
            "Jeff Bezos repeatedly emphasized long-term thinking.",
        ],
        habit: "Avoid short-term decisions that harm long-term value.",
        icon: Clock,
        color: "text-primary",
        bgColor: "bg-primary/10",
    },
    {
        number: 13,
        title: "Personal Energy Management",
        description: "Successful founders manage energy carefully with exercise, sleep discipline, and focused work blocks.",
        examples: [
            "Without energy, execution slows — this is the invisible bottleneck.",
        ],
        habit: "Treat your energy like a company resource.",
        icon: Battery,
        color: "text-chart-3",
        bgColor: "bg-chart-3/10",
    },
    {
        number: 14,
        title: "Aggressive Learning From Other Startups",
        description: 'Great founders constantly analyze other startups: "Why did this company win? Why did this one fail?"',
        examples: [
            "Founders often studied Amazon and Google playbooks.",
        ],
        habit: "Study 1 startup case per week.",
        icon: Search,
        color: "text-chart-5",
        bgColor: "bg-chart-5/10",
    },
    {
        number: 15,
        title: "Relentless Persistence",
        description: "The biggest pattern across unicorn founders: they simply did not quit. Average unicorn journey: 7–10 years.",
        examples: [
            "There is no substitute for showing up every single day.",
        ],
        habit: "Commit to the 10-year journey.",
        icon: Flame,
        color: "text-chart-3",
        bgColor: "bg-chart-3/10",
    },
];

const hiddenPattern = [
    { label: "Choose the right market", icon: Target },
    { label: "Build distribution advantage", icon: Share2 },
    { label: "Execute relentlessly", icon: Flame },
];

export default function HabitsPage() {
    return (
        <div className="relative min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 -z-10">
                <div className="grid-pattern absolute inset-0" />
                <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-chart-2/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-chart-4/5 rounded-full blur-[100px]" />
            </div>

            {/* ===== HERO ===== */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
                    >
                        <Flame className="w-3 h-3 text-chart-3" />
                        <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                            Based on 200+ Unicorn Founders
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        15 Habits That Build
                        <br />
                        <span className="gradient-text">Billion-Dollar Companies</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        These are not motivational habits — they are execution habits observed
                        repeatedly across founders of Stripe, Airbnb, Amazon, Tesla, and Meta.
                    </motion.p>
                </div>
            </section>

            {/* ===== HABITS GRID ===== */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-30px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {habits.map((habit, i) => (
                            <motion.div
                                key={habit.number}
                                variants={fadeUp}
                                custom={i}
                                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-xl ${habit.bgColor} flex items-center justify-center shrink-0`}>
                                        <habit.icon className={`w-4 h-4 ${habit.color}`} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-mono text-muted-foreground">#{String(habit.number).padStart(2, '0')}</span>
                                        <h3 className="text-sm font-bold leading-tight">{habit.title}</h3>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                                    {habit.description}
                                </p>

                                {/* Example */}
                                <div className="text-xs text-muted-foreground italic border-l-2 border-border pl-3 mb-4">
                                    {habit.examples[0]}
                                </div>

                                {/* Action */}
                                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${habit.bgColor}`}>
                                    <ChevronRight className={`w-3 h-3 ${habit.color} shrink-0`} />
                                    <span className={`text-xs font-semibold ${habit.color}`}>{habit.habit}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== HIDDEN PATTERN ===== */}
            <section className="py-24 px-6 border-t border-border">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.p
                            variants={fadeUp}
                            custom={0}
                            className="text-xs font-medium text-chart-3 tracking-widest uppercase mb-3"
                        >
                            The Pattern
                        </motion.p>
                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                        >
                            The Hidden Pattern Behind
                            <br />
                            <span className="gradient-text">Unicorn Founders</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="text-muted-foreground mb-12"
                        >
                            After analyzing hundreds of founders, the pattern is simple.
                            They do three things extremely well:
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        {hiddenPattern.map((item, i) => (
                            <motion.div
                                key={item.label}
                                variants={fadeUp}
                                custom={i + 3}
                                className="glass-card glass-card-hover rounded-2xl px-8 py-6 text-center flex-1 w-full sm:w-auto"
                            >
                                <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                                <p className="text-sm font-bold">{item.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== DAILY HABIT SYSTEM ===== */}
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
                            Daily Habit System
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            custom={1}
                            className="text-muted-foreground"
                        >
                            If you want to operate like a top founder, follow this structure
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-3 gap-4"
                    >
                        {[
                            { label: "Morning", items: ["Exercise", "Reading", "Deep Thinking"], color: "text-chart-3" },
                            { label: "Day", items: ["Deep Work", "Product Decisions", "Team Coordination"], color: "text-primary" },
                            { label: "Evening", items: ["Customer Calls", "Learning", "Reflection"], color: "text-chart-4" },
                        ].map((block, i) => (
                            <motion.div
                                key={block.label}
                                variants={fadeUp}
                                custom={i}
                                className="glass-card rounded-2xl p-6"
                            >
                                <h3 className={`text-sm font-bold ${block.color} mb-4`}>{block.label}</h3>
                                <ul className="space-y-2">
                                    {block.items.map((item, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <ChevronRight className="w-3 h-3 shrink-0" />
                                            {item}
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
                        href="/routine"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        ← Daily Routine
                    </Link>
                    <Link
                        href="/models"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_40px_rgba(200,255,0,0.2)] transition-all duration-500"
                    >
                        Next: 7 Startup Models
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
