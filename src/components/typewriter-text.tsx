"use client";

import { motion, useWillChange } from "framer-motion";

import { useEffect, useState } from "react";

import { typewriterPhrases } from "@/lib/site-config";

export function TypewriterText() {
	const willChange = useWillChange();
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const [displayedText, setDisplayedText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentPhrase = typewriterPhrases[currentPhraseIndex];

		const timeout = setTimeout(
			() => {
				if (!isDeleting) {
					if (displayedText.length < currentPhrase.length) {
						setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
					} else {
						setTimeout(() => setIsDeleting(true), 2000);
					}
				} else {
					if (displayedText.length > 0) {
						setDisplayedText(displayedText.slice(0, -1));
					} else {
						setIsDeleting(false);
						setCurrentPhraseIndex(
							(prev) => (prev + 1) % typewriterPhrases.length,
						);
					}
				}
			},
			isDeleting ? 30 : 80,
		);

		return () => clearTimeout(timeout);
	}, [displayedText, isDeleting, currentPhraseIndex]);

	return (
		<div className="font-[family-name:var(--font-pixel)] text-[11px] text-accent">
			<span>{displayedText}</span>
			<motion.span
				style={{ willChange }}
				animate={{ opacity: [1, 0] }}
				transition={{ duration: 0.5, repeat: Infinity }}
				className="inline-block w-2 h-4 bg-accent ml-1"
			/>
		</div>
	);
}
