import React from 'react';
import Menu from "./components/Menu/Menu";
import Cup from "./components/Cup/Cup";
import './App.css';
import Modal from "./components/Modal/Modal";

const App = () => {
	const [currentRecept, setCurrentRecept] = React.useState('');
	const [modal, setModal] = React.useState(null);

	return (
		<div className="wrapper">
			<Menu setCurrentRecept={setCurrentRecept} />
			<Cup currentRecept={currentRecept} setModal={setModal} />
			<Modal modal={modal} setModal={setModal} />
		</div>
	);
};

export default App;