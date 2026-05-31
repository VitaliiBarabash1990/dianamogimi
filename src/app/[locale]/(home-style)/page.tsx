import { setRequestLocale } from "next-intl/server";

import { Locale } from "@/i18n/routing";

type Props = {
	params: Promise<{ locale: Locale }>;
};

export default async function IndexPage({ params }: Props) {
	const { locale } = await params;
	// Enable static rendering
	setRequestLocale(locale);

	return <></>;
}
