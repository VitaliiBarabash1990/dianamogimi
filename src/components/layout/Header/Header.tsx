"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import s from "./Header.module.css";
import { useTranslations } from "next-intl";
import { getMenu } from "@/lib/data/navigation";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import LanguageSwitcher from "@/lib/ui/LanguageSwitcher/LanguageSwitcher";

const Header = () => {
	const pathname = usePathname();
	const route = useRouter();
	const t = useTranslations("Header");
	const isContacts = pathname === "/contacts";

	const [activeHash, setActiveHash] = useState("");

	const menu = getMenu(t);

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
		<header className={s.header}>
			<Container className={s.containerExternal}>
				<nav className={s.navigation}>
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
								onClick={() => setActiveHash(hash)}
							>
								{item.name}
							</Link>
						);
					})}
				</nav>
				<LanguageSwitcher />
				<button
					type="button"
					onClick={() => route.push("/contacts")}
					className={`${s.btnContacts} ${isContacts && s.activeBtn}`}
				>
					{t("cta")}
				</button>
			</Container>
		</header>
	);
};

export default Header;
