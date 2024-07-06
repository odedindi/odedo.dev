"use client";
import type { FC } from "react";
import {
	Group,
	TextInput,
	Title,
	SimpleGrid,
	Textarea,
	Button,
	Image,
	Box,
	TextInputProps,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import classes from "./contactMeForm.module.css";
import emailSentImage from "./email_sent.svg";
import {
	useContactMeForm,
	useContactMeMutation,
	type ContactMeForm,
} from "./utils";

const Input: FC<
	Pick<TextInputProps, "required" | "autoFocus" | "mt" | "disabled"> & {
		form: ReturnType<typeof useContactMeForm>;
		name: keyof ContactMeForm;
	}
> = ({ form, name, required, autoFocus, ...props }) => {
	const { t } = useTranslation("translation", {
		keyPrefix: "contactMe.fields",
	});
	return (
		<TextInput
			variant="filled"
			label={t(name)}
			placeholder={t(`${name}Placeholder`)}
			name={name}
			data-autofocus={autoFocus}
			withAsterisk={required}
			{...props}
			{...form.getInputProps(name)}
		/>
	);
};

const ContactMeForm: FC = () => {
	const { t } = useTranslation("translation", { keyPrefix: "contactMe" });

	const form = useContactMeForm();
	const {
		mutate: submitContactMeForm,
		isSuccess: formSentSuccessfully,
		isPending,
	} = useContactMeMutation();

	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	const imageSrc = emailSentImage.src as string;

	return !formSentSuccessfully ? (
		<Box className={classes.emailSentWrapper}>
			<Box className={classes.emailSentBody}>
				<Title className={classes.emailSentTitle}>{t("success")}</Title>
			</Box>
			<Image src={imageSrc} className={classes.image} alt={t("success")} />
		</Box>
	) : (
		<form
			id="contact-form"
			className={classes.form}
			onReset={form.onReset}
			onSubmit={form.onSubmit(
				(values) => submitContactMeForm(values),
				(validationErrors, values) =>
					console.error({ validationErrors, values }),
			)}
		>
			<Title
				order={2}
				size="h1"
				style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }}
				fw={900}
				ta="center"
			>
				{t("title")}
			</Title>

			<SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
				<Input
					name="name"
					disabled={isPending}
					form={form}
					required
					data-autofocus
				/>
				<Input name="email" required disabled={isPending} form={form} />
			</SimpleGrid>

			<Input mt="md" name="subject" disabled={isPending} form={form} />
			<Textarea
				label={t("fields.message")}
				placeholder={t("fields.messagePlaceholder")}
				mt="md"
				maxRows={10}
				minRows={5}
				autosize
				name="message"
				variant="filled"
				withAsterisk
				disabled={isPending}
				{...form.getInputProps("message")}
			/>

			<Group justify="center" mt="xl">
				<Button
					type="submit"
					size="lg"
					fullWidth
					color="cyan"
					loading={isPending}
				>
					{t("submit")}
				</Button>
			</Group>
		</form>
	);
};

export default ContactMeForm;
