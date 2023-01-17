import React, {useState} from 'react';
import './App.css';
import AttributePointsView from './components/AttributePoints/v1/AttributePointsView';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<AttributePointsView />
		</div>
	);
}

export default App;
