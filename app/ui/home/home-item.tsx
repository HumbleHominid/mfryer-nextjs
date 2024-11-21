export default function HomeItem({
	children
} : {
	children: React.ReactNode
}) {
	return (
		<div className="my-8 p-8">
			{children}
		</div>
	);
}