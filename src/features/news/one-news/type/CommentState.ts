import type Comments from './Comments'

export default interface CommentState {
	comments: Comments[]
	error?: string
}
