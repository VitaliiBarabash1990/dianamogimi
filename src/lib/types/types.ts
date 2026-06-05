import type { Pathnames } from "@/i18n/routing";

export type MenuItem = {
	id: number;
	name: string;
	link:
		| Pathnames
		| {
				pathname: Pathnames;
				hash: string;
		  };
};
