import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ProjectView from './pages/ProjectsView/ProjectView';
import Error from './pages/Error/Error';

import './App.scss';

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:id' element={<ProjectView />} />
				<Route path='/*' element={<Error />} />
			</Routes>
		</Router>
	);
};
export default App;
