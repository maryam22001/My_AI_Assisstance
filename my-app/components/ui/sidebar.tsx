import * as React from "react"
import { cn } from "@/lib/utils"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> { }
interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> { }
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> { }
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> { }
interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean
    asChild?: boolean
}

export function Sidebar({ className, ...props }: SidebarProps) {
    return (
        <div className={cn("w-64 flex flex-col h-screen", className)} {...props} />
    )
}

export function SidebarContent({ className, ...props }: SidebarContentProps) {
    return (
        <div className={cn("flex-1 overflow-auto", className)} {...props} />
    )
}

export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
    return (
        <div className={cn("flex items-center", className)} {...props} />
    )
}

export function SidebarMenu({ className, ...props }: SidebarMenuProps) {
    return (
        <ul className={cn("space-y-1", className)} {...props} />
    )
}

export function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps) {
    return (
        <li className={cn("", className)} {...props} />
    )
}

export function SidebarMenuButton({
    className,
    isActive,
    asChild = false,
    ...props
}: SidebarMenuButtonProps) {
    const Comp = asChild ? "span" : "button"
    return (
        <Comp
            className={cn(
                "w-full text-left",
                isActive && "bg-accent text-accent-foreground",
                className
            )}
            {...props}
        />
    )
}

