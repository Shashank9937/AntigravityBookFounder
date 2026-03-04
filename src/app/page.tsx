"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Clock, Brain, Rocket, Target, BookOpen, Users,
  TrendingUp, Zap, ArrowRight, Star, ChevronRight
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const founders = [
  "Jeff Bezos", "Elon Musk", "Brian Chesky", "Patrick Collison",
  "Bill Gates", "Mark Zuckerberg", "Jensen Huang", "Sam Altman",
];

const dailyBlocks = [
  { time: "5:30–7:30", label: "Mental Clarity", icon: Brain, color: "text-chart-4" },
  { time: "8:00–11:00", label: "Deep Work", icon: Target, color: "text-primary" },
  { time: "11:00–3:00", label: "Team Execution", icon: Users, color: "text-chart-2" },
  { time: "3:00–6:00", label: "Customer Intel", icon: TrendingUp, color: "text-chart-3" },
  { time: "6:00–8:00", label: "Learning", icon: BookOpen, color: "text-chart-5" },
  { time: "8:30–9:30", label: "Reflection", icon: Star, color: "text-chart-4" },
];

const sections = [
  {
    title: "The Daily Routine",
    subtitle: "6 time blocks used by billionaire founders to maximize output",
    href: "/routine",
    icon: Clock,
    gradient: "from-primary/20 to-transparent",
    stat: "6 Blocks",
  },
  {
    title: "15 Unicorn Habits",
    subtitle: "Based on analysis of 200+ unicorn founders globally",
    href: "/habits",
    icon: Zap,
    gradient: "from-chart-2/20 to-transparent",
    stat: "200+ Founders",
  },
  {
    title: "7 Startup Models",
    subtitle: "The business models that statistically produce the most unicorns",
    href: "/models",
    icon: Rocket,
    gradient: "from-chart-5/20 to-transparent",
    stat: "7 Models",
  },
];

const weeklyDays = [
  { day: "MON", focus: "Strategy", color: "bg-primary" },
  { day: "TUE", focus: "Product", color: "bg-chart-2" },
  { day: "WED", focus: "Customer", color: "bg-chart-3" },
  { day: "THU", focus: "Growth", color: "bg-chart-5" },
  { day: "FRI", focus: "Hiring", color: "bg-chart-4" },
  { day: "SAT", focus: "Learning", color: "bg-primary" },
  { day: "SUN", focus: "Reset", color: "bg-muted-foreground" },
];

const founderRules = [
  { number: "01", rule: "Protect Deep Work", desc: "4–5 hours daily of uninterrupted focus" },
  { number: "02", rule: "Customer Obsession", desc: "Start with the customer and work backwards" },
  { number: "03", rule: "Small Teams Win", desc: "Two Pizza Rule — small teams, faster execution" },
  { number: "04", rule: "Write, Don't Talk", desc: "Written memos over slide decks for clarity" },
  { number: "05", rule: "Speed Over Perfection", desc: "Startup success = iteration speed" },
];

const skillStack = [
  "Problem Discovery",
  "Sales",
  "Product Thinking",
  "Hiring Great People",
  "Distribution Strategy",
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-chart-2/5 rounded-full blur-[100px]" />
      </div>

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <div className="pulse-dot !w-[6px] !h-[6px]" />
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
              Based on 200+ Unicorn Founders
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
          >
            The Billionaire
            <br />
            <span className="gradient-text text-glow">Founder OS</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            The real routines, habits, and startup models used by the world&apos;s most
            successful founders to build companies worth{" "}
            <span className="text-primary font-semibold">₹1000+ crore</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/routine"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_40px_rgba(200,255,0,0.2)] transition-all duration-500"
            >
              Explore The System
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/habits"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-card text-foreground font-semibold text-sm glass-card-hover"
            >
              15 Unicorn Habits
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== FOUNDER MARQUEE ===== */}
      <section className="py-8 border-y border-border overflow-hidden">
        <div className="flex animate-marquee">
          {[...founders, ...founders].map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-8 whitespace-nowrap"
            >
              <span className="text-sm font-medium text-muted-foreground">{name}</span>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            </div>
          ))}
        </div>
      </section>

      {/* ===== DAILY TIMELINE PREVIEW ===== */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-medium text-primary tracking-widest uppercase mb-3"
            >
              Daily Operating System
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              6 Time Blocks. Zero Waste.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              Every billionaire founder structures their day into focused blocks.
              Morning is reserved for thinking, not reacting.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {dailyBlocks.map((block, i) => (
              <motion.div
                key={block.label}
                variants={fadeUp}
                custom={i}
                className="glass-card glass-card-hover rounded-2xl p-5 text-center cursor-default"
              >
                <block.icon className={`w-6 h-6 ${block.color} mx-auto mb-3`} />
                <p className="text-xs text-muted-foreground font-mono mb-1">{block.time}</p>
                <p className="text-sm font-semibold">{block.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8"
          >
            <Link
              href="/routine"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
            >
              See the full routine breakdown
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== THREE PILLARS ===== */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-4"
          >
            {sections.map((section, i) => (
              <motion.div key={section.title} variants={fadeUp} custom={i}>
                <Link href={section.href} className="block h-full">
                  <div className="glass-card glass-card-hover rounded-2xl p-8 h-full relative overflow-hidden group">
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${section.gradient} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                          <section.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">{section.stat}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {section.subtitle}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                        Explore
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== WEEKLY SYSTEM ===== */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-medium text-chart-2 tracking-widest uppercase mb-3"
            >
              Weekly Rhythm
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Every Day Has a Purpose
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {weeklyDays.map((d, i) => (
              <motion.div
                key={d.day}
                variants={fadeUp}
                custom={i}
                className="glass-card glass-card-hover rounded-2xl px-6 py-5 text-center min-w-[130px]"
              >
                <div className={`w-2 h-2 rounded-full ${d.color} mx-auto mb-3`} />
                <p className="text-xs font-mono text-muted-foreground mb-1">{d.day}</p>
                <p className="text-sm font-semibold">{d.focus}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== 5 RULES ===== */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-medium text-chart-3 tracking-widest uppercase mb-3 text-center"
            >
              Non-Negotiable
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center"
            >
              The 5 Founder Rules
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-3"
          >
            {founderRules.map((item, i) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                custom={i}
                className="glass-card glass-card-hover rounded-2xl px-8 py-6 flex items-center gap-6"
              >
                <span className="text-3xl font-bold text-primary/20 font-mono">{item.number}</span>
                <div>
                  <h3 className="text-base font-bold mb-1">{item.rule}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SKILL STACK ===== */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-medium text-chart-5 tracking-widest uppercase mb-3"
            >
              Master These
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-12"
            >
              The Real Skill Stack
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-3"
          >
            {skillStack.map((skill, i) => (
              <motion.div
                key={skill}
                variants={fadeUp}
                custom={i}
                className="px-6 py-3 rounded-full glass-card text-sm font-medium border-gradient"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== HARD TRUTH ===== */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-8"
            >
              The Hard Truth
            </motion.h2>
            <motion.div variants={fadeUp} custom={1} className="glass-card rounded-2xl p-10">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Building a <span className="text-primary font-semibold">₹1000 crore</span> company requires
                10+ years of execution, thousands of customer conversations,
                constant product iteration, and strong team building.
              </p>
              <p className="text-xl font-bold text-foreground mb-2">
                There is no shortcut.
              </p>
              <p className="text-muted-foreground">
                But the routine above creates{" "}
                <span className="text-primary">massive compounding advantage</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER CTA ===== */}
      <section className="py-24 px-6 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
              Ready to operate like a unicorn founder?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground mb-8"
            >
              Explore every routine, habit, and model in detail.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/routine"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_40px_rgba(200,255,0,0.2)] transition-all duration-500"
              >
                Start with Daily Routine
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/models"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-card text-foreground font-semibold text-sm glass-card-hover"
              >
                7 Startup Models
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FounderOS. Built for ambitious founders.
          </p>
          <div className="flex items-center gap-1">
            <div className="pulse-dot !w-[5px] !h-[5px]" />
            <span className="text-xs text-muted-foreground ml-1">System Active</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
