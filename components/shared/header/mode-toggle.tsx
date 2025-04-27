'use client'
import { useState,useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuContent,
    DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes'
import { SunIcon,MoonIcon,SunMoon } from 'lucide-react';


const ModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true);
    }   ,[]);
    
    if (!mounted) return null;

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className='focus-visible focus:outline-none'>
              {theme === 'system' ? (
                 <SunMoon /> 
                ) : theme === 'dark' ? (                 
                 <MoonIcon /> 
                ) : (
                 <SunIcon /> 
                )}
             
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
            
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setTheme('light')}
            >
                Light
            </Button>
            <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setTheme('dark')}
            >
                Dark
            </Button>
            <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setTheme('system')}
            >
                System
            </Button>   
              </DropdownMenuContent>  
    </DropdownMenu>;
}

export default ModeToggle;