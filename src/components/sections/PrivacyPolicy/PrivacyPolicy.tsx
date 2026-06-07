import Container from "@/components/layout/Container/Container";
import React from "react";
import s from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
	return (
		<section className={s.privacySection}>
			<Container className={s.privacyContainer}>
				<div className={s.privacyWrapper}>
					<h1 className={s.title}>Політика конфіденційності</h1>

					<div className={s.content}>
						<section>
							<h2 className={s.subtitle}>1. Загальні положення</h2>
							<p>
								Ця Політика конфіденційності визначає порядок отримання,
								зберігання та обробки персональних даних користувачів сайту
								студії «With Taste». Ми з повагою ставимося до вашої приватності
								та захищаємо ваші дані відповідно до Закону України «Про захист
								персональних даних».
							</p>
						</section>

						<section>
							<h2 className={s.subtitle}>2. Які дані ми збираємо</h2>
							<p>
								Ми збираємо лише ту інформацію, яку ви надаєте добровільно через
								форму запису на курси:
							</p>
							<ul className={s.list}>
								<li>Ім’я та прізвище;</li>
								<li>Номер контактного телефону;</li>
								<li>Обраний курс флористики;</li>
								<li>Додаткові питання або коментарі (за наявності).</li>
							</ul>
						</section>

						<section>
							<h2 className={s.subtitle}>3. Мета збору даних</h2>
							<p>Ваші дані використовуються виключно для:</p>
							<ul className={s.list}>
								<li>Зворотного зв’язку та консультацій щодо навчання;</li>
								<li>Бронювання місця на обраному курсі;</li>
								<li>Інформування про деталі проведення занять.</li>
							</ul>
						</section>

						<section>
							<h2 className={s.subtitle}>4. Захист та передача даних</h2>
							<p>
								Ми не передаємо ваші персональні дані третім особам, окрім
								випадків, передбачених законодавством України. Ми вживаємо
								необхідних технічних заходів для захисту інформації від
								несанкціонованого доступу.
							</p>
						</section>

						<section>
							<h2 className={s.subtitle}>5. Ваші права</h2>
							<p>
								Ви маєте право в будь-який момент відкликати згоду на обробку
								даних або попросити їх видалити, звернувшись до нас за
								контактами, вказаними на сайті.
							</p>
						</section>

						<p className={s.note}>
							Останнє оновлення: {new Date().toLocaleDateString("uk-UA")}
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default PrivacyPolicy;
