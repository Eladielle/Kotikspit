import type OneNews from './OneNews'

export default interface OneNewsState {
	news: OneNews
	error?: string
}
