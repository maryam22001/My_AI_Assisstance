"use client" ;
import { Sidebar } from "@/components/sidebar/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen flex">
            <div className="w-64 flex-shrink-0">
                <Sidebar />
            </div>
            <main className="flex-1 overflow-y-auto bg-[#0f1116]">
                <div className="container mx-auto py-8 px-4">
                    {children}
                </div>
            </main>
        </div>
    );
}