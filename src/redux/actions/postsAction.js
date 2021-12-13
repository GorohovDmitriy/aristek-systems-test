import { CHECKED_TODO, DELETE_TODO, GET_POSTS, CREATE_TODO, EDIT_TODO } from "../constants"
import { baseUrl } from "../../API"
import axios from 'axios'

export const fetchPosts = () => async (dispatch) => {
	const response = await axios.get(`${baseUrl}?_limit=5`)
	dispatch(getPosts(response.data))
}

export const getPosts = (items) => {
	return {
		type: GET_POSTS,
		payload: items
	}
}

export const checkedTodo = (id) => {
	return {
		type: CHECKED_TODO,
		payload: id
	}
}

export const deleteTodo = (id) => async (dispatch) => {
	const response = await axios.delete(`${baseUrl}/${id}`)
	dispatch({
		type: DELETE_TODO,
		payload: id
	})
	console.log('Пост удалён', response.data)

}
export const createTodo = (obj) => async (dispatch) => {
	const response = await axios.post(`${baseUrl}`, {
		id: obj.id,
		title: obj.title,
		userId: obj.userId,
		completed: obj.completed
	})
	dispatch({ type: CREATE_TODO, payload: obj })
	console.log('Пост создан', response.data);

}

export const editPost = (obj, value) => async (dispatch) => {
	const response = await axios.put(`${baseUrl}/${obj.id}`, {
		id: obj.id,
		title: value,
		userId: obj.userId,
		completed: obj.completed
	})

	dispatch({ type: EDIT_TODO, payload: response.data })
}