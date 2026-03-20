"use client";
import { memo, useEffect, useState } from "react";

import { typewriterPhrases } from "@/lib/site-config";

export const TypewriterText = memo(function TypewriterText() {
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const [displayedText, setDisplayedText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentPhrase = typewriterPhrases[currentPhraseIndex];
		let pauseTimeoutId: NodeJS.Timeout | null = null;
		const delayMs = isDeleting ? 30 : 80;
		const timeout = setTimeout(() => {
			if (!isDeleting) {
				if (displayedText.length < currentPhrase.length) {
					setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
				} else {
					pauseTimeoutId = setTimeout(() => setIsDeleting(true), 2000);
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
		}, delayMs);

		return () => {
			clearTimeout(timeout);
			if (pauseTimeoutId) clearTimeout(pauseTimeoutId);
		};
	}, [displayedText, isDeleting, currentPhraseIndex]);

	return (
		<div className="font-(family-name:--font-pixel) text-[11px] text-accent">
			<span>{displayedText}</span>
			<span className="inline-block w-2 h-4 bg-accent ml-1 animate-blink" />
		</div>
	);
});
