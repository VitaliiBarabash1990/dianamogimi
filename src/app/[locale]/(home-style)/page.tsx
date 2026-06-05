import { setRequestLocale } from "next-intl/server";

import { Locale } from "@/i18n/routing";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Subjects from "@/components/sections/Subjects/Subjects";
import Style from "@/components/sections/Style/Style";
import Callback from "@/components/sections/Contacts/Callback";

type Props = {
	params: Promise<{ locale: Locale }>;
};

export default async function IndexPage({ params }: Props) {
	const { locale } = await params;
	// Enable static rendering
	setRequestLocale(locale);

	return (
		<>
			<Hero />
			<About />
			<Subjects />
			<Style />
			<Callback />
		</>
	);
}
