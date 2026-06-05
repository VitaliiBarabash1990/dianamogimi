import { forwardRef } from "react";
import s from "./Container.module.css";

type Props = {
	children: React.ReactNode;
	className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Container = forwardRef<HTMLDivElement, Props>(
	({ children, className = "", ...props }, ref) => {
		return (
			<div ref={ref} className={`${s.container} ${className}`} {...props}>
				{children}
			</div>
		);
	},
);

Container.displayName = "Container";
export default Container;
