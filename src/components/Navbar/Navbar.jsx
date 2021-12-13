import React from 'react'
import GlobalSvg from '../../GlobalSvg/GlobalSvg'
import avatar from '../../assets/avatar.png'
import styles from './Navbar.module.scss'

const Navbar = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__logo}>
				<GlobalSvg id='logo' />
				<p>Task</p>
			</div>
			<div className={styles.header__avatar}>
				<p>Leanne Graham</p>
				<img src={avatar} alt='Avatar' />
				<div className={styles.header__vector}>
					<GlobalSvg id='vector' />
				</div>
			</div>
		</div>
	)
}

export default Navbar
