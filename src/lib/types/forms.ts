export type CourseFormState = {
	success: boolean;
	errors: {
		name?: string[];
		email?: string[];
		phone?: string[];
		course?: string[];
		message?: string[];
	};
	error?: string;
};
