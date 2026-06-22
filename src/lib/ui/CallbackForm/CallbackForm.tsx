"use client";
import React, { useActionState, useEffect, useRef, useState } from "react";
import s from "./CallbackForm.module.css";
import { useTranslations } from "next-intl";
import { CourseFormState } from "@/lib/types/forms";
import { sendCourseForm } from "@/lib/actions/send-form-actions";
import { FormInput } from "@/lib/ui/form/FormInput/FormInput";
import FormSelect from "@/lib/ui/form/FormSelect/FormSelect";
import { FormTextarea } from "@/lib/ui/form/FormTextarea/FormTextarea";
import clsx from "clsx";
import { Link } from "@/i18n/routing";

const initialState: CourseFormState = {
	success: false,
	errors: {},
};

const CallbackForm = () => {
	const t = useTranslations("Callback");
	const [isOpen, setIsOpen] = useState(false);

	const [state, formAction, pending] = useActionState<
		CourseFormState,
		FormData
	>(sendCourseForm, initialState);
	const formRef = useRef<HTMLFormElement>(null);
	const [isAgreed, setIsAgreed] = useState(false);

	const courses = [
		{ value: "mathematik", label: t("subjectsList.0") },
		{ value: "english", label: t("subjectsList.1") },
		{ value: "german", label: t("subjectsList.2") },
	];

	// const [selectedCourse, setSelectedCourse] = useState("");
	const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
	const [selectedCourseLabel, setSelectedCourseLabel] = useState("");
	const [courseTouched, setCourseTouched] = useState(false);

	useEffect(() => {
		if (state.success) {
			formRef.current?.reset();
			setTimeout(() => {
				// setSelectedCourse("");
				setSelectedCourses([]);
				setSelectedCourseLabel("");
				setCourseTouched(false);
				setIsAgreed(false);
				setIsOpen(true);
			}, 0);
			// setSelectedCourse("");
			// setSelectedCourseLabel("");
			// setCourseTouched(false);
			// setIsOpen(true);
		}
	}, [state.success]);

	// const handleCourseChange = (val: string) => {
	// 	setSelectedCourse(val);
	// 	const option = courses.find((c) => c.value === val);
	// 	setSelectedCourseLabel(option?.label || "");
	// };

	const selectedCourseLabels = courses
		.filter((course) => selectedCourses.includes(course.value))
		.map((course) => course.label)
		.join(", ");

	const handleCourseChange = (value: string) => {
		setSelectedCourses((prev) =>
			prev.includes(value)
				? prev.filter((item) => item !== value)
				: [...prev, value],
		);
	};

	console.log("CTA", t("cta.0"));
	return (
		<div className={s.callbackWrapper}>
			<div className={s.callbackTitle}>
				<h2 className={s.title}>{t("title")}</h2>
				<p className={s.subtitle}>{t("subtitle")}</p>
			</div>
			<form action={formAction} ref={formRef} className={s.form}>
				<div className={s.inputWrapper}>
					<FormInput
						name="name"
						label={t("name")}
						placeholder={t("placeholdername")}
						error={state.errors?.name?.join(", ")}
					/>

					<FormInput
						name="email"
						label={t("email")}
						placeholder={t("placeholderemail")}
						error={state.errors?.email?.join(", ")}
					/>

					<FormInput
						name="phone"
						label={t("phone")}
						placeholder={t("placeholderphone")}
						error={state.errors?.phone?.join(", ")}
					/>

					<FormSelect
						name="subjects"
						label={t("subjects")}
						placeholder={t("placeholdersubjects")}
						// value={selectedCourse}
						value={selectedCourses}
						onChange={handleCourseChange}
						onBlur={() => setCourseTouched(true)}
						options={courses}
						error={state.errors?.course?.join(", ")}
						touched={courseTouched}
					/>
				</div>

				{/* <input type="hidden" name="course" value={selectedCourseLabel} /> */}
				<input type="hidden" name="course" value={selectedCourseLabels} />

				<FormTextarea
					name="message"
					label={t("message")}
					placeholder={t("placeholdermessage")}
				/>

				<div className={s.checkBlock} onClick={() => setIsAgreed(!isAgreed)}>
					<div className={clsx(s.checkbox, isAgreed && s.checkboxActive)}>
						{isAgreed && (
							<svg
								width="12"
								height="10"
								viewBox="0 0 12 10"
								fill="none"
								xmlns="http://w3.org"
							>
								<path
									d="M1 5L4.5 8.5L11 1.5"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						)}
					</div>
					<p className={s.policyText}>
						Я погоджуюся з{" "}
						<Link
							href="/privacy-policy"
							className={s.policyLink}
							onClick={(e) => e.stopPropagation()}
						>
							Політикою конфіденційності
						</Link>
					</p>
				</div>

				{state.error && <p className={s.errorMessage}>{state.error}</p>}

				<button
					type="submit"
					disabled={pending || !isAgreed}
					className={s.submitBtn}
				>
					{pending ? t("cta.1") : t("cta.0")}
				</button>
			</form>
		</div>
	);
};

export default CallbackForm;
