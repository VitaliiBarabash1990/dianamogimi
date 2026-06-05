"use client";
import React, { useActionState, useEffect, useRef, useState } from "react";
import s from "./Callback.module.css";
import Container from "@/components/layout/Container/Container";
import { useTranslations } from "next-intl";
import { CourseFormState } from "@/lib/types/forms";
import { sendCourseForm } from "@/lib/actions/send-form-actions";
import { FormInput } from "@/lib/ui/form/FormInput/FormInput";
import FormSelect from "@/lib/ui/form/FormSelect/FormSelect";
import { FormTextarea } from "@/lib/ui/form/FormTextarea/FormTextarea";
import Link from "next/link";

const initialState: CourseFormState = {
	success: false,
	errors: {},
};

const Callback = () => {
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

	const [selectedCourse, setSelectedCourse] = useState("");
	const [selectedCourseLabel, setSelectedCourseLabel] = useState("");
	const [courseTouched, setCourseTouched] = useState(false);

	useEffect(() => {
		if (state.success) {
			formRef.current?.reset();
			setTimeout(() => {
				setSelectedCourse("");
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

	const handleCourseChange = (val: string) => {
		setSelectedCourse(val);
		const option = courses.find((c) => c.value === val);
		setSelectedCourseLabel(option?.label || "");
	};
	return (
		<section id="callback" className={s.callbackSection}>
			<Container className={s.callbackContainer}>
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
								value={selectedCourse}
								onChange={handleCourseChange}
								onBlur={() => setCourseTouched(true)}
								options={courses}
								error={state.errors?.course?.join(", ")}
								touched={courseTouched}
							/>
						</div>

						<input type="hidden" name="course" value={selectedCourseLabel} />

						<FormTextarea
							name="message"
							label={t("message")}
							placeholder={t("placeholdermessage")}
						/>

						<div
							className="flex items-center justify-center gap-3 mt-8 cursor-pointer select-none"
							onClick={() => setIsAgreed(!isAgreed)}
						>
							<div
								className={`
            min-w-[20px] h-5 border-2 rounded-md flex items-center justify-center transition-all duration-200
            ${isAgreed ? "bg-[#1C686D] border-[#1C686D]" : "bg-transparent border-[#9DC6C9]"}
          `}
							>
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
							<p className="text-[14px] leading-tight text-[#4A4A4A] lg:text-[16px]">
								Я погоджуюся з{" "}
								<Link
									href="/privacy-policy"
									className="underline hover:text-[#1C686D] transition-colors"
									onClick={(e) => e.stopPropagation()}
								>
									Політикою конфіденційності
								</Link>
							</p>
						</div>

						{state.error && (
							<p className="text-error text-center pt-2">{state.error}</p>
						)}

						<button
							type="submit"
							disabled={pending || !isAgreed}
							className={s.submitBtn}
						>
							{pending ? t("cta.1") : t("cta.0")}
						</button>
					</form>
				</div>
			</Container>
		</section>
	);
};

export default Callback;
