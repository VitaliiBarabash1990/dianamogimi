import { z } from "zod";

export const courseFormSchema = z.object({
	name: z
		.string()
		.min(1, "Будь ласка, введіть від 1 до 20 символів")
		.max(20, "Будь ласка, введіть від 1 до 20 символів")
		.trim(),

	email: z.string().optional(),

	phone: z
		.string()
		.regex(/^\+38\d{10}$/, "Будь ласка, введіть дійсний номер телефону (+38)"),

	course: z.string().min(1, "Оберіть курс"),

	message: z.string().optional(),
});

export type CourseFormData = z.infer<typeof courseFormSchema>;
