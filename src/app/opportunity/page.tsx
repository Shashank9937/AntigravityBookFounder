"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Target,
    TrendingUp,
    BarChart3,
    ShieldCheck,
    PieChart,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    Info,
    DollarSign
} from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
    LineChart,
    Line,
    CartesianGrid
} from "recharts";
import { cn } from "@/lib/utils";

const marketSegments = [
    { name: "TAM", value: 120, description: "Total Addressable Market (Global)", color: "var(--muted)" },
    { name: "SAM", value: 45, description: "Serviceable Addressable Market (India B2B)", color: "var(--primary)" },
    { name: "SOM", value: 8, description: "Serviceable Obtainable Market (Year 1 Target)", color: "var(--chart-2)" },
];

export default function OpportunityIntelligencePage() {
    const [cac, setCac] = useState(250);
    const [ltv, setLtv] = useState(1200);
    const [payback, setPayback] = useState(6);
    const [churn, setChurn] = useState(3.5);

    const ltvCacRatio = (ltv / cac).toFixed(1);
    const isHealthy = parseFloat(ltvCacRatio) >= 3;

    return (
        <div className="p-6 h-full flex flex-col gap-6 overflow-hidden">
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-mono uppercase tracking-widest text-primary mb-1">
                        Opportunity Intelligence System
                    </h1>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest flex items-center gap-2">
                        <PieChart className="w-3 h-3 text-chart-3" /> Market Simulation // Unit Economics Modeling
                    </p>
                </div>
                <div className="flex gap-2">
                    <Badge variant="outline" className="border-chart-2 text-chart-2 bg-chart-2/10">MARKET URGENCY: SEVERE</Badge>
                    <Badge variant="outline" className="border-primary text-primary bg-primary/10">PAIN SCORE: 8.8/10</Badge>
                </div>
            </div>

            <div className="flex-1 overflow-hidden grid grid-cols-12 gap-6">

                {/* Left: Market Size & Moat (4 cols) */}
                <div className="col-span-4 space-y-6 flex flex-col min-h-0">
                    <Card className="bg-card/30 border-border">
                        <CardHeader className="p-4 border-b border-border">
                            <CardTitle className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                <Target className="w-4 h-4" /> Market Size Hierarchy ($B)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                            <div className="h-48 mb-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={marketSegments} layout="vertical">
                                        <XAxis type="number" hide />
                                        <YAxis
                                            dataKey="name"
                                            type="category"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: "var(--foreground)", fontSize: 12, fontWeight: "bold" }}
                                            width={40}
                                        />
                                        <Tooltip
                                            cursor={{ fill: 'transparent' }}
                                            contentStyle={{ backgroundColor: 'var(--card)', border: 'none', color: 'var(--foreground)' }}
                                        />
                                        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                                            {marketSegments.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="space-y-2">
                                {marketSegments.map((seg, i) => (
                                    <div key={i} className="flex justify-between items-center text-[10px] font-mono border-b border-border/20 pb-1">
                                        <span className="text-muted-foreground">{seg.description}</span>
                                        <span className="font-bold">${seg.value}B</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="flex-1 bg-card/10 border-border border-dashed">
                        <CardHeader className="p-4 border-b border-border border-dashed">
                            <CardTitle className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" /> Moat Strength Evaluator
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 space-y-6 overflow-y-auto max-h-[400px] scrollbar-hide">
                            {[
                                { label: "Switching Costs", score: 85, color: "var(--primary)" },
                                { label: "Network Effects", score: 40, color: "var(--chart-3)" },
                                { label: "Proprietary Data", score: 92, color: "var(--chart-2)" },
                                { label: "Brand Gravity", score: 55, color: "var(--chart-5)" },
                            ].map((moat, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="flex justify-between text-[10px] uppercase font-mono tracking-tighter">
                                        <span className="text-muted-foreground">{moat.label}</span>
                                        <span className="text-foreground">{moat.score}%</span>
                                    </div>
                                    <div className="h-1 bg-muted rounded-full">
                                        <div
                                            className="h-full rounded-full transition-all duration-1000"
                                            style={{ width: `${moat.score}%`, backgroundColor: moat.color }}
                                        />
                                    </div>
                                </div>
                            ))}

                            <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-sm">
                                <div className="flex items-center gap-2 mb-1">
                                    <Info className="w-3 h-3 text-primary" />
                                    <span className="text-[10px] uppercase font-mono text-primary">Strategic Moat Outlook</span>
                                </div>
                                <p className="text-[11px] text-muted-foreground leading-tight italic">
                                    "Your data moat is compounding at 22% monthly. However, switching costs remain low until v2 deployment."
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Mid: Unit Economics Simulator (5 cols) */}
                <div className="col-span-5 space-y-6 flex flex-col min-h-0">
                    <Card className="flex-1 overflow-hidden bg-background border-border flex flex-col">
                        <CardHeader className="p-4 border-b border-border bg-muted/20">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4" /> Unit Economics Simulator
                                </CardTitle>
                                <Badge className={cn(
                                    "text-[10px] tracking-widest font-mono",
                                    isHealthy ? "bg-green-500/10 text-green-500 border-green-500/30" : "bg-red-500/10 text-red-500 border-red-500/30"
                                )} variant="outline">
                                    SYSTEM STATUS: {isHealthy ? "HEALTHY" : "CRITICAL"}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 flex-1 flex flex-col space-y-8">

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <Label className="text-[10px] uppercase font-mono text-muted-foreground">CAC (Acquisition Cost)</Label>
                                            <span className="text-xs font-mono font-bold text-primary">${cac}</span>
                                        </div>
                                        <Slider
                                            value={[cac]}
                                            max={2000}
                                            step={10}
                                            onValueChange={(v) => setCac(v[0])}
                                            className="text-primary"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <Label className="text-[10px] uppercase font-mono text-muted-foreground">LTV (Lifetime Value)</Label>
                                            <span className="text-xs font-mono font-bold text-primary">${ltv}</span>
                                        </div>
                                        <Slider
                                            value={[ltv]}
                                            max={10000}
                                            step={100}
                                            onValueChange={(v) => setLtv(v[0])}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <Label className="text-[10px] uppercase font-mono text-muted-foreground">Payback (Months)</Label>
                                            <span className="text-xs font-mono font-bold text-primary">{payback}</span>
                                        </div>
                                        <Slider
                                            value={[payback]}
                                            max={24}
                                            step={1}
                                            onValueChange={(v) => setPayback(v[0])}
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <Label className="text-[10px] uppercase font-mono text-muted-foreground">Churn Rate (%)</Label>
                                            <span className="text-xs font-mono font-bold text-primary">{churn}%</span>
                                        </div>
                                        <Slider
                                            value={[churn]}
                                            max={15}
                                            step={0.1}
                                            onValueChange={(v) => setChurn(v[0])}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-muted/20 border border-border rounded-lg relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">LTV : CAC Multiplier</div>
                                <div className={cn(
                                    "text-7xl font-mono font-black tracking-tighter transition-colors",
                                    isHealthy ? "text-primary" : "text-red-500"
                                )}>
                                    {ltvCacRatio}x
                                </div>
                                <div className="text-xs font-mono mt-4 text-muted-foreground">
                                    Target: &gt; 3.0x for Venture Scale
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 border border-border bg-card/30 rounded-sm">
                                    <div className="flex items-center gap-2 mb-1">
                                        <TrendingUp className="w-3 h-3 text-green-500" />
                                        <span className="text-[10px] uppercase font-mono text-muted-foreground">Payback Efficiency</span>
                                    </div>
                                    <div className="text-lg font-mono font-bold">Excellent</div>
                                    <p className="text-[9px] text-muted-foreground">Recouping CAC in {payback} months.</p>
                                </div>
                                <div className="p-4 border border-border bg-card/30 rounded-sm">
                                    <div className="flex items-center gap-2 mb-1">
                                        <DollarSign className="w-3 h-3 text-primary" />
                                        <span className="text-[10px] uppercase font-mono text-muted-foreground">Gross Margin Est.</span>
                                    </div>
                                    <div className="text-lg font-mono font-bold">82%</div>
                                    <p className="text-[9px] text-muted-foreground">Typical B2B SaaS Benchmark.</p>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </div>

                {/* Right: Scenarios (3 cols) */}
                <div className="col-span-3 space-y-6 flex flex-col min-h-0">
                    <Card className="flex-1 bg-card/30 border-border overflow-hidden flex flex-col">
                        <CardHeader className="p-4 border-b border-border bg-primary/5">
                            <CardTitle className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                <Activity className="w-4 h-4" /> Scenario Modeling
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 flex-1 space-y-4 overflow-y-auto scrollbar-hide">

                            <div className="space-y-1">
                                <div className="flex justify-between text-[11px] font-mono">
                                    <span className="text-muted-foreground">"If CAC increases 40%"</span>
                                    <span className="text-red-500 font-bold">CRITICAL</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground leading-tight italic border-l-2 border-red-500/50 pl-2">
                                    LTV:CAC drops to 1.8x. Runway collapses from 14 mo to 8 mo. Pivot acquisition strategy immediately.
                                </p>
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between text-[11px] font-mono">
                                    <span className="text-muted-foreground">"If Churn drops to 1.5%"</span>
                                    <span className="text-green-500 font-bold">BULLISH</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground leading-tight italic border-l-2 border-green-500/50 pl-2">
                                    LTV increases by $4.2K. LTV:CAC hits 8.5x. Raise Series A 4 months early.
                                </p>
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between text-[11px] font-mono">
                                    <span className="text-muted-foreground">"If expansion revenue hits 20%"</span>
                                    <span className="text-primary font-bold">ELITE</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground leading-tight italic border-l-2 border-primary/50 pl-2">
                                    Net Revenue Retention reaches 118%. Unicorn probability increases by 12%.
                                </p>
                            </div>

                            <div className="mt-8 relative h-32 border border-border/50 rounded-sm bg-muted/10 p-2 overflow-hidden">
                                <div className="absolute inset-0 opacity-20">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={[
                                            { x: 1, y: 10 }, { x: 2, y: 15 }, { x: 3, y: 22 }, { x: 4, y: 18 }, { x: 5, y: 35 }, { x: 6, y: 45 }
                                        ]}>
                                            <Line type="monotone" dataKey="y" stroke="var(--primary)" strokeWidth={1} dot={false} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                                    <ArrowUpRight className="w-8 h-8 text-primary opacity-50 mb-1" />
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Projection Vector: Pos+</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-destructive/10 border border-destructive/20 p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <ArrowDownRight className="w-4 h-4 text-destructive" />
                            <span className="text-xs font-mono font-bold text-destructive uppercase">Risk Alert</span>
                        </div>
                        <p className="text-[11px] text-destructive/80 font-mono leading-tight">
                            Current competitive density in segment SOM is increasing. Differentiation must hit &gt; 80% to maintain current CAC levels.
                        </p>
                    </Card>
                </div>

            </div>
        </div>
    );
}
