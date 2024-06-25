const AboutClientSingle = ({ title, Icon, color }) => {
	return (
		<>
			<div className="bg-primary-light rounded-lg p-2 text-center">
				<div className="flex justify-center">
				<	Icon style={{color: color, fontSize: '3rem'}} /> 
				</div>
				<h1 className="">{title}</h1>
			</div>
		</>
	);
};

export default AboutClientSingle;
