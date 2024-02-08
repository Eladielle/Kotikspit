export default interface PageBuy {
	totalElements: number
	totalPages: number
	size: number
	content: Array<{
		id: number
		image: string
		title: string
		price: number
		state: string
		numberOfPlayers: string
		minAge: string
	}>
}
