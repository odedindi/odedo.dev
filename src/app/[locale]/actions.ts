"use server";

import { z } from "zod";

const formSchema = z.object({
	name: z.string().max(100),
	email: z.string().email().max(254),
	subject: z.string().max(150),
	message: z.string().min(5).max(5000),
	// Honeypot — must stay empty
	website: z.string().optional(),
});

export type FormData = z.infer<typeof formSchema>;

export async function sendContactForm(data: z.infer<typeof formSchema>) {
	const validatedFields = formSchema.safeParse(data);

	if (!validatedFields.success) throw new Error("Invalid form data");

	// Honeypot check: if the hidden field has any value, silently reject
	if (validatedFields.data.website) return { success: true };

	const response = await fetch(`${process.env.BASE_URL}/api/contact`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(validatedFields.data),
	});

	return { success: response.ok };
}
