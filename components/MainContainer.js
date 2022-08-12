import Head from "next/head";

const MainContainer = ({ children, keywords, title }) => {
	return (
		<>
			<Head>
				<meta keywords={keywords}></meta>
				<title>{title}</title>
			</Head>
			<div className='page'>
				<div className='wrapper'>{children}</div>
			</div>
		</>
	);
};

export default MainContainer;
