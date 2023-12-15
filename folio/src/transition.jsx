import { motion } from 'framer-motion';

const transition = (OgComponent) => {
	return () => (
		<>
			<OgComponent />
			<motion.div className='slide-in' initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exite={{ sacleY: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} />
			<motion.div className='slide-in' initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exite={{ sacleY: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} />
		</>
	);
};

export default transition;
