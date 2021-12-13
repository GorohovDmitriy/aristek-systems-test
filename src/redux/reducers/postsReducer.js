import { CHECKED_TODO, CREATE_TODO, DELETE_TODO, EDIT_TODO, GET_POSTS } from "../constants"

const initialState = {
	todos: [],
}

export const postsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_POSTS:
			return {
				...state,
				todos: payload
			}
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== payload)
			}
		case CHECKED_TODO:
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === payload) {
						todo.completed = !todo.completed
					}
					return todo
				})
			}
		case CREATE_TODO:
			return {
				...state,
				todos: [...state.todos, payload]
			}
		case EDIT_TODO:

			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === payload.id) {
						return payload
					} else {
						return todo
					}
				})
			}
		default:
			return state
	}
}

