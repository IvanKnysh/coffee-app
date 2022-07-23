import React from 'react';

const MenuItem = ({ items, setCurrentRecept }) => {
	return (
		<>
			{
				items.map(item => (
					<li
						key={item.id}
						onClick={() => setCurrentRecept(item.recipe)}
					>{item.title_ua}</li>
				))
			}
		</>
	);
};

export default MenuItem;