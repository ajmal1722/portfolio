// import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';

const AboutClients = ({ title, data }) => {

	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{title}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
				{data.map((client) => (
					<AboutClientSingle
						key={client.id}
						title={client.name}
						Icon = {client.icon}
						color ={client.color}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutClients;
