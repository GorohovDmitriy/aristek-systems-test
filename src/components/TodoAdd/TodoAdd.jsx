import React from 'react'
import {useDispatch} from 'react-redux'
import {createTodo} from '../../redux/actions/postsAction'
import styles from './TodoAdd.module.scss'

const TodoAdd = () => {
	const dispatch = useDispatch()
	const [value, setValue] = React.useState('')

	const addTask = (e) => {
		e.preventDefault()
		const newTask = {
			id: Date.now().toString(),
			title: value,
			userId: 1,
			completed: false,
		}
		if (value === '') {
			alert('Поле не может быть пустым')
		} else {
			dispatch(createTodo(newTask))
			setValue('')
		}
	}

	return (
		<form onSubmit={addTask} className={styles.add__todo}>
			<input
				type='text'
				placeholder='+ Add a task, press Enter to save'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={addTask}>Add</button>
		</form>
	)
}

export default TodoAdd
