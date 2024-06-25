import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { familiarSkills as skillsHeading } from '../data/clientsData';
import { familiarTools as toolsHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';
import { tools as toolsData } from '../data/clientsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	// const clientsHeading = clientsPageHeading;

	const [clientsData, setClientsData] = useState(clientsDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				skillsHeading,
				toolsHeading,
				clientsData,
				setClientsData,
				toolsData
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
