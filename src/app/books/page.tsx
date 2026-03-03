"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, Zap, ShieldAlert, Cpu, Crosshair } from "lucide-react";
import { cn } from "@/lib/utils";

const MOCK_MODELS = [
    {
        id: 1,
        bookTitle: "Zero to One",
        author: "Peter Thiel",
        coreThesis: "Competition is for losers. Build a monopoly by solving a unique problem.",
        problemMatch: "Escaping a crowded market / Low margins / Differentiation",
        stage: "MVP",
        relevanceScore: 9.8,
        impactMultiplier: "10x",
        mentalModel: "The Monopoly Lens",
        warnings: "You will fight for scraps and die of exhaustion in a price war.",
        useCase: "Palantir started with just intelligence agencies (a tiny monopoly) before expanding.",
        sprint: "Identify a niche market you can dominate within 6 months. Kill features appealing to the 'average' user."
    },
    {
        id: 2,
        bookTitle: "The Hard Thing About Hard Things",
        author: "Ben Horowitz",
        coreThesis: "There is no formula for extreme volatility, only endurance and raw decision-making.",
        problemMatch: "Company culture breaking / Executive firing / Near bankruptcy",
        stage: "Growth",
        relevanceScore: 9.5,
        impactMultiplier: "5x",
        mentalModel: "Wartime CEO Protocol",
        warnings: "The company dies because you tried to build consensus when you needed immediate, brutal action.",
        useCase: "Loudcloud's multiple massive layoffs and pivots to survive the dot-com crash.",
        sprint: "Audit yesterday's decisions. Switch to wartime immediately if runway < 9 months."
    },
    {
        id: 3,
        bookTitle: "High Growth Handbook",
        author: "Elad Gil",
        coreThesis: "Scaling requires rewriting your executive structure and capital allocation.",
        problemMatch: "Communication breaking down / Hiring executives / Board management",
        stage: "Scale",
        relevanceScore: 8.9,
        impactMultiplier: "7x",
        mentalModel: "The Re-Org Deflection",
        warnings: "Your early technical founders will become a bottleneck to scale. You will lose 18 months of velocity.",
        useCase: "Stripe's aggressive hiring of seasoned managers from massive tech orgs to lead raw talent.",
        sprint: "Identify the next executive layer needed. Do not hire if they haven't done it at your NEXT stage."
    },
    {
        id: 4,
        bookTitle: "Obviously Awesome",
        author: "April Dunford",
        coreThesis: "Positioning is the act of deliberately defining how you are the best at something that a defined market cares a lot about.",
        problemMatch: "Poor sales conversion / Feature comparisons / Pricing pressure",
        stage: "Idea",
        relevanceScore: 9.1,
        impactMultiplier: "6x",
        mentalModel: "Contextual Reframing",
        warnings: "Customers will compare you to the wrong things and demand the wrong features.",
        useCase: "Repositioning a 'database' as a 'data warehouse' changed the price point from $100 to $10,000.",
        sprint: "List your top 3 unique attributes. Ask: Who cares about this the most? Rewrite your landing page H1 today."
    },
];

const STAGES = ["All", "Idea", "MVP", "Growth", "Scale", "Fundraising"];

export default function BookIntelligencePage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeStage, setActiveStage] = useState("All");

    const filteredModels = MOCK_MODELS.filter((model) => {
        const matchesSearch =
            model.problemMatch.toLowerCase().includes(searchQuery.toLowerCase()) ||
            model.mentalModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
            model.bookTitle.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStage = activeStage === "All" || model.stage === activeStage;

        return matchesSearch && matchesStage;
    });

    return (
        <div className="p-6 h-full flex flex-col gap-6 overflow-hidden">
            <div className="flex-shrink-0 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-mono uppercase tracking-widest text-primary mb-1">
                        Book Intelligence Engine
                    </h1>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest flex items-center gap-2">
                        <BookOpen className="w-3 h-3 text-chart-2" /> Cross-book pattern detection // 44 sources active
                    </p>
                </div>
            </div>

            <Card className="bg-card/50 border-border flex-shrink-0">
                <CardContent className="p-4 flex flex-col gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            className="pl-9 font-mono bg-background border-primary/20 focus-visible:ring-primary/50 uppercase placeholder:normal-case placeholder:tracking-normal"
                            placeholder="Search by problem (e.g. 'Low Margins', 'Hiring', 'Growth Stalling')..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2">
                        {STAGES.map(stage => (
                            <Badge
                                key={stage}
                                variant="outline"
                                className={cn(
                                    "cursor-pointer uppercase tracking-wider text-[10px] transition-colors",
                                    activeStage === stage
                                        ? "border-primary text-primary bg-primary/10"
                                        : "border-border text-muted-foreground hover:border-primary/50"
                                )}
                                onClick={() => setActiveStage(stage)}
                            >
                                {stage}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
                {filteredModels.map((model) => (
                    <Card key={model.id} className="bg-background border-border overflow-hidden">
                        <div className="flex h-full">
                            {/* Left Side / Core Info */}
                            <div className="p-5 flex-1 border-r border-border flex flex-col justify-between">
                                <div>
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h2 className="text-lg font-bold text-foreground font-mono flex items-center gap-2">
                                                {model.mentalModel}
                                            </h2>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                Source: <span className="text-primary">{model.bookTitle}</span> by {model.author}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-center">
                                                <div className="text-[10px] uppercase text-muted-foreground mb-1">Relevance</div>
                                                <div className="font-mono text-primary font-bold">{model.relevanceScore}</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-[10px] uppercase text-muted-foreground mb-1">Impact</div>
                                                <div className="font-mono text-chart-5 font-bold">{model.impactMultiplier}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-sm italic border-l-2 border-primary/50 pl-3 mb-4 text-muted-foreground mb-6">
                                        "{model.coreThesis}"
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-[10px] uppercase tracking-widest text-primary mb-1 flex items-center gap-1">
                                                <Crosshair className="w-3 h-3" /> Problem Match
                                            </div>
                                            <p className="text-xs">{model.problemMatch}</p>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-widest text-destructive mb-1 flex items-center gap-1">
                                                <ShieldAlert className="w-3 h-3" /> "If You Ignore This" Consequence
                                            </div>
                                            <p className="text-xs text-destructive-foreground/90">{model.warnings}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-6">
                                    <Badge variant="outline" className="border-border text-[10px] bg-muted/50">{model.stage} Stage</Badge>
                                    <Button size="sm" className="ml-auto h-7 text-xs font-mono tracking-widest bg-primary text-primary-foreground hover:bg-primary/80">
                                        <Zap className="w-3 h-3 mr-2" />
                                        APPLY TO STARTUP
                                    </Button>
                                </div>
                            </div>

                            {/* Right Side / Tactical */}
                            <div className="p-5 w-80 bg-muted/20 flex flex-col">
                                <div className="mb-6">
                                    <div className="text-[10px] uppercase tracking-widest text-primary mb-2 flex items-center gap-1">
                                        <BookOpen className="w-3 h-3" /> Real Startup Case
                                    </div>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        {model.useCase}
                                    </p>
                                </div>

                                <div className="relative p-4 border border-chart-2/30 bg-chart-2/5 rounded-sm mt-auto">
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-chart-2/20 blur-xl rounded-full" />
                                    <div className="text-[10px] uppercase tracking-widest text-chart-2 mb-2 flex items-center gap-1">
                                        <Cpu className="w-3 h-3" /> 7-Day Execution Sprint
                                    </div>
                                    <p className="text-xs text-foreground font-mono leading-relaxed">
                                        {model.sprint}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}

                {filteredModels.length === 0 && (
                    <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-border rounded-lg bg-card/10">
                        <Search className="w-8 h-8 text-muted-foreground mb-4 opacity-50" />
                        <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">No mental models found</p>
                        <p className="text-xs text-muted-foreground/50 mt-2 max-w-sm">Try broader problem searches like "execution", "cash flow", or "culture".</p>
                    </div>
                )}
            </div>
        </div>
    );
}
