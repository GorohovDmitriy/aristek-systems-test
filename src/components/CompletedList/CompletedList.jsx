import React from 'react'
import {useDispatch} from 'react-redux'
import GlobalSvg from '../../GlobalSvg/GlobalSvg'
import {deleteTodo} from '../../redux/actions/postsAction'
import styles from './CompletedList.module.scss'

const CompletedList = ({item}) => {
	const dispatch = useDispatch()

	const removeCompleted = React.useCallback(
		(id) => {
			dispatch(deleteTodo(id))
		},
		[dispatch],
	)
	return (
		<div className={styles.completed__list}>
			<div className={styles.completed__content}>
				<input
					className={styles.completed__checked}
					type='checkbox'
					id={item.id}
					name={item.title}
					checked={item.completed ? 'checked' : null}
					readOnly
				/>
				<label className={styles.completed__active} htmlFor={item.id}>
					{item.title}
					<span className={styles.completed__fake}></span>
				</label>
			</div>
			<div onClick={() => removeCompleted(item.id)} className={styles.completed__delete}>
				<GlobalSvg id='delete' />
			</div>
		</div>
	)
}

export default CompletedList
