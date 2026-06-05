"use server";

import nodemailer from "nodemailer";
import { CourseFormState } from "@/lib/types/forms";
import { courseFormSchema } from "../validation/course-form";

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: Number(process.env.SMTP_PORT) === 465,
	auth: {
		user: process.env.SMTP_USER!,
		pass: process.env.SMTP_PASSWORD!,
	},
});

export async function sendCourseForm(
	prevState: CourseFormState,
	formData: FormData,
) {
	try {
		const data = Object.fromEntries(formData);

		const validation = courseFormSchema.safeParse(data);

		if (!validation.success) {
			return {
				success: false,
				errors: validation.error.flatten().fieldErrors,
			};
		}

		const { name, email, phone, course, message } = validation.data;

		await transporter.sendMail({
			from: process.env.SMTP_FROM,
			to: process.env.SMTP_RECEIVER,
			subject: "Нова заявка на курс",
			html: `
          <h2>Нова заявка</h2>
          <p><strong>Ім'я:</strong> ${name}</p>
          <p><strong>Прізвище:</strong> ${email || "Не вказано"}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Курс:</strong> ${course}</p>
          <p><strong>Повідомлення:</strong> ${message || "Не вказано"}</p>
        `,
		});

		return {
			success: true,
			errors: {},
		};
	} catch (error) {
		return {
			success: false,
			error: "Сталася помилка при відправці форми. Спробуйте пізніше.",
			errors: {},
		};
	}
}
