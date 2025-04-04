import { type NextRequest, NextResponse } from "next/server";

import { type MailOptions, sendMail } from "@/lib/emailService";

import { FormData } from "../../[locale]/actions";

export const config = {
	runtime: "nodejs",
};

export async function POST(request: NextRequest) {
	try {
		const data = (await request.json()) as FormData;

		const mailOptions: MailOptions = {
			subject: data.subject,
			text: `[Message from: ${data.name}]: ${data.message}`,
			replyTo: data.email,
		};

		await sendMail(mailOptions);
		return NextResponse.json("Email sent");
	} catch (error) {
		console.error("formSubmitAction -> error", error);
		return NextResponse.json(error, { status: 500 });
	}
}
