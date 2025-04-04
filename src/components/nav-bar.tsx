"use client";

import { useTranslations } from "next-intl";

import { Menu } from "lucide-react";
import React from "react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "@/i18n/navigation";

import { ModeToggle } from "./mode-toggle";

const navItems = ["home", "skills", "projects", "resume", "contact"] as const;

export function DesktopMenu() {
	const t = useTranslations("header");

	return (
		<div className="hidden sm:flex items-center gap-6">
			<nav className="flex gap-6">
				{navItems.map((item) => (
					<Link
						key={item}
						className="text-sm font-medium transition-colors hover:text-primary"
						href={`#${item}`}
					>
						{t(item)}
					</Link>
				))}
			</nav>
			<ModeToggle />
		</div>
	);
}

export function MobileMenu() {
	const t = useTranslations("header");

	return (
		<NavigationMenu className="sm:hidden block">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						Icon={Menu}
						iconSize={6}
					></NavigationMenuTrigger>

					<NavigationMenuContent>
						<ul className="w-full gap-3 p-4">
							{navItems.map((item) => (
								<li key={item}>
									<NavigationMenuLink asChild>
										<Link
											className={
												"block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent dark:hover:bg-gray-700 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-lg font-medium leading-none"
											}
											href={`#${item}`}
										>
											{t(item)}
										</Link>
									</NavigationMenuLink>
								</li>
							))}
							<li>
								<NavigationMenuLink asChild>
									<ModeToggle
										buttonProps={{ className: "w-full dark:hover:bg-gray-700" }}
									/>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
