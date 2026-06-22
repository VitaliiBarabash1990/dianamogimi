import React, { useState, useRef, useEffect } from "react";
import FormFieldError from "../FormFieldError";
import s from "./FormSelect.module.css";

interface Option {
	value: string;
	label: string;
}

interface FormSelectProps {
	name: string;
	label: string;
	placeholder?: string;
	value: string[];
	onChange: (value: string) => void;
	onBlur: () => void;
	options: Option[];
	error?: string;
	touched?: boolean;
}

export const FormSelect: React.FC<FormSelectProps> = ({
	name,
	label,
	placeholder = "Оберіть варіант",
	value,
	onChange,
	onBlur,
	options,
	error,
	touched,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
				onBlur();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [onBlur]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
				onBlur();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
			return () => {
				document.removeEventListener("keydown", handleKeyDown);
			};
		}
	}, [isOpen, onBlur]);

	// const handleSelect = (optionValue: string) => {
	// 	onChange(optionValue);
	// 	setIsOpen(false);
	// 	onBlur();
	// };

	const selectedOptions = options.filter((option) =>
		value.includes(option.value),
	);

	const selectedText =
		selectedOptions.length > 0
			? selectedOptions.map((option) => option.label).join(", ")
			: placeholder;

	const handleSelect = (optionValue: string) => {
		onChange(optionValue);
	};

	// const selectedOption = options.find((option) => option.value === value);

	return (
		<div className={s.select}>
			<div className={s.label}>{label}</div>
			<div ref={selectRef} className="relative">
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className={`${s.selectBtn} ${isOpen ? s.activeBtn : ""}`}
				>
					{/* <span className={selectedOption ? "" : "text-greyNormalActive"}>
						{selectedOption ? selectedOption.label : placeholder}
					</span> */}
					<span
						className={selectedOptions.length ? "" : "text-greyNormalActive"}
					>
						{selectedText}
					</span>
					<div className={s.iconBlock}>
						<svg className={`${s.icon} ${isOpen ? s.open : ""}`}>
							<use href="/sprite.svg#icon-arrow-select"></use>
						</svg>
					</div>
				</button>

				{isOpen && (
					<div className={s.dropdown}>
						{/* {options.map((option, index) => (
							<button
								key={option.value}
								type="button"
								onClick={() => handleSelect(option.value)}
								className={`${s.option} ${
									index !== options.length - 1 ? s.borderBottom : ""
								}`}
							>
								{option.label}
							</button>
						))} */}

						{options.map((option, index) => {
							const isSelected = value.includes(option.value);

							return (
								<button
									key={option.value}
									type="button"
									onClick={() => handleSelect(option.value)}
									className={`${s.option} ${
										index !== options.length - 1 ? s.borderBottom : ""
									}`}
								>
									<span>{option.label}</span>

									{isSelected && <span className={s.checkIcon}>✓</span>}
								</button>
							);
						})}
					</div>
				)}
			</div>
			<input
				type="hidden"
				name={name}
				value={selectedOptions.map((option) => option.label).join(", ")}
			/>
			<FormFieldError error={error} />
		</div>
	);
};

export default FormSelect;
