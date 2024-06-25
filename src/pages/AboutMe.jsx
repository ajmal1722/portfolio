import AboutMeBio from '../components/about/AboutMeBio';
// import AboutCounter from '../components/about/AboutCounter';
import AboutClients from '../components/about/AboutClients';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import AboutMeContext from '../context/AboutMeContext';

const About = () => {
	const {
		skillsHeading,
		toolsData,
		clientsData, 
	} = useContext(AboutMeContext);

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			{/** Counter without paddings */}
			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div> */}

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients title={skillsHeading} data={clientsData} />
				<AboutClients title={'Tools'} data={toolsData} />
			</motion.div>
		</>
	);
};

export default About;
