export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex-1">
			<main className="relative z-20 flex-1 scroll-smooth scroll-pt-12.5 overflow-x-hidden w-full">
				{children}
			</main>
		</div>
	);
}
