import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <div className="auth-container">
                        <div className="greek-pattern top-0" />
                        <div className="auth-card">
                            <div className="flex flex-col items-center mb-8">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl font-bold text-white">A</span>
                                </div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                    Astra
                                </h1>
                              
                            </div>
                            {children}
                        </div>
                        <div className="greek-pattern bottom-0" />
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
