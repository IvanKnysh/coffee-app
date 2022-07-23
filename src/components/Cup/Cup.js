import React from 'react';
import CupInner from "./CupInner";
import styles from './Cup.module.scss';

const Cup = ({ currentRecept, setModal}) => {

	return (
		<div className={styles.cup}>
			<CupInner recept={currentRecept} />
			<div className={styles.cup_front} />
			<button onClick={() => setModal(currentRecept)}>Подробиці</button>
		</div>
	);
};

export default Cup;