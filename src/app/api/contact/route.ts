import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { type NextRequest, NextResponse } from "next/server";

import { type MailOptions, sendMail } from "@/lib/emailService";

import { FormData } from "../../[locale]/actions";

export const runtime = "nodejs";

const ratelimit = new Ratelimit({
	redis: Redis.fromEnv(),
	// 3 submissions per 10 minutes per IP
	limiter: Ratelimit.slidingWindow(3, "10 m"),
	analytics: true,
});

export async function POST(request: NextRequest) {
	try {
		// Rate limiting — keyed by IP (fail-open if Redis unavailable)
		const ip =
			request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
			"anonymous";
		let rateLimited = false;
		try {
			const { success } = await ratelimit.limit(ip);
			rateLimited = !success;
		} catch (rlError) {
			// Fail-open: log the error but continue to send the email
			console.error(
				"Rate limiter unavailable, proceeding without rate limiting",
				rlError,
			);
		}
		if (rateLimited) {
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
