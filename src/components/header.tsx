"use client";

import type React from "react";

import { LanguageSwitcher } from "./language-switcher";
import { DesktopMenu, MobileMenu } from "./nav-bar";

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="w-full flex h-16 items-center justify-between px-4">
				<MobileMenu />
				<DesktopMenu />
				<div className="flex items-center gap-2">
					<LanguageSwitcher />
				</div>
			</div>
		</header>
	);
}
