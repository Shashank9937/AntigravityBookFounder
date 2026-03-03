"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Crosshair,
    Brain,
    Battery,
    Zap,
    Clock,
    ShieldAlert,
    ChevronRight,
    Focus,
    History,
    TrendingUp,
    BarChart
} from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";
import { cn } from "@/lib/utils";

const focusData = [
    { day: 'Mon', focus: 85, deep: 4 },
    { day: 'Tue', focus: 72, deep: 3 },
    { day: 'Wed', focus: 90, deep: 6 },
    { day: 'Thu', focus: 65, deep: 2 },
    { day: 'Fri', focus: 45, deep: 1 },
    { day: 'Sat', focus: 95, deep: 8 },
    { day: 'Sun', focus: 88, deep: 5 },
];

export default function FounderPerformanceOptimizer() {
    return (
        <div className="p-6 h-full flex flex-col gap-6 overflow-hidden">
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-mono uppercase tracking-widest text-primary mb-1">
                        Founder Performance Optimizer
                    </h1>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest flex items-center gap-2">
                        <Focus className="w-3 h-3 text-chart-2" /> Cognitive Calibration // Focus Optimization
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-muted-foreground uppercase font-mono">Discipline Score</span>
                        <span className="text-xl font-mono text-primary font-bold">8.4 <span className="text-xs text-muted-foreground">/ 10</span></span>
                    </div>
                    <div className="h-10 w-[1px] bg-border" />
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-muted-foreground uppercase font-mono">Current Run State</span>
                        <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px] tracking-widest">PEAK PERFORMANCE</Badge>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-hidden grid grid-cols-12 gap-6">

                {/* Left: Energy & Focus (8 cols) */}
                <div className="col-span-8 flex flex-col gap-6 min-h-0">
                    <Card className="flex-1 bg-card/30 border-border flex flex-col min-h-0">
                        <CardHeader className="p-4 border-b border-border flex flex-row items-center justify-between">
                            <CardTitle className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                <Focus className="w-4 h-4" /> Focus Density vs. Deep Work Hours
                            </CardTitle>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="text-[10px] font-mono uppercase text-primary">Focus Level</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-chart-2" />
                                    <span className="text-[10px] font-mono uppercase text-chart-2">Deep Hours</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 flex-1">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={focusData}>
                                    <XAxis
                                        dataKey="day"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: "var(--muted-foreground)", fontSize: 10, fontFamily: "monospace" }}
                                    />
                                    <YAxis hide />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: 'var(--card)', border: 'none', fontFamily: 'monospace', fontSize: '10px' }}
                                    />
                                    <Line type="monotone" dataKey="focus" stroke="var(--primary)" strokeWidth={2} dot={{ r: 4, fill: "var(--primary)" }} />
                                    <Line type="monotone" dataKey="deep" stroke="var(--chart-2)" strokeWidth={2} dot={{ r: 4, fill: "var(--chart-2)" }} strokeDasharray="5 5" />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-4 gap-4 flex-shrink-0">
                        <Card className="bg-card/40 border-border p-4 flex flex-col justify-between">
                            <div className="flex items-center gap-2 mb-2">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="text-[9px] uppercase font-mono text-muted-foreground">Deep Work Hours</span>
                            </div>
                            <div className="text-2xl font-mono font-black">28.5 <span className="text-xs font-normal text-muted-foreground">/wk</span></div>
                            <div className="text-[9px] text-primary mt-1">+12% vs avg</div>
                        </Card>
                        <Card className="bg-card/40 border-border p-4 flex flex-col justify-between">
                            <div className="flex items-center gap-2 mb-2">
                                <Zap className="w-4 h-4 text-orange-500" />
                                <span className="text-[9px] uppercase font-mono text-muted-foreground">Daily Energy</span>
                            </div>
                            <div className="text-2xl font-mono font-black">82%</div>
                            <div className="text-[9px] text-muted-foreground mt-1">Normal Range</div>
                        </Card>
                        <Card className="bg-card/40 border-border p-4 flex flex-col justify-between">
                            <div className="flex items-center gap-2 mb-2">
                                <Brain className="w-4 h-4 text-purple-500" />
                                <span className="text-[9px] uppercase font-mono text-muted-foreground">Cognitive Fatigue</span>
                            </div>
                            <div className="text-2xl font-mono font-black">Low</div>
                            <div className="text-[9px] text-primary mt-1">Recovery Optimized</div>
                        </Card>
                        <Card className="bg-card/40 border-border p-4 flex flex-col justify-between">
                            <div className="flex items-center gap-2 mb-2">
                                <Battery className="w-4 h-4 text-green-500" />
                                <span className="text-[9px] uppercase font-mono text-muted-foreground">Burn Rate (Bio)</span>
                            </div>
                            <div className="text-2xl font-mono font-black">Medium</div>
                            <div className="text-[9px] text-muted-foreground mt-1">Sustainable</div>
                        </Card>
                    </div>
                </div>

                {/* Right: Bias & Decisions (4 cols) */}
                <div className="col-span-4 space-y-6 flex flex-col min-h-0">
                    <Card className="flex-1 bg-card/20 border-border flex flex-col overflow-hidden">
                        <CardHeader className="p-4 border-b border-border bg-muted/20">
                            <CardTitle className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                <ShieldAlert className="w-4 h-4" /> Cognitive Bias Monitor
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 flex-1 space-y-4 overflow-y-auto scrollbar-hide">
                            <div className="p-3 bg-destructive/5 border border-destructive/20 rounded-sm">
                                <div className="text-[10px] font-mono text-destructive uppercase font-bold mb-1">Active Bias Alert: Sunk Cost Fallacy</div>
                                <p className="text-[11px] text-muted-foreground leading-tight">
                                    You are still allocating "Deep Work" hours to Feature B despite it having 0% conversion in the last 2 weeks. Kill it.
                                </p>
                            </div>
                            <div className="p-3 bg-orange-500/5 border border-orange-500/20 rounded-sm">
                                <div className="text-[10px] font-mono text-orange-500 uppercase font-bold mb-1">Bias Detected: Confirmation Bias</div>
                                <p className="text-[11px] text-muted-foreground leading-tight">
                                    You only screenshotted the positive tweets about your pitch. You ignored the 4 "Hard Truth" critiques.
                                </p>
                            </div>

                            <div className="pt-2">
                                <div className="text-[10px] uppercase font-mono text-muted-foreground mb-2 flex items-center gap-2">
                                    <History className="w-3 h-3" /> Recent Bias History
                                </div>
                                <div className="space-y-1">
                                    {['Overconfidence', 'Availability Heuristic', 'Ego Bias'].map((bias, i) => (
                                        <div key={i} className="flex items-center justify-between text-[11px] font-mono p-1 border-b border-border/20 last:border-0">
                                            <span>{bias}</span>
                                            <span className="text-muted-foreground opacity-50">Cleared</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-background border-border border-dashed overflow-hidden flex flex-col">
                        <CardHeader className="p-4 border-b border-border bg-muted/20">
                            <CardTitle className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" /> Decision Journal Log
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 space-y-4">
                            <div className="space-y-3">
                                {[
                                    { decision: "Hire Content Lead", prob: "70%", status: "Open" },
                                    { decision: "Pivot Pricing to Per-Seat", prob: "85%", status: "Executing" },
                                    { decision: "Drop Legacy Tier", prob: "95%", status: "Done" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-border/20 pb-2 last:border-0 hover:bg-muted/5 p-1 rounded-sm transition-colors">
                                        <div className="flex items-center gap-3">
                                            <ChevronRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span className="text-[11px] font-mono">{item.decision}</span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[9px] font-mono text-primary">{item.prob} Conf</span>
                                            <span className="text-[8px] uppercase text-muted-foreground">{item.status}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary uppercase tracking-widest font-mono text-[10px] h-8">
                                Log New Strategic Decision
                            </Button>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}
