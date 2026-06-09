"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./SwiperReviews.module.css";
import CastomPagination from "./CastomPagination/CastomPagination";

type ReviewsProps = {
	ReviewsList: ItemProps[];
};

export type ItemProps = {
	id: number;
	review: string;
	client: string;
};

const SwiperReviews: React.FC<ReviewsProps> = ({ ReviewsList }) => {
	const [activeSlide, setActiveSlide] = useState<number | null>(null);
	return (
		<div id="SwiperReviews" className={s.reviewsSwiper}>
			<div className={s.sliderContainer}>
				<Swiper
					className={s.swiper}
					navigation={{
						nextEl: ".reviews-next",
						prevEl: ".reviews-prev",
					}}
					modules={[Pagination, Navigation]}
					loop={true}
					onSlideChange={(swiper) => {
						setActiveSlide(swiper.realIndex);
					}}
					breakpoints={{
						320: { slidesPerView: 1, spaceBetween: 4 },
						768: { slidesPerView: 3, spaceBetween: 24 },
						1024: { slidesPerView: 3, spaceBetween: 32 },
					}}
				>
					{ReviewsList.map((item, index) => (
						<SwiperSlide key={index} className={s.slide}>
							<div className={s.slideWrapper}>
								<div className={s.review}>{item.review}</div>
								<div className={s.client}>{item.client}</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<CastomPagination items={ReviewsList} activeSlide={activeSlide} />
				<div className={s.paginationBlock}>
					<button className={`reviews-prev ${s.navButton}`}>
						<svg className={s.navButton_icon}>
							<use href="/sprite.svg#icon-slider-arrow"></use>
						</svg>
					</button>
					<button className={`reviews-next ${s.navButton}`}>
						<svg className={`${s.navButton_icon} ${s.right}`}>
							<use href="/sprite.svg#icon-slider-arrow"></use>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SwiperReviews;
