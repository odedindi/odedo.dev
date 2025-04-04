"use server";

import { z } from "zod";

const formSchema = z.object({
	name: z.string(),
	email: z.string(),
	subject: z.string(),
	message: z.string(),
});

export type FormData = z.infer<typeof formSchema>;

export async function sendContactForm(data: z.infer<typeof formSchema>) {
	const validatedFields = formSchema.safeParse(data);

	if (!validatedFields.success) throw new Error("Invalid form data");

	const response = await fetch(`${process.env.VERCEL_URL}/api/contact`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(validatedFields.data),
	});

	return { success: response.ok };
}
