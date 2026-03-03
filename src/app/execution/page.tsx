"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    Activity,
    ChevronRight,
    RotateCcw,
    Zap,
    Users,
    Layers,
    AlertTriangle,
    CheckCircle2,
    Brain,
    History
} from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell
} from "recharts";
import { cn } from "@/lib/utils";

const velocityHistory = [
    { week: "W01", velocity: 45, experiments: 4, conversations: 12, loops: 2 },
    { week: "W02", velocity: 52, experiments: 6, conversations: 15, loops: 3 },
    { week: "W03", velocity: 48, experiments: 3, conversations: 10, loops: 2 },
    { week: "W04", velocity: 70, experiments: 8, conversations: 22, loops: 5 },
    { week: "W05", velocity: 85, experiments: 12, conversations: 30, loops: 8 },
    { week: "Current", velocity: 92, experiments: 14, conversations: 35, loops: 10 },
];

const openLoops = [
    { id: 1, topic: "Pricing Model Elasticity", started: "3 days ago", tasks: 2, total: 3, priority: "High" },
    { id: 2, topic: "Retention vs Onboarding UX", started: "5 days ago", tasks: 1, total: 4, priority: "Medium" },
    { id: 3, topic: "Direct Sales vs Partner Channel", started: "1 day ago", tasks: 0, total: 2, priority: "Urgent" },
];

export default function ExecutionVelocityPage() {
    const [aggressionMode, setAggressionMode] = useState(true);

    return (
        <div className="p-6 h-full flex flex-col gap-6 overflow-hidden">
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-mono uppercase tracking-widest text-primary mb-1">
                        Execution Velocity Engine
                    </h1>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest flex items-center gap-2">
                        <Zap className="w-3 h-3 text-orange-500" /> Iteration Cycles // High-Frequency Execution
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-muted-foreground uppercase font-mono">Founders Speed Index</span>
                        <span className="text-xl font-mono text-primary font-bold">92.4 <span className="text-xs text-muted-foreground">/ 100</span></span>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        className={cn(
                            "font-mono text-[10px] tracking-widest uppercase transition-all duration-300",
                            aggressionMode ? "border-orange-500 text-orange-500 bg-orange-500/10" : "border-border text-muted-foreground"
                        )}
                        onClick={() => setAggressionMode(!aggressionMode)}
                    >
                        {aggressionMode ? "Aggression Mode: Active" : "Aggression Mode: Standby"}
                    </Button>
                </div>
            </div>

            <div className="flex-1 overflow-hidden grid grid-cols-3 gap-6">
                {/* Left Column: Velocity Stats & Input */}
                <div className="space-y-6 flex flex-col min-h-0">
                    <Card className="bg-card/30 border-border">
                        <CardHeader className="p-4 border-b border-border bg-muted/20">
                            <CardTitle className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                <Activity className="w-4 h-4" /> Weekly Performance Delta
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="p-3 bg-background border border-border rounded-sm">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Zap className="w-3 h-3 text-orange-500" />
                                        <span className="text-[10px] uppercase text-muted-foreground font-mono">Experiments</span>
                                    </div>
                                    <div className="text-lg font-mono font-bold">14</div>
                                    <div className="text-[9px] text-primary">+25% vs last week</div>
                                </div>
                                <div className="p-3 bg-background border border-border rounded-sm">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Users className="w-3 h-3 text-blue-500" />
                                        <span className="text-[10px] uppercase text-muted-foreground font-mono">Cust. Calls</span>
                                    </div>
                                    <div className="text-lg font-mono font-bold">35</div>
                                    <div className="text-[9px] text-primary">+40% vs last week</div>
                                </div>
                                <div className="p-3 bg-background border border-border rounded-sm">
                                    <div className="flex items-center gap-2 mb-1">
                                        <RotateCcw className="w-3 h-3 text-green-500" />
                                        <span className="text-[10px] uppercase text-muted-foreground font-mono">Loops Closed</span>
                                    </div>
                                    <div className="text-lg font-mono font-bold">10</div>
                                    <div className="text-[9px] text-primary">+100% vs last week</div>
                                </div>
                                <div className="p-3 bg-background border border-border rounded-sm">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Layers className="w-3 h-3 text-purple-500" />
                                        <span className="text-[10px] uppercase text-muted-foreground font-mono">Leverage Units</span>
                                    </div>
                                    <div className="text-lg font-mono font-bold">1.2K</div>
                                    <div className="text-[9px] text-muted-foreground">Standardized Assets</div>
                                </div>
                            </div>
                            <Button className="w-full bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary uppercase tracking-widest font-mono text-xs h-9">
                                Log Execution Unit
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="flex-1 bg-card/30 border-border min-h-0">
                        <CardHeader className="p-4 border-b border-border bg-muted/20">
                            <CardTitle className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                <History className="w-4 h-4" /> Velocity History
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 h-[calc(100%-60px)]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={velocityHistory}>
                                    <XAxis
                                        dataKey="week"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 10, fill: "var(--muted-foreground)", fontFamily: "monospace" }}
                                    />
                                    <YAxis hide />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(var(--primary-rgb), 0.1)' }}
                                        contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', fontSize: '12px', fontFamily: 'monospace' }}
                                    />
                                    <Bar dataKey="velocity" radius={[2, 2, 0, 0]}>
                                        {velocityHistory.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={index === velocityHistory.length - 1 ? "var(--primary)" : "var(--muted)"} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

                {/* Center Column: Open Learning Loops */}
                <div className="space-y-6 flex flex-col min-h-0">
                    <Card className="flex-1 flex flex-col bg-card/10 border-border border-dashed overflow-hidden">
                        <CardHeader className="p-4 border-b border-border bg-muted/10">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                    <RotateCcw className="w-4 h-4" /> Open Learning Loops
                                </CardTitle>
                                <Badge variant="outline" className="text-[9px] border-primary text-primary">Active: 3</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 flex-1 overflow-y-auto space-y-3 scrollbar-hide">
                            {openLoops.map((loop) => (
                                <div key={loop.id} className="p-4 border border-border bg-background/50 rounded-sm hover:border-primary/50 transition-colors group cursor-pointer">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-mono font-bold group-hover:text-primary transition-colors">{loop.topic}</span>
                                        <Badge className={cn(
                                            "text-[8px] uppercase tracking-tighter",
                                            loop.priority === "Urgent" ? "bg-red-500/20 text-red-500 border-red-500/50" :
                                                loop.priority === "High" ? "bg-orange-500/20 text-orange-500 border-orange-500/50" :
                                                    "bg-blue-500/20 text-blue-500 border-blue-500/50"
                                        )} variant="outline">
                                            {loop.priority}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center justify-between text-[10px] text-muted-foreground font-mono mb-2">
                                        <span>Started: {loop.started}</span>
                                        <span>{loop.tasks}/{loop.total} Closed</span>
                                    </div>
                                    <Progress value={(loop.tasks / loop.total) * 100} className="h-1 bg-muted" />
                                </div>
                            ))}
                            <div className="pt-2">
                                <Button className="w-full border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary transition-all font-mono text-[10px] uppercase h-8" variant="outline">
                                    + Initiate New Loop
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-orange-500/5 border border-orange-500/20">
                        <CardHeader className="p-3 border-b border-orange-500/10">
                            <CardTitle className="text-[10px] uppercase tracking-widest font-mono text-orange-500 flex items-center gap-2">
                                <AlertTriangle className="w-3 h-3" /> Stagnation Warning
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-3">
                            <p className="text-[11px] text-orange-500/80 leading-relaxed font-mono">
                                [!] Velocity in "Revenue Experiments" dropped 15% yesterday.
                                <br />
                                [!] You are stuck in the "Optimization" phase of Loop #2.
                                <br />
                                SYSTEM SUGGESTION: EXECUTE IRREVERSIBLE ACTION.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: AI Feedback & Aggression Status */}
                <div className="space-y-6 flex flex-col min-h-0">
                    <Card className="bg-card/50 border-border">
                        <CardHeader className="p-4 border-b border-border bg-primary/5">
                            <CardTitle className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                                <Brain className="w-4 h-4" /> AI Velocity Critique
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 space-y-4">
                            <div className="relative pl-4 border-l-2 border-primary/30 py-1">
                                <p className="text-xs text-muted-foreground leading-relaxed italic">
                                    "Your conversion to 'Learnings' is currently decoupled from your MRR roadmap. You are collecting data that has no path to revenue."
                                </p>
                                <div className="text-[9px] uppercase tracking-widest text-primary mt-2 flex items-center gap-1 font-mono font-bold">
                                    <Zap className="w-2 h-2" /> BRUTAL VC MODE: ACTIVATED
                                </div>
                            </div>

                            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[10px] uppercase font-mono text-red-500 font-bold">Hard Truth #04</span>
                                </div>
                                <p className="text-[11px] text-red-500/80 font-mono leading-tight">
                                    You spent 4 hours today on "deep work" that was actually just polishing a Notion page. You are avoiding high-rejection activities.
                                </p>
                            </div>

                            <Button className="w-full bg-primary text-primary-foreground font-mono uppercase tracking-widest text-[10px] h-9">
                                Request Strategy Override
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="flex-1 bg-background border-border border-dashed overflow-hidden flex flex-col">
                        <CardHeader className="p-4 border-b border-border bg-muted/20">
                            <CardTitle className="text-xs uppercase tracking-widest font-mono text-muted-foreground flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Today's Kill List
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 flex-1 space-y-3">
                            {[
                                { task: "Kill Feature X - distraction", status: "Done" },
                                { task: "Fire Marketing Agency - low ROI", status: "Pending" },
                                { task: "Cancel 'Coffee Chats' this week", status: "Done" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <div className={cn(
                                            "w-4 h-4 border rounded-full flex items-center justify-center transition-colors",
                                            item.status === "Done" ? "bg-primary border-primary text-primary-foreground" : "border-border group-hover:border-primary"
                                        )}>
                                            {item.status === "Done" && <ChevronRight className="w-3 h-3" />}
                                        </div>
                                        <span className={cn(
                                            "text-[11px] font-mono",
                                            item.status === "Done" ? "text-muted-foreground line-through" : "text-foreground"
                                        )}>{item.task}</span>
                                    </div>
                                    <span className={cn(
                                        "text-[9px] uppercase tracking-widest font-mono",
                                        item.status === "Done" ? "text-primary" : "text-muted-foreground"
                                    )}>{item.status}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
