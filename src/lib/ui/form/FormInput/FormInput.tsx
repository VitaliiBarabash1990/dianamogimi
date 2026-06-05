"use client";

import clsx from "clsx";
import FormFieldError from "../FormFieldError";
import s from "./FormInput.module.css";

interface FormInputProps {
	name: string;
	type?: string;
	label?: string;
	placeholder?: string;
	error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
	name,
	type = "text",
	label,
	placeholder,
	error,
}) => {
	return (
		<div className={s.inputWrapper}>
			<label htmlFor="name" className={s.label}>
				{label}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				className={clsx(s.input, error && s.error)}
			/>

			<FormFieldError error={error} />
		</div>
	);
};
