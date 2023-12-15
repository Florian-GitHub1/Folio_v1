import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

function SmoothScroll({ children }) {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 2.5,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: 'vertical', // vertical, horizontal
			gestureDirection: 'vertical', // vertical, horizontal, both
			smooth: true,
			mouseMultiplier: 1,
			smoothTouch: false,
			touchMultiplier: 2,
			infinite: false,
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return children;
}

export default SmoothScroll;
