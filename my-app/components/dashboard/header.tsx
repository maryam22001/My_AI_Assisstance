"use client";

import { Rocket } from "lucide-react";

export function DashboardHeader() {
    return (
        <div className="mb-8 space-y-4">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white">
                        <span className="inline-block">
                            <Rocket className="h-8 w-8 inline-block mr-2 text-purple-500" />
                        </span>
                        Welcome to Astra
                    </h2>
                    <p className="text-zinc-400">
                        Explore the infinite possibilities of AI
                    </p>
                </div>
            </div>
        </div>
    );
}