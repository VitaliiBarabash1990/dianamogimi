import React from "react";
import s from "./Footer.module.css";
import Container from "../Container/Container";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
	const t = useTranslations("Footer");
	const socList = [
		{ id: 0, icon: "/sprite.svg#icon-wa", href: "/watsapp.app" },
		{ id: 1, icon: "/sprite.svg#icon-tg", href: "/telegram.app" },
		{ id: 2, icon: "/sprite.svg#icon-linked", href: "/linkedin.app" },
	];
	const menu = [
		{ id: 0, name: t("price"), href: "/price" },
		{ id: 1, name: t("about"), href: "#about" },
		{ id: 2, name: t("style"), href: "#style" },
		{ id: 3, name: t("subjects"), href: "#subjects" },
	];
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
									<Link
										href={item.href}
										className={s.iconBlock}
										target="_blank"
									>
										<svg className={s.socIcon}>
											<use href={item.icon}></use>
										</svg>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className={s.footerMenu}>
						<h4 className={s.title}>{t("more")}</h4>
						<div className={s.menuList}>
							{menu.map((item) => (
								<Link key={item.id} href={item.href} className={s.menuItem}>
									{item.name}
								</Link>
							))}
						</div>
					</div>
					<div className={s.subscribe}>
						<h4 className={s.title}>{t("halp_you")}</h4>
						<button type="button" className={s.btnFooter}>
							{t("cta")}
						</button>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Footer;
