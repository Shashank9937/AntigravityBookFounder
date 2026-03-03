"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Trello,
    Zap,
    Code,
    Share2,
    Database,
    ShieldCheck,
    Landmark,
    TrendingUp,
    Cpu,
    Lock,
    ArrowRight
} from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar
} from "recharts";
import { cn } from "@/lib/utils";

const compoundData = [
    { month: "Jan", linear: 10, leveraged: 12 },
    { month: "Feb", linear: 20, leveraged: 28 },
    { month: "Mar", linear: 30, leveraged: 55 },
    { month: "Apr", linear: 40, leveraged: 98 },
    { month: "May", linear: 50, leveraged: 185 },
    { month: "Jun", linear: 60, leveraged: 340 },
];

const leverageMix = [
    { subject: 'Code', A: 120, B: 110, fullMark: 150 },
    { subject: 'Capital', A: 98, B: 130, fullMark: 150 },
    { subject: 'Media', A: 86, B: 130, fullMark: 150 },
    { subject: 'Brand', A: 99, B: 100, fullMark: 150 },
    { subject: 'IP', A: 85, B: 90, fullMark: 150 },
    { subject: 'Network', A: 65, B: 85, fullMark: 150 },
];

export default function LeverageCreationEngine() {
    return (
        <div className="p-6 h-full flex flex-col gap-6 overflow-hidden">
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-mono uppercase tracking-widest text-primary mb-1">
                        Leverage Creation Engine
                    </h1>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest flex items-center gap-2">
                        <Trello className="w-3 h-3 text-primary" /> Asset Stacking // Compounding Advantage
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <div className="text-[10px] uppercase font-mono text-muted-foreground">Total Leverage Index</div>
                        <div className="text-xl font-mono text-primary font-bold tracking-tighter">786.4 <span className="text-[10px] text-muted-foreground uppercase">Compound Power</span></div>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-hidden grid grid-cols-12 gap-6">

                {/* Left: Compounding Visualization (8 cols) */}
                <div className="col-span-8 flex flex-col gap-6 min-h-0">
                    <Card className="flex-1 bg-card/30 border-border flex flex-col min-h-0">
                        <CardHeader className="p-4 border-b border-border flex flex-row items-center justify-between">
                            <CardTitle className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" /> Leverage vs. Linear Growth Projection
                            </CardTitle>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-muted" />
                                    <span className="text-[10px] font-mono uppercase text-muted-foreground">Linear Output</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="text-[10px] font-mono uppercase text-primary">Leveraged Alpha</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0 flex-1 relative">
                            <div className="absolute inset-x-0 bottom-4 h-[calc(100%-20px)] p-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={compoundData}>
                                        <defs>
                                            <linearGradient id="colorLeveraged" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <XAxis
                                            dataKey="month"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: "var(--muted-foreground)", fontSize: 10, fontFamily: "monospace" }}
                                        />
                                        <YAxis hide />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: 'var(--card)', border: 'none', fontFamily: 'monospace', fontSize: '10px' }}
                                        />
                                        <Area type="monotone" dataKey="linear" stroke="var(--muted-foreground)" fill="none" strokeDasharray="5 5" />
                                        <Area type="monotone" dataKey="leveraged" stroke="var(--primary)" fillOpacity={1} fill="url(#colorLeveraged)" strokeWidth={3} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-4 gap-4 flex-shrink-0">
                        {[
                            { label: "Code Leverage", icon: Code, score: "8.4", delta: "+12%", color: "text-blue-500" },
                            { label: "Content/Media", icon: Share2, score: "7.1", delta: "+45%", color: "text-orange-500" },
                            { label: "Data Network", icon: Database, score: "9.2", delta: "+0.8%", color: "text-green-500" },
                            { label: "Capital Accel", icon: Landmark, score: "4.5", delta: "-2%", color: "text-purple-500" },
                        ].map((stat, i) => (
                            <Card key={i} className="bg-card/40 border-border p-3">
                                <div className="flex items-center justify-between mb-2">
                                    <stat.icon className={cn("w-4 h-4", stat.color)} />
                                    <span className={cn("text-[9px] font-mono font-bold uppercase", stat.delta.startsWith('+') ? "text-primary" : "text-destructive")}>
                                        {stat.delta}
                                    </span>
                                </div>
                                <div className="text-xl font-mono font-black">{stat.score}</div>
                                <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-mono">{stat.label}</div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Right: Leverage Map & Alerts (4 cols) */}
                <div className="col-span-4 space-y-6 flex flex-col min-h-0">
                    <Card className="flex-1 bg-card/20 border-border flex flex-col overflow-hidden">
                        <CardHeader className="p-4 border-b border-border">
                            <CardTitle className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" /> Leverage Defensibility Map
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 flex-1">
                            <div className="h-full w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={leverageMix}>
                                        <PolarGrid stroke="var(--border)" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: "var(--muted-foreground)", fontFamily: "monospace" }} />
                                        <PolarRadiusAxis hide />
                                        <Radar
                                            name="Defense"
                                            dataKey="A"
                                            stroke="var(--primary)"
                                            fill="var(--primary)"
                                            fillOpacity={0.5}
                                        />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border border-primary/20">
                        <CardHeader className="p-3 border-b border-primary/10">
                            <CardTitle className="text-[10px] uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                <Cpu className="w-3 h-3 animate-pulse" /> Bottleneck Identifier
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 space-y-4">
                            <div className="space-y-1">
                                <div className="flex items-center justify-between text-[10px] font-mono uppercase">
                                    <span className="text-muted-foreground">Highest Constraint</span>
                                    <span className="text-primary font-bold">Capital Leverage</span>
                                </div>
                                <p className="text-[11px] text-muted-foreground font-mono leading-tight">
                                    Your current growth is capped by cash-flow. Ingesting $2M in capital leverage would 4x your code velocity.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-mono text-primary bg-primary/10 p-2 rounded-sm border border-primary/20 cursor-pointer hover:bg-primary/20 transition-all group">
                                <span>Initiate Capital Bridge Scan</span>
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-destructive/5 border border-destructive/20 p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Lock className="w-4 h-4 text-destructive" />
                            <span className="text-xs font-mono font-bold text-destructive uppercase">Security Risk</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground font-mono leading-tight">
                            "Media Leverage" is currently platform-dependent. If Algorithm Z shifts, your distribution drops 85%.
                            <br /><span className="text-destructive font-bold uppercase mt-1 block">Solution: Direct Audience Capture.</span>
                        </p>
                    </Card>
                </div>

            </div>
        </div>
    );
}
