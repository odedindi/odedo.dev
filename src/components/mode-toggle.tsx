"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ModeToggleProps {
	buttonProps?: {
		className?: string;
		variant?: ButtonProps["variant"];
	};
}
export function ModeToggle({ buttonProps }: ModeToggleProps) {
	const { setTheme } = useTheme();
	const t = useTranslations("header");

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button
					variant={buttonProps?.variant ?? "ghost"}
					size="icon"
					className={buttonProps?.className}
				>
					<Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">{t("theme")}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{["light", "dark", "system"].map((theme) => (
					<DropdownMenuItem
						key={theme}
						onClick={() => setTheme(theme)}
						className="capitalize dark:hover:bg-gray-700"
					>
						{theme}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
