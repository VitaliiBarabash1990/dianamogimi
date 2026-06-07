import React from "react";
import s from "./MyContacts.module.css";
import Container from "@/components/layout/Container/Container";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const MyContacts = () => {
	const t = useTranslations("Contacts");
	return (
		<section className={s.myContactsSection}>
			<Container className={s.myContactsContainer}>
				<div className={s.myContactsWrapper}>
					<div className={s.myContactsInfo}>
						<div className={s.titleHead}>
							<h1 className={s.title}>{t("title")}</h1>
							<p className={s.subtitle}>{t("subtitle")}</p>
						</div>
						<div className={s.infoBlock}>
							<h2 className={s.title_h2}>{t("name")}</h2>
							<ul className={s.infoList}>
								<li className={s.infoItem}>
									<div className={s.iconBlock}>
										<svg className={s.icon}>
											<use href="/sprite.svg#icon-email"></use>
										</svg>
									</div>
									{t("email")}
								</li>
								<li className={s.infoItem}>
									<div className={s.iconBlock}>
										<svg className={s.icon}>
											<use href="/sprite.svg#icon-locations"></use>
										</svg>
									</div>
									{t("location")}
								</li>
								<li className={`${s.infoItem} ${s.socItem}`}>
									<Link href="/" className={s.link}>
										<svg className={s.socIcon}>
											<use href="/sprite.svg#icon-wa"></use>
										</svg>
									</Link>
									<Link href="/" className={s.link}>
										<svg className={s.socIcon}>
											<use href="/sprite.svg#icon-tg"></use>
										</svg>
									</Link>
									<Link href="/" className={s.link}>
										<svg className={s.socIcon}>
											<use href="/sprite.svg#icon-linked"></use>
										</svg>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className={s.imageWrapper}>
						<Image
							src="/img/about/pic.webp"
							fill
							className={s.image}
							alt="image_diana"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default MyContacts;
