import { setRequestLocale } from "next-intl/server";

import { Locale } from "@/i18n/routing";

type Props = {
	params: Promise<{ locale: Locale }>;
};

const page = async ({ params }: Props) => {
	const { locale } = await params;
	// Enable static rendering
	setRequestLocale(locale);

	return <>Contacts</>;
};

export default page;
