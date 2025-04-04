"use client";

import Image from "next/image";

import { ImageIcon } from "lucide-react";
import { useState } from "react";

interface ImageWithFallbackProps {
	className?: string;
	src: string;
	alt: string;
}

export function ImageWithFallback({
	className,
	src,
	alt,
}: ImageWithFallbackProps) {
	const [hasError, setHasError] = useState(false);

	if (hasError) return <ImageIcon className={className} />;

	return (
		<Image
			src={src}
			alt={alt}
			fill
			className={className}
			onError={() => setHasError(true)}
		/>
	);
}
