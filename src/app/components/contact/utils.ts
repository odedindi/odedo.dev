import { useForm } from "@mantine/form";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";

const initialFormValues = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

export type ContactMeForm = typeof initialFormValues;

export const useContactMeForm = () => {
	const { t } = useTranslation("translation", {
		keyPrefix: "contactMe.fields",
	});

	return useForm<ContactMeForm>({
		initialValues: initialFormValues,
		validate: {
			name: (name) => {
				const nameLength = name.trim().length;
				return !nameLength
					? t("fieldIsRequired")
					: nameLength < 2
						? t("nameError")
						: null;
			},
			email: (email) =>
				!email.trim().length
					? t("fieldIsRequired")
					: !/^\S+@\S+$/.test(email)
						? t("emailError")
						: null,
			message: (message) => {
				const msgLength = message.trim().length;
				return !msgLength ? t("fieldIsRequired") : null;
			},
		},
	});
};

export const useContactMeMutation = () =>
	useMutation({
		mutationKey: ["contactMe"],
		mutationFn: async (contactMeFormData: ContactMeForm) => {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(contactMeFormData),
			});
			const data = (await response.json()) as string;

			if (response.ok) return data;

			throw new Error("Failed to submit contact form");
		},
		onError: (error) => {
			console.error(error);
			return "An error occurred while submitting the form";
		},
	});
