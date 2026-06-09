import Container from "@/components/layout/Container/Container";
import React from "react";
import s from "./About.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const About = () => {
	const t = useTranslations("About");
	const statistics = [t("statistics.0"), t("statistics.1"), t("statistics.2")];
	return (
		<section id="about" className={s.aboutSection}>
			<Container className={s.aboutContainer}>
				<div className={s.aboutWrapper}>
					<div className={s.descWrapper}>
						<div className={s.imageWrapper}>
							<Image
								src="/img/about/pic.webp"
								fill
								className={s.image}
								alt="img_hero"
							/>
						</div>
						<div className={s.desctiptionBlock}>
							<h2 className={s.title}>{t("title")}</h2>
							<div className={s.imageMobWrapper}>
								<Image
									src="/img/about/pic.webp"
									fill
									className={s.image}
									alt="img_hero"
								/>
							</div>
							<div className={s.descriptionWrapper}>
								<div className={s.description}>
									<p>{t("subtitle_1")}</p>
									<p>{t("subtitle_2")}</p>
								</div>
							</div>
						</div>
					</div>
					<ul className={s.statisticList}>
						{statistics.map((item, index) => (
							<li key={index} className={s.statisticsItem}>
								{item}
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default About;
