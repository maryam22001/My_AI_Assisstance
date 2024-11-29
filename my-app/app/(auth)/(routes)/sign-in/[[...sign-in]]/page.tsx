import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <SignIn
            appearance={{
                elements: {
                    formButtonPrimary:
                        "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-sm normal-case",
                    card: "bg-transparent shadow-none",
                    headerTitle: "text-blue-100",
                    headerSubtitle: "text-blue-200",
                    socialButtonsBlockButton:
                        "bg-white/10 border border-white/20 hover:bg-white/20 text-white",
                    formFieldLabel: "text-blue-100",
                    formFieldInput:
                        "bg-white/10 border border-white/20 text-white placeholder:text-white/50",
                    footerActionLink: "text-blue-400 hover:text-blue-300",
                    dividerLine: "bg-white/20",
                    dividerText: "text-white/60",
                },
            }}
        />
    );
}