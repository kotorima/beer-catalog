import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Index = () => {
	return (
		<MainContainer keywords={"main page"} title='Main'>
			<h1>Главная страница</h1>
			<Link href='/beers'>
				<a className='link'>Beers Page</a>
			</Link>
		</MainContainer>
	);
};

export default Index;
