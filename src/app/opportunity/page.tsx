"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

export default function OpportunityIntelligencePage() {
    return (
        <div className="p-6 h-full flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-mono uppercase tracking-widest text-primary mb-1">
                        Opportunity Intelligence System
                    </h1>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest">
                        TAM | Pain | Density | CAC/LTV Model
                    </p>
                </div>
            </div>
            <Card className="bg-card/50 border-border flex-1 border-dashed">
                <CardHeader className="flex flex-row space-x-4 items-center border-b border-border/50 pb-4">
                    <Target className="w-8 h-8 text-primary" />
                    <div className="flex flex-col">
                        <CardTitle className="text-sm font-mono tracking-widest text-foreground uppercase">
                            Scenario Modeler
                        </CardTitle>
                        <span className="text-xs text-muted-foreground">"If CAC increases 40%..."</span>
                    </div>
                </CardHeader>
                <CardContent className="h-full flex items-center justify-center">
                    <p className="text-muted-foreground font-mono text-sm opacity-50 uppercase tracking-widest text-center">
                        Simulators loaded.<br />
                        Input unit economics to calculate Moat Strength.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
