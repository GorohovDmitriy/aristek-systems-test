import React from 'react'
import GlobalSvg from '../../GlobalSvg/GlobalSvg'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar__menu}>
				<GlobalSvg id='sidebar' />
			</div>
		</div>
	)
}

export default Sidebar
