import React from 'react';
import CupInner from "./CupInner";
import Button from "./Button";
import styles from './Cup.module.scss';

const Cup = ({ currentRecept, setModal}) => {

	return (
		<div className={styles.cup}>
			<CupInner recept={currentRecept} />
			<div className={styles.cup_front} />
			<Button currentRecept={currentRecept} setModal={setModal} />
		</div>
	);
};

export default Cup;