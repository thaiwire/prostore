'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu
    , DropdownMenuTrigger
    , DropdownMenuContent
    , DropdownMenuLabel
    , DropdownMenuItem
    , DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";


const ModeToggle = () => {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost">
                {theme === "system" ? (
                    <SunMoon />
                ) : theme === "light" ? (
                    <SunIcon />
                ) : (
                    <MoonIcon />
                )
                } 
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
                System
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}
export default ModeToggle;