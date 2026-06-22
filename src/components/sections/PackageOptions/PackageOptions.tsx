"use client";
import Container from "@/components/layout/Container/Container";
import React from "react";
import s from "./PackageOptions.module.css";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

const PackageOptions = () => {
	const route = useRouter();
	const t = useTranslations("PackageOptions");
	const packageList = [
		{
			id: 0,
			count: t("package_1.0"),
			price: t("package_1.1"),
			info: [t("package_1.2"), t("package_1.3")],
			description: t("package_1.4"),
			save: t("package_1.5"),
			btn: t("package_1.6"),
		},
		{
			id: 1,
			count: t("package_2.0"),
			price: t("package_2.1"),
			info: [t("package_2.2"), t("package_2.3"), t("package_2.4")],
			description: t("package_2.5"),
			save: t("package_2.6"),
			btn: t("package_2.7"),
		},
		{
			id: 2,
			count: t("package_3.0"),
			price: t("package_3.1"),
			info: [t("package_3.2"), t("package_3.3")],
			description: t("package_3.4"),
			save: t("package_3.5"),
			btn: t("package_3.6"),
		},
	];
	return (
		<section className={s.packageSection}>
			<Container className={s.packageContainer}>
				<div className={s.packageWrapper}>
					<div className={s.titleHead}>
						<h2 className={s.title}>{t("title")}</h2>
						<p className={s.subtitle}>{t("subtitle")}</p>
					</div>
					<ul className={s.packageList}>
						{packageList.map((item) => (
							<li
								key={item.id}
								className={`${s.packageItem} ${item.id === 1 && s.activeItem}`}
							>
								<div className={s.itemWrapper}>
									<div className={s.itemCount}>
										<h4 className={s.count}>{item.count}</h4>
										<h3 className={s.price}>{item.price}</h3>
									</div>
									<ul className={s.itemList}>
										{item.info.map((itm, idx) => (
											<li key={idx} className={s.item}>
												{itm}
											</li>
										))}
									</ul>
									<p className={s.description}>{item.description}</p>
								</div>
								<div className={s.botomGroup}>
									<h5 className={s.save}>{item.save}</h5>
									<button
										type="button"
										className={s.btnBooking}
										onClick={() => route.push("/contacts")}
									>
										{item.btn}
									</button>
								</div>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default PackageOptions;
