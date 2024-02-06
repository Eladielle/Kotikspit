export default function Button() {
	return (
		<>
			<button className="h-6 rounded bg-primary font-bold px-3 hover:bg-red-500">
				<a href="/login">Sign In</a>
			</button>
			<button className="h-6 rounded bg-primary font-bold px-3 hover:bg-red-500">
				<a href="/adminCab">Admin Cabinet</a>
			</button>
			<button className="h-6 rounded bg-primary font-bold px-3 hover:bg-red-500">Sign Out</button>
		</>
	)
}
