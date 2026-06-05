"use client";
import Container from "@/components/layout/Container/Container";
import React, { useState } from "react";
import s from "./Subjects.module.css";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

const Subjects = () => {
	const [index, setIndex] = useState(0);
	const route = useRouter();
	const t = useTranslations("Subjects");
	const subjects = [t("subjects.0"), t("subjects.1"), t("subjects.2")];
	const descriptions = [
		t("descriptions.0"),
		t("descriptions.1"),
		t("descriptions.2"),
	];
	return (
		<section id="subjects" className={s.subjectsSection}>
			<Container className={s.subjectsContainer}>
				<div className={s.subjectsWrapper}>
					<h2 className={s.title}>{t("title")}</h2>
					<div className={s.subjects}>
						<div className={s.subDescription}>
							<p className={s.subtitle}>{descriptions[index]}</p>
							<div className={s.buttonsGroup}>
								<button
									type="button"
									className={s.ctaBtn}
									// onClick={() => {
									// 	window.location.hash = "contacts";
									// }}
									onClick={() => {
										document.getElementById("contacts")?.scrollIntoView({
											behavior: "smooth",
										});
									}}
								>
									{t("cta")}
								</button>
								<button
									type="button"
									className={s.linkBtn}
									onClick={() => route.push("/prices")}
								>
									{t("pricelist")}
									<div className={s.linkIcon}>
										<svg className={s.Icon}>
											<use href="/sprite.svg#icon-link"></use>
										</svg>
									</div>
								</button>
							</div>
						</div>
						<ul className={s.subjectsList}>
							{subjects.map((item, idx) => (
								<li
									key={idx}
									className={`${s.subjectsItem} ${idx === index && s.active}`}
									onClick={() => setIndex(idx)}
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Subjects;
