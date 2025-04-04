"use client";

import { useLocale } from "next-intl";
import Link from "next/link";

import { Globe } from "lucide-react";
import type React from "react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
	const locale = useLocale();
	const pathname = usePathname();

	if (routing.locales.length < 2) return null;

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="ml-2">
					<Globe className="size-5" />
					<span className="sr-only">Switch language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{routing.locales.map((l) => (
					<DropdownMenuItem key={l} asChild>
						<Link
							href={`/${l}${pathname.substring(3)}`}
							className={cn(l === locale && "font-bold")}
						>
							{l.toUpperCase()}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
