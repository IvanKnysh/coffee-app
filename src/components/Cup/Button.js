import React from 'react';

const Button = ({ currentRecept, setModal }) => {
	if (currentRecept !== '') {
		return (
			<button onClick={() => setModal(currentRecept)}>Подробиці</button>
		);
	}
};

export default Button;