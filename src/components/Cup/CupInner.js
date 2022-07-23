import React from 'react';
import styles from "./Cup.module.scss";

const CupInner = ({ recept }) => {
	return (
		<div className={styles.inner}>
			{
				Object.values(recept)
					.map(item => {
						return (
							<div key={item.class_name} className={item.class_name} style={{height: 70*item.volume}}>
								<span>{item.name}</span>
							</div>
						);
					})
			}
		</div>
	);
};

export default CupInner;