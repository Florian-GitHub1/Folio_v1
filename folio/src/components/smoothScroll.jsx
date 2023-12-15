import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

function SmoothScroll({ children }) {
	useEffect(() => {
		const lenis = new Lenis({});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return children;
}

export default SmoothScroll;
