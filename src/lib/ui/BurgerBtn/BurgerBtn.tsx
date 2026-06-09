import React, { Dispatch, SetStateAction } from "react";
import s from "./BurgerBtn.module.css";

type BtnProps = {
	isOpen: Dispatch<SetStateAction<boolean>>;
	open: boolean;
};

const BurgerBtn = ({ isOpen, open }: BtnProps) => {
	return (
		<button
			type="button"
			className={s.button}
			onClick={() => isOpen((prev) => !prev)}
		>
			<span className={`${s.line} ${open && s.closeLine}`}></span>
			<span className={`${s.line_1} ${open && s.opacity}`}></span>
			<span className={`${s.line} ${open && s.closeLine}`}></span>
		</button>
	);
};

export default BurgerBtn;
