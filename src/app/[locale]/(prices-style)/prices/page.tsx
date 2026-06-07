import { setRequestLocale } from "next-intl/server";

import { Locale } from "@/i18n/routing";
import PricesAndOffers from "@/components/sections/PricesAndOffers/PricesAndOffers";
import PackageOptions from "@/components/sections/PackageOptions/PackageOptions";

type Props = {
	params: Promise<{ locale: Locale }>;
};

const page = async ({ params }: Props) => {
	const { locale } = await params;
	// Enable static rendering
	setRequestLocale(locale);

	return (
		<>
			<PricesAndOffers />
			<PackageOptions />
		</>
	);
};

export default page;
