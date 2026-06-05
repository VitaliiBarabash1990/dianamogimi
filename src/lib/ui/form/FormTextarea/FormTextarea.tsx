import clsx from "clsx";
import FormFieldError from "../FormFieldError";
import s from "./FormTextarea.module.css";
interface FormTextareaProps {
	name: string;
	label?: string;
	placeholder?: string;
	error?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
	name,
	label,
	placeholder,
	error,
}) => {
	return (
		<div className={s.formTexarea}>
			<div className={s.label}>{label}</div>
			<textarea
				name={name}
				placeholder={placeholder}
				className={clsx(`${s.texarea}`, error && "border-error")}
				rows={3}
			/>
			{error && <FormFieldError error={error} />}
		</div>
	);
};
