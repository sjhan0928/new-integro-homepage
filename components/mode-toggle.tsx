"use client";

import * as React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "hover:bg-accent/80 relative overflow-hidden transition-all duration-300 hover:scale-105",
            className
          )}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all duration-500 ease-in-out dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all duration-500 ease-in-out dark:scale-100 dark:rotate-0" />
          <span className="sr-only">테마 전환</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-border/40 w-48 shadow-lg"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={cn(
            "flex cursor-pointer items-center gap-2",
            theme === "light" && "bg-accent text-accent-foreground",
          )}
        >
          <Sun className="h-4 w-4" />
          <span>라이트 모드</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={cn(
            "flex cursor-pointer items-center gap-2",
            theme === "dark" && "bg-accent text-accent-foreground",
          )}
        >
          <Moon className="h-4 w-4" />
          <span>다크 모드</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={cn(
            "flex cursor-pointer items-center gap-2",
            theme === "system" && "bg-accent text-accent-foreground",
          )}
        >
          <Monitor className="h-4 w-4" />
          <span>시스템 설정</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
