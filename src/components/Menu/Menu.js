import React from 'react';
import DBRecepts from '../DBRecepts';
import styles from './Menu.module.scss';
import MenuItem from "./MenuItem";

const Menu = ({ setCurrentRecept }) => {
	return (
		<div className={styles.menu}>
			<ul>
				<MenuItem items={DBRecepts} setCurrentRecept={setCurrentRecept} />
			</ul>
		</div>
	);
};

export default Menu;