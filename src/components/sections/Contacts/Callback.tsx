"use client";
import React from "react";
import s from "./Callback.module.css";
import Container from "@/components/layout/Container/Container";
import CallbackForm from "@/lib/ui/CallbackForm/CallbackForm";

const Callback = () => {
	return (
		<section id="callback" className={s.callbackSection}>
			<Container className={s.callbackContainer}>
				<CallbackForm />
			</Container>
		</section>
	);
};

export default Callback;
