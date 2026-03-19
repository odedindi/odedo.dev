"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useInView, useWillChange } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";

import { CheckCircle, Send } from "lucide-react";
import { CircleAlert, CircleCheck } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { sendContactForm } from "@/app/[locale]/actions";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactContent, contactInfo, siteConfig } from "@/lib/site-config";

const formSchema = z.object({
	name: z.string().nonempty({ message: "Name is required." }),
	email: z.string().email({ message: "Please enter a valid email address." }),
	subject: z.string().nonempty({ message: "Subject is required." }),
	message: z
		.string()
		.min(5, { message: "Could you try to be more descriptive?" }),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const willChange = useWillChange();

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: { name: "", email: "", subject: "", message: "" },
	});

	async function onSubmit(data: FormValues) {
		setIsSubmitting(true);
		try {
			await sendContactForm(data);
			form.reset();
			setIsSubmitted(true);
			toast("Message sent!", {
				icon: <CircleCheck className="size-4" color="green" />,
				position: "top-center",
			});
			setTimeout(() => setIsSubmitted(false), 3000);
		} catch (error) {
			console.error("Error submitting form:", error);
			toast("Something went wrong. Please try again.", {
				icon: <CircleAlert className="size-4" color="red" />,
				position: "top-center",
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<section id="contact" className="py-32 px-8 relative" ref={ref}>
			{/* Background Grid */}
			<div className="absolute inset-0 retro-grid opacity-20" />

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="grid lg:grid-cols-2 gap-16">
					{/* Left - Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
					>
						<p className="font-[family-name:var(--font-pixel)] text-[10px] text-primary mb-4 tracking-wider">
							START A QUEST
						</p>
						<h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
							{contactContent.title}
							<span className="text-accent">
								{" "}
								{contactContent.titleHighlight}
							</span>
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed mb-12">
							{contactContent.description}
						</p>

						{/* Contact Details */}
						<div className="space-y-6 mb-12">
							{contactInfo.map((item, index) => (
								<motion.div
									key={item.label}
									initial={{ opacity: 0, x: -20 }}
									animate={isInView ? { opacity: 1, x: 0 } : {}}
									transition={{ delay: index * 0.1 + 0.3 }}
									className="flex items-center gap-4 group"
								>
									<div className="w-12 h-12 border border-border bg-card flex items-center justify-center group-hover:border-primary transition-colors">
										<item.icon className="w-5 h-5 text-primary" />
									</div>
									<div>
										<p className="text-[10px] text-muted-foreground uppercase tracking-wider">
											{item.label}
										</p>
										<p className="text-foreground">{item.value}</p>
									</div>
								</motion.div>
							))}
						</div>

						{/* Availability Badge */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.6 }}
							className="inline-flex items-center gap-3 px-4 py-3 border border-primary bg-primary/10"
						>
							<motion.div
								style={{ willChange }}
								className="w-2 h-2 bg-primary"
								animate={{ opacity: [1, 0.3, 1] }}
								transition={{ duration: 1.5, repeat: Infinity }}
							/>
							<span className="font-[family-name:var(--font-pixel)] text-[10px] text-primary uppercase">
								{siteConfig.availability}
							</span>
						</motion.div>
					</motion.div>

					{/* Right - Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						<div className="border border-border bg-card p-8 relative">
							{/* Form Header */}
							<div className="flex items-center gap-2 mb-8">
								<div className="w-3 h-3 bg-destructive" />
								<div className="w-3 h-3 bg-accent" />
								<div className="w-3 h-3 bg-primary" />
								<span className="ml-4 font-[family-name:var(--font-pixel)] text-[10px] text-muted-foreground">
									message.new
								</span>
							</div>

							{isSubmitted ? (
								<motion.div
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									className="flex flex-col items-center justify-center py-16 text-center"
								>
									<motion.div
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ type: "spring", delay: 0.2 }}
									>
										<CheckCircle className="w-16 h-16 text-primary mb-4" />
									</motion.div>
									<h3 className="font-[family-name:var(--font-pixel)] text-sm text-foreground mb-2">
										MESSAGE SENT!
									</h3>
									<p className="text-muted-foreground">
										I&apos;ll get back to you within {siteConfig.responseTime}.
									</p>
								</motion.div>
							) : (
								<Form {...form}>
									<form
										onSubmit={form.handleSubmit(onSubmit)}
										className="space-y-6"
									>
										<FormField
											control={form.control}
											name="subject"
											render={({ field }) => (
												<FormItem>
													<label className="font-[family-name:var(--font-pixel)] text-[10px] text-muted-foreground block mb-2">
														SUBJECT
													</label>
													<FormControl>
														<Input
															{...field}
															placeholder="What's this about?"
															className="bg-secondary border-border focus:border-primary"
														/>
													</FormControl>
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
														<label className="font-[family-name:var(--font-pixel)] text-[10px] text-muted-foreground block mb-2">
															YOUR NAME
														</label>
														<FormControl>
															<Input
																{...field}
																placeholder="Enter your name"
																className="bg-secondary border-border focus:border-primary"
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>

											<FormField
												control={form.control}
												name="email"
												render={({ field }) => (
													<FormItem>
														<label className="font-[family-name:var(--font-pixel)] text-[10px] text-muted-foreground block mb-2">
															EMAIL ADDRESS
														</label>
														<FormControl>
															<Input
																type="email"
																{...field}
																placeholder="Enter your email"
																className="bg-secondary border-border focus:border-primary"
															/>
														</FormControl>
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
													<label className="font-[family-name:var(--font-pixel)] text-[10px] text-muted-foreground block mb-2">
														YOUR MESSAGE
													</label>
													<FormControl>
														<Textarea
															{...field}
															placeholder="Tell me about your project..."
															className="bg-secondary border-border focus:border-primary min-h-[150px] resize-none"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<Button
											type="submit"
											className="w-full font-[family-name:var(--font-pixel)] text-[10px] py-6"
											disabled={isSubmitting}
										>
											{isSubmitting ? (
												<span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
											) : (
												<Send className="w-4 h-4 mr-2" />
											)}
											SEND MESSAGE
										</Button>
									</form>
								</Form>
							)}

							{/* Decorative corners */}
							<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
							<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
							<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
							<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
						</div>
					</motion.div>
				</div>

				{/* Footer */}
				<motion.footer
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ delay: 0.8 }}
					className="mt-32 pt-8 border-t border-border"
				>
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="font-[family-name:var(--font-pixel)] text-[10px] text-primary">
							{"<OW/>"}
						</p>
						<p className="text-sm text-muted-foreground">
							Crafted with pixels and passion. {new Date().getFullYear()}.
						</p>
						<div className="flex items-center gap-2">
							<span className="text-[10px] text-muted-foreground">
								Built with
							</span>
							<motion.span
								style={{ willChange }}
								animate={{ scale: [1, 1.2, 1] }}
								transition={{ duration: 1, repeat: Infinity }}
								className="text-accent"
							>
								❤︎⁠
							</motion.span>
							<span className="text-[10px] text-muted-foreground">
								using Next.js
							</span>
						</div>
					</div>
				</motion.footer>
			</div>
		</section>
	);
}
