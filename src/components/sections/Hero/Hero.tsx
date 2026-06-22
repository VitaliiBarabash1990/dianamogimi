import React from "react";
import s from "./Hero.module.css";
import Container from "@/components/layout/Container/Container";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Hero = () => {
	const t = useTranslations("Hero");
	return (
		<section id="hero" className={s.heroSection}>
			<Container className={s.heroContainer}>
				<div className={s.heroWrapper}>
					<div className={s.description}>
						<h1 className={s.title}>{t("title")}</h1>
						<p className={s.subTitle}>{t("subTitle")}</p>
						<p className={`${s.subTitle} ${s.price}`}>
							{t("from")}
							<span> {t("price")}</span>
						</p>
						<div className={s.mobImageWrapper}>
							<Image
								src="/img/hero/pic.webp"
								fill
								className={s.image}
								alt="img_hero"
							/>
						</div>
						<a href="#callback" className={s.linkBtn}>
							{t("cta")}
						</a>
						<Link href="/prices" className={s.link}>
							{t("link")}
							<div className={s.linkIcon}>
								<svg className={s.Icon}>
									<use href="/sprite.svg#icon-link"></use>
								</svg>
							</div>
						</Link>
					</div>
					<div className={s.imageWrapper}>
						<Image
							src="/img/hero/pic.webp"
							fill
							className={s.image}
							alt="img_hero"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
