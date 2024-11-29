"use client";

import { Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DASHBOARD_TOOLS } from "@/lib/constants/dashboard";

export function DashboardTools() {
    return (
        <div className="px-4 md:px-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {DASHBOARD_TOOLS.map((tool) => (
                    <Card
                        key={tool.href}
                        className="bg-[#1a1b23]/50 border-[#2a2b33] backdrop-blur-sm hover:bg-[#1a1b23] transition cursor-pointer group"
                    >
                        <CardHeader>
                            <div className={`p-2 w-fit rounded-md ${tool.bgColor}`}>
                                <tool.icon className={`w-6 h-6 ${tool.color}`} />
                            </div>
                            <CardTitle className="text-lg font-semibold text-white group-hover:text-purple-400 transition">
                                {tool.label}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-x-2">
                                <div className="flex items-center gap-x-2 text-sm text-zinc-400">
                                    <Sparkles className="h-4 w-4" />
                                    Explore
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}