"use client";
import React from "react";
import s from "./Footer.module.css";
import Container from "../Container/Container";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";

const Footer = () => {
	const route = useRouter();
	const t = useTranslations("Footer");
	const socList = [
		{ id: 0, icon: "/sprite.svg#icon-wa", href: "https://wa.me/38067558500" },
		{ id: 1, icon: "/sprite.svg#icon-tg", href: "https://t.me/postil_service" },
		{
			id: 2,
			icon: "/sprite.svg#icon-linked",
			href: "https://www.linkedin.com/feed/",
		},
	];
	const menu = [
		{ id: 0, name: t("price"), href: "/prices", type: "page" },
		{ id: 1, name: t("about"), href: "#about", type: "hash" },
		{ id: 2, name: t("style"), href: "#style", type: "hash" },
		{ id: 3, name: t("subjects"), href: "#subjects", type: "hash" },
	] as const;
	return (
		<section id="footer" className={s.footerSection}>
			<Container className={s.footerContainer}>
				<div className={s.footerWrapper}>
					<div className={s.contact}>
						<h4 className={s.title}>{t("link_title")}</h4>
						<a
							className={s.email}
							href="mailto:dianamogimi@gmail.com"
							target="_blank"
						>
							dianamogimi@gmail.com
						</a>
						<ul className={s.socList}>
							{socList.map((item) => (
								<li key={item.id} className={s.socItem}>
									<a href={item.href} className={s.iconBlock} target="_blank">
										<svg className={s.socIcon}>
											<use href={item.icon}></use>
										</svg>
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className={s.footerMenu}>
						<h4 className={s.title}>{t("more")}</h4>
						<div className={s.menuList}>
							{menu.map((item) =>
								item.type === "hash" ? (
									<a key={item.id} href={item.href} className={s.menuItem}>
										{item.name}
									</a>
								) : (
									<Link key={item.id} href={item.href} className={s.menuItem}>
										{item.name}
									</Link>
								),
							)}
						</div>
					</div>
					<div className={s.subscribe}>
						<h4 className={s.title}>{t("halp_you")}</h4>
						<button
							type="button"
							className={s.btnFooter}
							onClick={() => route.push("/contacts")}
						>
							{t("cta")}
						</button>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Footer;
