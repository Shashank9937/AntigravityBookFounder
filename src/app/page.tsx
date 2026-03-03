"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Activity, AlertTriangle, Crosshair, DollarSign, Target, TrendingUp, Zap } from "lucide-react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const velocityData = [
  { day: "Mon", score: 45 },
  { day: "Tue", score: 52 },
  { day: "Wed", score: 48 },
  { day: "Thu", score: 70 },
  { day: "Fri", score: 85 },
  { day: "Sat", score: 65 },
  { day: "Sun", score: 92 }
];

export default function DashboardPage() {
  return (
    <div className="p-6 h-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-mono uppercase tracking-widest text-primary mb-1">
            System Overview
          </h1>
          <p className="text-muted-foreground text-xs uppercase tracking-widest">
            Compounding Dashboard // Active Session
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="border-primary text-primary bg-primary/10">AGGRESSION MODE ON</Badge>
          <Badge variant="outline" className="border-chart-2 text-chart-2 bg-chart-2/10">SYS: NOMINAL</Badge>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {/* Execution Velocity */}
        <Card className="bg-card/50 border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Execution Velocity</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono text-foreground font-bold">92.4</div>
            <p className="text-xs text-primary mt-1 flex items-center gap-1 uppercase">
              <TrendingUp className="w-3 h-3" /> +14.5% vs last week
            </p>
            <div className="h-16 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={velocityData}>
                  <Line type="stepAfter" dataKey="score" stroke="var(--primary)" strokeWidth={2} dot={false} />
                  <XAxis dataKey="day" hide />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
                    itemStyle={{ color: 'var(--primary)' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Leverage Score */}
        <Card className="bg-card/50 border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Leverage Score</CardTitle>
            <Zap className="h-4 w-4 text-chart-5" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono text-foreground font-bold">78/100</div>
            <p className="text-xs text-chart-5 mt-1">High Automation Output</p>
            <div className="space-y-2 mt-4">
              <div className="flex justify-between text-xs">
                <span>Audience</span>
                <span className="font-mono text-chart-5">42%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1">
                <div className="bg-chart-5 h-1 rounded-full" style={{ width: "42%" }} />
              </div>
              <div className="flex justify-between text-xs">
                <span>Systems</span>
                <span className="font-mono text-chart-5">86%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1">
                <div className="bg-chart-5 h-1 rounded-full" style={{ width: "86%" }} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Capital Efficiency */}
        <Card className="bg-card/50 border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Capital Efficiency</CardTitle>
            <DollarSign className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono text-foreground font-bold">4.2x</div>
            <p className="text-xs text-chart-2 mt-1">OpEx to Revenue Multiple</p>

            <div className="mt-4 space-y-3 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">LTV:CAC</span>
                <span className="text-chart-2">3.8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">RUNWAY</span>
                <span>14 MO</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">BURN</span>
                <span className="text-destructive">$12.4K</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Warnings */}
        <Card className="bg-destructive/10 border-destructive/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-destructive/10 blur-xl rounded-full" />
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm uppercase tracking-wider text-destructive">AI Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-mono text-destructive font-bold mb-2">2 FATAL</div>
            <ul className="space-y-2 text-xs">
              <li className="flex gap-2 text-destructive-foreground/80">
                <span>[!]</span> You are avoiding customer calls. (3 days passed)
              </li>
              <li className="flex gap-2 text-destructive-foreground/80">
                <span>[!]</span> Pricing model reflects founder ego bias.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">

        {/* Top 3 High-Leverage Moves */}
        <Card className="bg-card/50 border-border">
          <CardHeader className="border-b border-border">
            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" /> Tactical War Manual // Next High-Leverage Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {[
                { task: "Kill Feature B – Distraction from Core Value Prop", type: "STRATEGY", impact: "High" },
                { task: "Automate LinkedIn Outreach sequence", type: "LEVERAGE", impact: "Medium" },
                { task: "Double price for next 5 beta signups", type: "REVENUE", impact: "High" }
              ].map((item, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-muted-foreground text-xs">0{i + 1}</span>
                    <span className="text-sm">{item.task}</span>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-[10px] tracking-wider bg-transparent border-muted-foreground">{item.type}</Badge>
                    <Badge variant="outline" className={cn(
                      "text-[10px] tracking-wider border-none",
                      item.impact === "High" ? "bg-primary/20 text-primary" : "bg-chart-5/20 text-chart-5"
                    )}>{item.impact}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mental Model & AI Strategy Co-Pilot Snippet */}
        <Card className="bg-card/50 border-border flex flex-col">
          <CardHeader className="border-b border-border flex flex-row items-center justify-between">
            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Crosshair className="w-4 h-4 text-primary" /> Mental Model of the Day
            </CardTitle>
            <Badge variant="outline" className="text-[10px] tracking-wider text-muted-foreground border-muted-foreground">BRUTAL VC MODE</Badge>
          </CardHeader>
          <CardContent className="p-6 flex-1 flex flex-col justify-center">
            <blockquote className="border-l-2 border-primary pl-4 mb-4">
              <p className="text-lg font-serif italic text-foreground mb-2">
                "If it doesn't compound, it's a distraction."
              </p>
              <footer className="text-xs text-muted-foreground uppercase tracking-widest">— Navigating The Scale Matrix</footer>
            </blockquote>

            <div className="bg-background border border-border p-4 rounded-sm mt-4">
              <div className="text-xs uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                AI Strategy Critique
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                &gt; Analysing current execution velocity...<br />
                &gt; You are underpricing. Your CAC limit is artificial. Increase immediately to validate true willingness-to-pay.<br />
                &gt; ACTION: Override conservative risk mode.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
