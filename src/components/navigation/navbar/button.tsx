export default function Button(): JSX.Element {
	return (
		<>
			<button className="h-6 rounded bg-primary font-bold px-3 hover:bg-red-500">
				<a href="/login">Sign In</a>
			</button>
			<button className="h-6 rounded bg-primary font-bold px-3 hover:bg-red-500">
				<a href="/loguot">Sign Out</a>
			</button>
		</>
	)
}
