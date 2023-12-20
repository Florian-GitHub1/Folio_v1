import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ProjectView from './pages/ProjectsView/ProjectView';
import Error from './pages/Error/Error';

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/Folio_v1/' element={<Home />} />
				<Route path='/Folio_v1/:id' element={<ProjectView />} />
				<Route path='/Folio_v1/*' element={<Error />} />
			</Routes>
		</Router>
	);
};
export default App;
