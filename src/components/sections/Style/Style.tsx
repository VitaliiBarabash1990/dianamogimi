import Container from "@/components/layout/Container/Container";
import React from "react";
import s from "./Style.module.css";
import { useTranslations } from "next-intl";

const Style = () => {
	const t = useTranslations("Style");
	const styleList = [
		{
			id: 0,
			icon: "/sprite.svg#icon-clock",
			title: t("variants.0"),
			subtitle: t("descriptions.0"),
		},
		{
			id: 1,
			icon: "/sprite.svg#icon-laptop",
			title: t("variants.1"),
			subtitle: t("descriptions.1"),
		},
		{
			id: 2,
			icon: "/sprite.svg#icon-custom-leson",
			title: t("variants.2"),
			subtitle: t("descriptions.2"),
		},
		{
			id: 3,
			icon: "/sprite.svg#icon-materials",
			title: t("variants.3"),
			subtitle: t("descriptions.3"),
		},
	];
	return (
		<section id="style" className={s.styleSection}>
			<Container className={s.styleContainer}>
				<div className={s.styleWrapper}>
					<h2 className={s.title}>{t("title")}</h2>
					<div className={s.styleDescription}>
						<div className={s.description}>
							<p>{t("subtitle_1")}</p>
							<p>{t("subtitle_2")}</p>
						</div>
						<ul className={s.styleList}>
							{styleList.map((item) => (
								<li key={item.id} className={s.styleItem}>
									<div className={s.iconBlock}>
										<svg className={s.icon}>
											<use href={item.icon}></use>
										</svg>
									</div>
									<div className={s.descItem}>
										<h3 className={s.title_h3}>{item.title}</h3>
										<p>{item.subtitle}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Style;
