"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardTools } from "@/components/dashboard/tools";

export default function DashboardPage() {
    return (
        <div className="h-full relative">
            <DashboardHeader />
            <DashboardTools />
        </div>
    );
}