import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

const Beer = ({ beer: { name } }) => {
	const {
		query: { id },
	} = useRouter();

	return (
		<MainContainer keywords={name} title={name}>
			<div>
				<h1> Beer id {id}</h1>
				<div>Beer name - {name}</div>
			</div>
		</MainContainer>
	);
};

export default Beer;

export async function getServerSideProps({ params: { id } }) {
	const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
	const beer = await response.json();
	return {
		props: { beer },
	};
}
