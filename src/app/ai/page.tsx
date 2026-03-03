"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    BrainCircuit,
    Send,
    Zap,
    ShieldAlert,
    MessageSquareWarning,
    Target,
    RefreshCcw
} from "lucide-react";
import { cn } from "@/lib/utils";

const AI_MODES = [
    { id: "brutal_vc", label: "Brutal VC Mode", description: "Tears down your assumptions looking for critical execution flaws." },
    { id: "contrarian", label: "Contrarian Billionaire", description: "Forces you to think opposite of the consensus market view." },
    { id: "aggressive", label: "Aggressive Scale", description: "Optimizes solely for speed and capital deployment to capture monopolies." },
    { id: "conservative", label: "Conservative Risk", description: "Focuses on runway extension, unit economics, and default-alive status." }
];

export default function AICoPilotPage() {
    const [activeMode, setActiveMode] = useState("brutal_vc");
    const [inputQuery, setInputQuery] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [response, setResponse] = useState<any>(null);

    const handleConsult = () => {
        if (!inputQuery.trim()) return;

        setIsProcessing(true);

        // Simulate RAG network / LLM response
        setTimeout(() => {
            setResponse({
                risk_analysis: [
                    "Your TAM estimation is top-down and functionally useless.",
                    "You are assuming 0% churn in year 1, which contradicts benchmark SaaS metrics.",
                    "Sales cycle is estimated at 30 days for an enterprise product. Historically, this takes 6-9 months."
                ],
                blind_spots: [
                    "Competitor X recently raised $50M and is giving away a comparable product for free to acquire users.",
                    "You have no technical co-founder, making your iteration cycle highly dependent on contractor velocity."
                ],
                strategic_recommendations: [
                    "Narrow your ICP to a sub-segment that is currently bleeding cash without your solution.",
                    "Double your pricing immediately to test price elasticity.",
                    "Shift from direct sales to a channel partnership model to offset your lack of an outbound engine."
                ],
                moat_improvement_suggestions: [
                    "Bake network effects into your core loop: if user X invites user Y, the product becomes 10x more valuable for both."
                ]
            });
            setIsProcessing(false);
        }, 1500);
    }

    return (
        <div className="p-6 h-full flex flex-col gap-6 overflow-hidden">
            <div className="flex-shrink-0 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-mono uppercase tracking-widest text-primary mb-1">
                        AI Strategic Co-Pilot
                    </h1>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest flex items-center gap-2">
                        <BrainCircuit className="w-3 h-3 text-chart-4" /> Neural Network Engaged // System Prompting Active
                    </p>
                </div>
            </div>

            <div className="flex-shrink-0 grid grid-cols-4 gap-4">
                {AI_MODES.map((mode) => (
                    <Card
                        key={mode.id}
                        className={cn(
                            "cursor-pointer transition-all border-l-2",
                            activeMode === mode.id
                                ? "bg-primary/5 border-primary"
                                : "bg-card/50 border-transparent hover:border-border"
                        )}
                        onClick={() => setActiveMode(mode.id)}
                    >
                        <CardContent className="p-4 flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <span className={cn(
                                    "font-mono text-xs uppercase tracking-widest",
                                    activeMode === mode.id ? "text-primary font-bold" : "text-foreground"
                                )}>
                                    {mode.label}
                                </span>
                                {activeMode === mode.id && <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />}
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-relaxed h-8">
                                {mode.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex-1 flex gap-6 overflow-hidden">

                {/* Input Area */}
                <Card className="w-1/3 bg-background border-border flex flex-col">
                    <CardHeader className="p-4 border-b border-border bg-muted/20">
                        <div className="text-xs uppercase tracking-widest font-mono text-muted-foreground flex items-center gap-2">
                            <MessageSquareWarning className="w-4 h-4 text-primary" />
                            Strategic Context Input
                        </div>
                    </CardHeader>
                    <CardContent className="p-4 flex-1 flex flex-col gap-4">
                        <p className="text-xs text-muted-foreground">
                            Paste your executive summary, current bottleneck, or pricing model for brutal deconstruction against 44+ frameworks.
                        </p>
                        <Textarea
                            className="flex-1 font-mono text-sm bg-card/50 border-primary/20 focus-visible:ring-primary/50 resize-none p-4"
                            placeholder="E.g. We are building a CRM for local gyms. We charge $50/mo. We have 10 beta users. Our CAC is currently $200. Growth has stalled."
                            value={inputQuery}
                            onChange={(e) => setInputQuery(e.target.value)}
                        />
                        <Button
                            className="w-full font-mono uppercase tracking-widest"
                            onClick={handleConsult}
                            disabled={isProcessing || !inputQuery.trim()}
                        >
                            {isProcessing ? (
                                <>
                                    <RefreshCcw className="w-4 h-4 mr-2 animate-spin" /> Analyzing Frameworks...
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4 mr-2" /> Execute Consultation
                                </>
                            )}
                        </Button>
                    </CardContent>
                </Card>

                {/* Output Area */}
                <Card className="flex-1 bg-card/50 border-border overflow-y-auto scrollbar-hide">
                    <CardHeader className="p-4 border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-10 flex flex-row items-center justify-between">
                        <div className="text-xs uppercase tracking-widest font-mono text-primary flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            System Output // {AI_MODES.find(m => m.id === activeMode)?.label}
                        </div>
                        {response && <Badge variant="destructive" className="text-[10px] tracking-widest">HARD TRUTH ALERT</Badge>}
                    </CardHeader>

                    <CardContent className="p-6">
                        {!response && !isProcessing && (
                            <div className="h-full flex flex-col items-center justify-center text-center opacity-50 p-12">
                                <BrainCircuit className="w-12 h-12 text-muted-foreground mb-4" />
                                <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">Awaiting Strategic Input</p>
                                <p className="text-xs text-muted-foreground mt-2 max-w-sm">
                                    The system requires raw data to identify cognitive biases and execution flaws.
                                </p>
                            </div>
                        )}

                        {isProcessing && (
                            <div className="space-y-4 animate-pulse p-4">
                                <div className="h-4 bg-muted/50 rounded w-3/4"></div>
                                <div className="h-4 bg-muted/50 rounded w-1/2"></div>
                                <div className="h-4 bg-muted/50 rounded w-5/6"></div>
                            </div>
                        )}

                        {response && !isProcessing && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

                                {/* Risk Analysis */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-destructive border-b border-destructive/20 pb-2">
                                        <ShieldAlert className="w-4 h-4" />
                                        <h3 className="font-mono text-sm uppercase tracking-widest font-bold">Fatal Assumptions (Risk Analysis)</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {response.risk_analysis.map((item: string, i: number) => (
                                            <li key={i} className="flex gap-3 text-sm text-muted-foreground bg-destructive/5 p-3 rounded-sm border-l-2 border-destructive">
                                                <span className="font-mono text-destructive shrink-0">[{i + 1}]</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Blind Spots */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-chart-3 border-b border-chart-3/20 pb-2">
                                        <Zap className="w-4 h-4" />
                                        <h3 className="font-mono text-sm uppercase tracking-widest font-bold">Execution Blind Spots</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {response.blind_spots.map((item: string, i: number) => (
                                            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                                <span className="font-mono text-chart-3 shrink-0">--</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Strategic Recommendations */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-primary border-b border-primary/20 pb-2">
                                        <Target className="w-4 h-4" />
                                        <h3 className="font-mono text-sm uppercase tracking-widest font-bold">Tactical Repositioning</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {response.strategic_recommendations.map((item: string, i: number) => (
                                            <li key={i} className="flex gap-3 text-sm text-foreground bg-primary/5 p-3 rounded-sm">
                                                <span className="text-primary font-bold">→</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Moat Improvement */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-chart-2 border-b border-chart-2/20 pb-2">
                                        <BrainCircuit className="w-4 h-4" />
                                        <h3 className="font-mono text-sm uppercase tracking-widest font-bold">Moat Strengthening Pipeline</h3>
                                    </div>
                                    <p className="text-sm font-mono text-chart-2 bg-chart-2/5 p-4 rounded-sm border border-chart-2/20">
                                        &gt; {response.moat_improvement_suggestions[0]}
                                    </p>
                                </div>

                            </div>
                        )}
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
