import React from "react";
import s from "./CastomPagination.module.css";
import { ItemProps } from "../SwiperReviews";

type PaginationProps = {
	items: ItemProps[] | undefined;
	activeSlide: number | null;
};

const CastomPagination = ({ items = [], activeSlide }: PaginationProps) => {
	return (
		<div className={s.paginationWraper}>
			{items.map((step, index) => (
				<div key={index} className={s.paginationItem}>
					{index === activeSlide ? (
						<div className={s.boolitActiveIcon}></div>
					) : (
						<div className={s.boolitIcon}></div>
					)}
				</div>
			))}
		</div>
	);
};

export default CastomPagination;
