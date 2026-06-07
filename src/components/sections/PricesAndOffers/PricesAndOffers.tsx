import Container from "@/components/layout/Container/Container";
import React from "react";
import s from "./PricesAndOffers.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

const PricesAndOffers = () => {
	const t = useTranslations("Prices");
	return (
		<section className={s.pricesSection}>
			<Container className={s.pricesContainer}>
				<div className={s.pricesWrapper}>
					<div className={s.descrWrapper}>
						<div className={s.description}>
							<h1 className={s.title}>{t("title")}</h1>
							<div className={s.subtitleBlock}>
								<p className={s.subtitle}>{t("subtitle_1")}</p>
								<p className={s.subtitle}>{t("subtitle_2")}</p>
							</div>
						</div>
						<ul className={s.priceList}>
							<li className={s.priceItem}>{t("duration_1")}</li>
							<li className={s.priceItem}>{t("duration_2")}</li>
						</ul>
					</div>
					<div className={s.imageWrapper}>
						<Image
							src="/img/prices/pic_cofe.webp"
							className={s.image}
							fill
							alt="image_cofe"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default PricesAndOffers;
