import nodemailer from "nodemailer";

const {
	NODEMAILER_PASSWORD = "",
	NODEMAILER_FROM_EMAIL = "",
	NODEMAILER_TO_EMAIL = "",
} = process.env;

export interface MailOptions {
	subject: string;
	text: string;
	replyTo: string;
}

export const sendMail = async (mailOptions: MailOptions) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: NODEMAILER_FROM_EMAIL,
			pass: NODEMAILER_PASSWORD,
		},
	});

	return await new Promise<boolean>((resolve, reject) => {
		// send mail
		transporter.sendMail(
			{
				from: NODEMAILER_FROM_EMAIL,
				to: NODEMAILER_TO_EMAIL,
				...mailOptions,
			},
			(err) => (!err ? resolve(true) : reject(err)),
		);
	});
};
