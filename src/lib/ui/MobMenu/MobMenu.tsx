import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import s from "./MobMenu.module.css";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { getMenu } from "@/lib/data/navigation";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";

type MobMenuProps = {
	open: boolean;
	isOpen: Dispatch<SetStateAction<boolean>>;
};

const MobMenu = ({ open, isOpen }: MobMenuProps) => {
	const pathname = usePathname();
	const route = useRouter();
	const [activeHash, setActiveHash] = useState("");
	const t = useTranslations("Header");
	const isContacts = pathname === "/contacts";
	const menu = getMenu(t);
	const socMenu = [
		{ id: 0, icon: "/sprite.svg#icon-wa", link: "/" },
		{ id: 1, icon: "/sprite.svg#icon-tg", link: "/" },
		{ id: 2, icon: "/sprite.svg#icon-linked", link: "/" },
	];
	useEffect(() => {
		const handleHashChange = () => {
			setActiveHash(window.location.hash);
		};

		handleHashChange();

		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);
	return (
		<div className={`${s.mobWrapper} ${open ? s.open : ""}`}>
			<div className={s.mobHeader}>
				<BurgerBtn open={open} isOpen={isOpen} />
			</div>
			<div className={s.mobMenu}>
				<div className={s.switcherAndMenu}>
					<LanguageSwitcher />
					<nav className={s.menu}>
						{menu.map((item) => {
							const href =
								typeof item.link === "string" ? item.link : item.link.pathname;
							const hash =
								typeof item.link === "object" && item.link.hash
									? `#${item.link.hash}`
									: "";
							const isActive = hash
								? pathname === href && activeHash === hash
								: pathname === href && !activeHash;
							return (
								<Link
									key={item.id}
									href={item.link}
									className={`${s.navLink} ${isActive ? s.navLinkActive : ""}`}
									onClick={() => {
										setActiveHash(hash);
										isOpen(false);
									}}
								>
									{item.name}
								</Link>
							);
						})}
					</nav>
				</div>
				<div className={s.btnAndSoc}>
					<button
						type="button"
						disabled={isContacts}
						onClick={() => {
							route.push("/contacts");
							isOpen(false);
						}}
						className={`${s.btnContacts}`}
					>
						{t("cta")}
					</button>
					<ul className={s.socList}>
						{socMenu.map((item) => (
							<li key={item.id} onClick={() => isOpen(false)}>
								<a href={item.link} className={s.socItem} target="_blank">
									<svg className={s.icon}>
										<use href={item.icon}></use>
									</svg>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MobMenu;
