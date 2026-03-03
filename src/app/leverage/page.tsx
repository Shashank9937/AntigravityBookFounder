"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Trello } from "lucide-react";

export default function LeverageCreationPage() {
    return (
        <div className="p-6 h-full flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-mono uppercase tracking-widest text-primary mb-1">
                        Leverage Creation Engine
                    </h1>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest">
                        Brand | Distribution | IP | Data | AI Automations
                    </p>
                </div>
            </div>
            <Card className="bg-card/50 border-border flex-1 border-dashed">
                <CardHeader className="flex flex-row space-x-4 items-center border-b border-border/50 pb-4">
                    <Trello className="w-8 h-8 text-primary" />
                    <div className="flex flex-col">
                        <CardTitle className="text-sm font-mono tracking-widest text-foreground uppercase">
                            Leverage Assets
                        </CardTitle>
                        <span className="text-xs text-muted-foreground">Compounding Graph & Bottleneck ID</span>
                    </div>
                </CardHeader>
                <CardContent className="h-full flex items-center justify-center">
                    <p className="text-muted-foreground font-mono text-sm opacity-50 uppercase tracking-widest text-center">
                        Tracking Active<br />
                        List your owned assets to calculate defensibility.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
