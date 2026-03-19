import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { type NextRequest, NextResponse } from "next/server";

import { type MailOptions, sendMail } from "@/lib/emailService";

import { FormData } from "../../[locale]/actions";

export const config = {
	runtime: "nodejs",
};

const ratelimit = new Ratelimit({
	redis: Redis.fromEnv(),
	// 3 submissions per 10 minutes per IP
	limiter: Ratelimit.slidingWindow(3, "10 m"),
	analytics: true,
});

export async function POST(request: NextRequest) {
	try {
		// Rate limiting — keyed by IP
		const ip =
			request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
			"anonymous";
		const { success } = await ratelimit.limit(ip);
		if (!success) {
			return NextResponse.json(
				{ error: "Too many requests. Please try again later." },
				{ status: 429 },
			);
		}

		const data = (await request.json()) as FormData;

		// Honeypot check: if the hidden field has any value, silently accept but do nothing
		if (data.website) return NextResponse.json("Email sent");

		// Sanitize replyTo to prevent email header injection
		const safeEmail = data.email.replace(/[\r\n]/g, "");

		const mailOptions: MailOptions = {
			subject: data.subject,
			text: `[Message from: ${data.name}]: ${data.message}`,
			replyTo: safeEmail,
		};

		await sendMail(mailOptions);
		return NextResponse.json("Email sent");
	} catch (error) {
		console.error("formSubmitAction -> error", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
