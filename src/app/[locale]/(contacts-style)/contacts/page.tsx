import { setRequestLocale } from "next-intl/server";

import { Locale } from "@/i18n/routing";
import MyContacts from "@/components/sections/MyContacts/MyContacts";
import CallbackForm from "@/lib/ui/CallbackForm/CallbackForm";
import Container from "@/components/layout/Container/Container";
import s from "./contacts.module.css";

type Props = {
	params: Promise<{ locale: Locale }>;
};

const page = async ({ params }: Props) => {
	const { locale } = await params;
	// Enable static rendering
	setRequestLocale(locale);

	return (
		<>
			<MyContacts />
			<section className={s.contactsSection}>
				<Container className={s.contactsContainer}>
					<CallbackForm />
				</Container>
			</section>
		</>
	);
};

export default page;
