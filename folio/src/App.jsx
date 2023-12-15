import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import AnimatedRoutes from './components/AnimatedRoutes';

import './App.scss';

const App = () => {
	return (
		<Router>
			<Header />
			<AnimatedRoutes />
		</Router>
	);
};
export default App;
