import React from 'react'
import {useDispatch} from 'react-redux'
import GlobalSvg from '../../GlobalSvg/GlobalSvg'
import {checkedTodo, deleteTodo, editPost} from '../../redux/actions/postsAction'
import styles from './OnDoneList.module.scss'

import {CopyToClipboard} from 'react-copy-to-clipboard'

const OnDoneList = ({item}) => {
	const dispatch = useDispatch()
	const [value, setValue] = React.useState(item.title)
	const [text, setText] = React.useState('')
	const [modal, setModal] = React.useState(false)
	const [copie, setCopie] = React.useState(false)

	const changeHandler = React.useCallback(
		(id) => {
			dispatch(checkedTodo(id))
		},
		[dispatch],
	)

	const removeTodo = React.useCallback(
		(id) => {
			dispatch(deleteTodo(id))
		},
		[dispatch],
	)

	const showModalEdit = () => {
		setModal(!modal)
	}

	const editTodo = React.useCallback(
		(obj, text) => {
			dispatch(editPost(obj, text))
			setModal(false)
		},
		[dispatch],
	)

	return (
		<div className={styles.ondone__list}>
			<div className={styles.ondone__checked}>
				<input type='checkbox' id={item.id} onChange={() => changeHandler(item.id)} />
				<label>
					{modal ? (
						<form className={styles.modal__input} onSubmit={() => editTodo(item, text)}>
							<input
								type='text'
								placeholder={item.title}
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
							<button onClick={() => editTodo(item, text)}>Изменить</button>
						</form>
					) : (
						<p>{item.title}</p>
					)}
				</label>
			</div>
			<div className={styles.ondone__group}>
				<div onClick={showModalEdit}>
					<GlobalSvg id='edit' />
				</div>
				<div>
					<CopyToClipboard text={value} onCopy={() => setCopie(true)}>
						<button className={styles.tooltip}>
							<GlobalSvg id='copy' />
							<span className={styles.tooltiptext} id='myTooltip'>
								Copy to clipboard
							</span>
						</button>
					</CopyToClipboard>
				</div>
				<div onClick={() => removeTodo(item.id)}>
					<GlobalSvg id='delete' />
				</div>
			</div>
		</div>
	)
}

export default OnDoneList
