import Container from "@/components/layout/Container/Container";
import React from "react";
import s from "./Reviews.module.css";

import { useTranslations } from "next-intl";
import SwiperReviews from "@/lib/ui/SwiperReviews/SwiperReviews";

const Reviews = () => {
	const t = useTranslations("Reviews");

	const ReviewsList = [
		{ id: 0, review: t("items.0"), client: t("clients.0") },
		{ id: 0, review: t("items.1"), client: t("clients.1") },
		{ id: 0, review: t("items.2"), client: t("clients.2") },
		{ id: 0, review: t("items.3"), client: t("clients.3") },
	];

	return (
		<section id="reviews" className={s.reviewsSection}>
			{/* <Container className={s.reviewsContainer}> */}
			<div className={s.reviewsWrapper}>
				<h2 className={s.title}>{t("title")}</h2>
				<SwiperReviews ReviewsList={ReviewsList} />
			</div>
			{/* </Container> */}
		</section>
	);
};

export default Reviews;
