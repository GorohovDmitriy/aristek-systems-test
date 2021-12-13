import React from 'react'
import TodoAdd from '../TodoAdd/TodoAdd'
import styles from './Container.module.scss'
import {useSelector} from 'react-redux'
import CompletedList from '../CompletedList/CompletedList'
import OnDoneList from '../OnDoneList/OnDoneList'

const Container = () => {
	const posts = useSelector((state) => state.posts.todos)

	const completed = posts.filter((post) => post.completed === true)
	const onDone = posts.filter((post) => post.completed === false)
	return (
		<div className={styles.container}>
			<div className={styles.container__content}>
				<div className={styles.content_add}>
					<TodoAdd />
					<p className={styles.content__total}>Total: {posts.length}</p>
					<p className={styles.content__todo}>To do: {onDone.length}</p>
					<div>
						{onDone &&
							onDone
								.map((item) => (
									<div key={item.id}>
										<OnDoneList item={item} />
									</div>
								))
								.reverse()}
					</div>
				</div>
				<div className={styles.content__completed}>
					<p>Completed ({completed.length})</p>
					{completed &&
						completed
							.map((item) => (
								<div key={item.id}>
									<CompletedList item={item} />
								</div>
							))
							.reverse()}
				</div>
			</div>
		</div>
	)
}

export default Container
