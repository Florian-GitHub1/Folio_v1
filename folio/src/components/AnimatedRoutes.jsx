import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';
import ProjectView from '../pages/ProjectsView/ProjectView';

function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/:id' element={<ProjectView />} />
				<Route path='/*' element={<Error />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
