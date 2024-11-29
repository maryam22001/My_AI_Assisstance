"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DASHBOARD_TOOLS } from "@/lib/constants/dashboard";
import { Rocket, Stars, Settings } from "lucide-react";

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#0f1116] border-r border-[#1f2937]">
            <div className="px-3 py-2">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <Stars className="h-6 w-6 text-purple-500" />
                    <h1 className="text-xl font-bold ml-2 text-white">ASTRA AI</h1>
                </Link>
                <div className="space-y-1">
                    {DASHBOARD_TOOLS.map((tool) => (
                        <Link key={tool.href} href={tool.href}>
                            <Button
                                variant="ghost"
                                className={cn(
                                    "w-full justify-start hover:bg-[#1a1b23] hover:text-purple-400 transition-colors",
                                    pathname === tool.href ? "bg-[#1a1b23] text-purple-400" : "text-zinc-400"
                                )}
                            >
                                <tool.icon className="mr-2 h-5 w-5" />
                                {tool.label}
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="mt-auto px-3">
                <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-[#1a1b23] hover:text-purple-400 text-zinc-400"
                >
                    <Settings className="mr-2 h-5 w-5" />
                    Settings
                </Button>
            </div>
        </div>
    );
}