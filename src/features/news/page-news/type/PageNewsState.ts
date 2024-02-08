import type PageNews from './PageNews'

export default interface PageNewsState {
	[x: string]: any
	pageNews: PageNews
	error?: string
}
