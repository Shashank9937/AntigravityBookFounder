"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight, Building2, ShoppingCart, CreditCard, Cpu,
    Truck, Zap, Layers, TrendingUp, Users, RefreshCw,
    Code2, ChevronRight, Globe, Target, Rocket
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
};

const models = [
    {
        number: 1,
        title: "Vertical SaaS",
        subtitle: "Industry-Specific Software",
        description: "Instead of software for everyone, it focuses on one industry. One of the most reliable unicorn generators.",
        icon: Building2,
        color: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary/20",
        examples: ["Toast Inc. — restaurant software", "Procore — construction management", "Veeva Systems — pharma software"],
        whyItWorks: ["Businesses pay subscriptions", "High switching costs", "Predictable recurring revenue"],
        revenue: "SaaS subscription",
        math: "10,000 companies × ₹1 lakh/year = ₹1000 crore ARR",
        opportunity: "Logistics, agriculture, manufacturing, healthcare, construction",
    },
    {
        number: 2,
        title: "Marketplace Platforms",
        subtitle: "Connecting Buyers and Sellers",
        description: "Marketplaces connect buyers and sellers at scale with powerful network effects.",
        icon: ShoppingCart,
        color: "text-chart-2",
        bgColor: "bg-chart-2/10",
        borderColor: "border-chart-2/20",
        examples: ["Airbnb", "Uber", "DoorDash"],
        whyItWorks: ["Network effects", "Scales globally", "High transaction volume"],
        revenue: "Take rate (10–30%)",
        math: "₹10,000 crore GMV × 10% commission = ₹1000 crore revenue",
        opportunity: "Services, B2B trade, specialized verticals",
    },
    {
        number: 3,
        title: "Fintech Infrastructure",
        subtitle: "Powering Financial Services",
        description: "This model powers financial services for other companies. Touches every industry.",
        icon: CreditCard,
        color: "text-chart-3",
        bgColor: "bg-chart-3/10",
        borderColor: "border-chart-3/20",
        examples: ["Stripe", "Plaid", "Adyen"],
        whyItWorks: ["Every digital company needs payments", "Massive transaction volume", "Sticky infrastructure"],
        revenue: "Transaction fees",
        math: "Percentage of every transaction processed",
        opportunity: "India's digital payments, lending, insurance infrastructure",
    },
    {
        number: 4,
        title: "AI Infrastructure & Dev Tools",
        subtitle: "Tools for Developers & AI",
        description: "Build tools used by developers or AI companies. Infrastructure becomes critical and irreplaceable.",
        icon: Cpu,
        color: "text-chart-5",
        bgColor: "bg-chart-5/10",
        borderColor: "border-chart-5/20",
        examples: ["OpenAI", "Databricks", "Snowflake Inc."],
        whyItWorks: ["Developers drive adoption", "Infrastructure becomes critical", "High retention"],
        revenue: "Usage-based pricing",
        math: "Scale with customer growth automatically",
        opportunity: "AI tooling, data platforms, developer infrastructure",
    },
    {
        number: 5,
        title: "B2B Supply Chain Platforms",
        subtitle: "Digitizing Fragmented Industries",
        description: "These digitize fragmented industries with huge offline markets and massive inefficiencies.",
        icon: Truck,
        color: "text-chart-4",
        bgColor: "bg-chart-4/10",
        borderColor: "border-chart-4/20",
        examples: ["Flexport — global logistics", "Udaan — B2B trade in India", "Faire — wholesale marketplace"],
        whyItWorks: ["Huge offline markets", "Massive inefficiencies", "Large transaction sizes"],
        revenue: "Commissions + SaaS",
        math: "India has enormous opportunity here",
        opportunity: "Manufacturing, agriculture supply chain, wholesale",
    },
    {
        number: 6,
        title: "Infrastructure for Emerging Industries",
        subtitle: "Core Infrastructure for New Sectors",
        description: "Build core infrastructure for rapidly growing new sectors. Infrastructure becomes extremely valuable.",
        icon: Zap,
        color: "text-chart-3",
        bgColor: "bg-chart-3/10",
        borderColor: "border-chart-3/20",
        examples: ["SpaceX — space launch infra", "Tesla — EV ecosystem", "BYD — EV + battery infra"],
        whyItWorks: ["New industries grow rapidly", "Infrastructure has massive moats", "Capital-intensive barriers"],
        revenue: "Services + hardware",
        math: "Category-defining infrastructure value",
        opportunity: "Climate tech, energy, EV, biomass infrastructure",
    },
    {
        number: 7,
        title: "Platform Ecosystems",
        subtitle: "Platforms Where Others Build",
        description: "Create platforms where third-party innovation increases value. The ultimate network effect.",
        icon: Layers,
        color: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary/20",
        examples: ["Shopify", "Amazon", "Apple"],
        whyItWorks: ["Ecosystems create strong network effects", "Third-party innovation increases value", "Platform lock-in"],
        revenue: "Platform fees + services",
        math: "Revenue scales with ecosystem growth",
        opportunity: "Commerce, creator economy, enterprise ecosystems",
    },
];

const unicornCharacteristics = [
    { label: "Large Market", desc: "₹50,000+ crore market", icon: Globe },
    { label: "Network Effects", desc: "Product strengthens with users", icon: Users },
    { label: "Recurring Revenue", desc: "Subscriptions or repeat transactions", icon: RefreshCw },
    { label: "Tech Leverage", desc: "Software scales cheaply", icon: Code2 },
];

const bestModelsIndia = [
    "B2B supply chain platforms",
    "Vertical SaaS",
    "AI-enabled B2B software",
    "Climate / energy infrastructure",
    "Fintech infrastructure",
];

const unicornMath = [
    { path: "10,000 customers × ₹1 lakh/year", result: "₹1000 Cr ARR" },
    { path: "1 lakh customers × ₹10,000/year", result: "₹1000 Cr ARR" },
    { path: "₹10,000 Cr GMV × 10% commission", result: "₹1000 Cr Revenue" },
];

export default function ModelsPage() {
    return (
        <div className="relative min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 -z-10">
                <div className="grid-pattern absolute inset-0" />
                <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-chart-5/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            {/* ===== HERO ===== */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
                    >
                        <Rocket className="w-3 h-3 text-chart-5" />
                        <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                            Global Unicorn Analysis
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        7 Models That Build
                        <br />
                        <span className="gradient-text">The Most Unicorns</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        Across global startup data, most unicorns fall into a few repeatable
                        business models. These are the 7 that statistically produce the most
                        billion-dollar companies.
                    </motion.p>
                </div>
            </section>

            {/* ===== MODELS ===== */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto space-y-6">
                    {models.map((model, idx) => (
                        <motion.div
                            key={model.number}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeUp}
                            custom={0}
                            className={`glass-card rounded-2xl overflow-hidden border ${model.borderColor}`}
                        >
                            {/* Header */}
                            <div className={`px-8 py-5 flex items-center gap-4 ${model.bgColor}`}>
                                <div className={`w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center`}>
                                    <model.icon className={`w-5 h-5 ${model.color}`} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-muted-foreground">#{String(model.number).padStart(2, '0')}</span>
                                        <h3 className="text-lg font-bold">{model.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-0.5">{model.subtitle}</p>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="px-8 py-6">
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    {model.description}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                    {/* Examples */}
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Examples</h4>
                                        <ul className="space-y-2">
                                            {model.examples.map((ex, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm">
                                                    <ChevronRight className="w-3 h-3 mt-1 shrink-0 text-muted-foreground" />
                                                    {ex}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Why it works */}
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Why It Works</h4>
                                        <ul className="space-y-2">
                                            {model.whyItWorks.map((w, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm">
                                                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${model.bgColor.replace('/10', '')}`} />
                                                    {w}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Revenue + Math */}
                                <div className="flex flex-wrap gap-3">
                                    <div className="px-4 py-2 rounded-lg glass-card">
                                        <span className="text-xs text-muted-foreground">Revenue: </span>
                                        <span className={`text-xs font-semibold ${model.color}`}>{model.revenue}</span>
                                    </div>
                                    <div className="px-4 py-2 rounded-lg glass-card">
                                        <span className="text-xs text-muted-foreground">Math: </span>
                                        <span className="text-xs font-semibold">{model.math}</span>
                                    </div>
                                </div>

                                {/* India opportunity */}
                                <div className={`mt-4 px-4 py-3 rounded-lg ${model.bgColor} flex items-start gap-2`}>
                                    <Target className={`w-3 h-3 mt-0.5 ${model.color} shrink-0`} />
                                    <div>
                                        <span className={`text-xs font-semibold ${model.color}`}>India Opportunity: </span>
                                        <span className="text-xs text-muted-foreground">{model.opportunity}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== UNICORN CHARACTERISTICS ===== */}
            <section className="py-24 px-6 border-t border-border">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.p
                            variants={fadeUp}
                            custom={0}
                            className="text-xs font-medium text-chart-5 tracking-widest uppercase mb-3"
                        >
                            Shared DNA
                        </motion.p>
                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                        >
                            What All Unicorns Share
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {unicornCharacteristics.map((item, i) => (
                            <motion.div
                                key={item.label}
                                variants={fadeUp}
                                custom={i}
                                className="glass-card glass-card-hover rounded-2xl p-6 text-center"
                            >
                                <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                                <h3 className="text-sm font-bold mb-1">{item.label}</h3>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== BEST MODELS FOR INDIA ===== */}
            <section className="py-24 px-6 border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
                            <p className="text-xs font-medium text-chart-3 tracking-widest uppercase mb-3">
                                India Focus
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                                Best Models for India Right Now
                            </h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            {bestModelsIndia.map((model, i) => (
                                <motion.div
                                    key={model}
                                    variants={fadeUp}
                                    custom={i}
                                    className="glass-card glass-card-hover rounded-2xl px-8 py-5 flex items-center gap-4"
                                >
                                    <span className="text-2xl font-bold text-primary/20 font-mono">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-sm font-semibold">{model}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== UNICORN MATH ===== */}
            <section className="py-24 px-6 border-t border-border">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            variants={fadeUp}
                            custom={0}
                            className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
                        >
                            The Simple Math of a{" "}
                            <span className="gradient-text">Unicorn</span>
                        </motion.h2>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {unicornMath.map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    custom={i + 1}
                                    className="glass-card rounded-2xl px-8 py-5 flex items-center justify-between"
                                >
                                    <span className="text-sm text-muted-foreground font-mono">{item.path}</span>
                                    <span className="text-sm font-bold text-primary">{item.result}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== KEY INSIGHT ===== */}
            <section className="py-24 px-6 border-t border-border">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp} custom={0} className="glass-card rounded-2xl p-10 border-gradient">
                            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                            <h2 className="text-2xl font-bold mb-4">The Most Important Insight</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                The startup model matters less than the{" "}
                                <span className="text-foreground font-semibold">market problem</span>.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Unicorn founders focus on{" "}
                                <span className="text-primary font-semibold">huge problems</span>,{" "}
                                <span className="text-chart-2 font-semibold">scalable solutions</span>, and{" "}
                                <span className="text-chart-5 font-semibold">distribution advantage</span>.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== NAV FOOTER ===== */}
            <section className="py-16 px-6 border-t border-border">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                    <Link
                        href="/habits"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        ← 15 Unicorn Habits
                    </Link>
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_40px_rgba(200,255,0,0.2)] transition-all duration-500"
                    >
                        Back to Home
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
