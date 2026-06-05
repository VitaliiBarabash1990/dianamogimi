import { MenuItem } from "../types/types";

export const getMenu = (t: (key: string) => string): MenuItem[] => [
	{
		id: 0,
		name: t("navigates.0"),
		link: "/",
	},
	{
		id: 1,
		name: t("navigates.1"),
		link: {
			pathname: "/",
			hash: "subjects",
		},
	},
	{
		id: 2,
		name: t("navigates.2"),
		link: {
			pathname: "/",
			hash: "reviews",
		},
	},
	{
		id: 3,
		name: t("navigates.3"),
		link: "/prices",
	},
];
