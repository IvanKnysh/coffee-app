import React from 'react';
import style from './Modal.module.scss';

const Modal = ({ modal, setModal }) => {
	if (!modal) return null;

	return (
		<div className={style.overlay}>
			<div className={style.modal__window}>
				<h1>Інгридієнти</h1>
				<ul>
					{ modal.map(item => <li key={item.class_name}>{item.name} - {item.volume}</li>) }
				</ul>
				<div className={style.btn} onClick={() => setModal(null)}>X</div>
			</div>
		</div>
	);
};

export default Modal;