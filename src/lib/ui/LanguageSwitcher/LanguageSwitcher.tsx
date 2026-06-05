"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, routing } from "@/i18n/routing";
import s from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();
	const t = useTranslations("Header");

	const handleLocaleChange = (newLocale: "uk" | "de") => {
		const hash = window.location.hash;

		router.replace(
			{
				pathname,
			},
			{
				locale: newLocale,
			},
		);
		if (hash) {
			setTimeout(() => {
				window.location.hash = hash;
			}, 0);
		}
	};

	return (
		<ul className={s.switcherList}>
			{routing.locales.map((item, index) => (
				<React.Fragment key={index}>
					<li
						className={`${s.language} ${locale === item ? s.languageActive : ""}`}
						onClick={() => handleLocaleChange(item)}
					>
						{item === "de" ? t("languages.0") : t("languages.1")}
					</li>
					{index < routing.locales.length - 1 && (
						<li className={s.separator}>|</li>
					)}
				</React.Fragment>
			))}
		</ul>
	);
};

export default LanguageSwitcher;
