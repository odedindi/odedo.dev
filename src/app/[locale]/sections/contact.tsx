"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { z } from "zod";

import { CircleAlert, CircleCheck } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { sendContactForm } from "@/app/[locale]/actions";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { SectionTitle } from "./section-title";

const inputVariants = {
	focus: { scale: 1.02, transition: { duration: 0.3 } },
	blur: { scale: 1, transition: { duration: 0.3 } },
};

const formSchema = z.object({
	name: z.string().nonempty({
		message: "Name is required.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	subject: z.string().nonempty({
		message: "Subject is required.",
	}),
	message: z.string().min(5, {
		message: "Could you try to be more descriptive?",
	}),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
	const t = useTranslations("contact");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	async function onSubmit(data: FormValues) {
		setIsSubmitting(true);

		try {
			await sendContactForm(data);
			form.reset();
			toast(t("success"), {
				icon: <CircleCheck className="size-4" color="green" />,
				position: "top-center",
			});
		} catch (error) {
			console.error("Error submitting form:", error);
			toast(t("error"), {
				icon: <CircleAlert className="size-4" color="red" />,
				position: "top-center",
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div className="container px-4 m-auto">
			<motion.div
				className="max-w-3xl mx-auto"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<SectionTitle title={t("title")} description={t("description")} />
				<motion.div
					className="bg-card rounded-lg p-6 md:p-8 shadow-sm border transition-all hover:border-primary/20"
					whileHover={{
						boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1)",
					}}
				>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<FormField
								control={form.control}
								name="subject"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("subject")}</FormLabel>
										<motion.div whileFocus="focus" variants={inputVariants}>
											<FormControl>
												<Input
													{...field}
													className="transition-all focus:border-primary/50 focus:ring-primary/50"
												/>
											</FormControl>
										</motion.div>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t("name")}</FormLabel>
											<motion.div whileFocus="focus" variants={inputVariants}>
												<FormControl>
													<Input
														{...field}
														className="transition-all focus:border-primary/50 focus:ring-primary/50"
													/>
												</FormControl>
											</motion.div>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t("email")}</FormLabel>
											<motion.div whileFocus="focus" variants={inputVariants}>
												<FormControl>
													<Input
														type="email"
														{...field}
														className="transition-all focus:border-primary/50 focus:ring-primary/50"
													/>
												</FormControl>
											</motion.div>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("message")}</FormLabel>
										<motion.div whileFocus="focus" variants={inputVariants}>
											<FormControl>
												<Textarea
													className="min-h-32 transition-all focus:border-primary/50 focus:ring-primary/50"
													{...field}
												/>
											</FormControl>
										</motion.div>
										<FormMessage />
									</FormItem>
								)}
							/>
							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									type="submit"
									className="flex items-center gap-2 w-full   hover:bg-gradient-to-r from-purple-600 to-violet-600 duration-300"
									disabled={isSubmitting}
								>
									{isSubmitting && (
										<span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
									)}
									{t("send")}
								</Button>
							</motion.div>
						</form>
					</Form>
				</motion.div>
			</motion.div>
		</div>
	);
}
