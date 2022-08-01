import MainContainer from "../components/MainContainer";
import CardProduct from "../components/CardProduct";
const Beers = ({ beers }) => {
	console.log(beers);
	return (
		<MainContainer keywords={"beers"} title='Catalog'>
			<ul>
				{beers.map(({ id, name, description, image_url }) => (
					<li key={id}>
						<div>Пивасик: {name}</div>
						<CardProduct product={{ id, name, description, image_url }} />
					</li>
				))}
			</ul>
		</MainContainer>
	);
};

export default Beers;

export async function getStaticProps(context) {
	const response = await fetch(`https://api.punkapi.com/v2/beers`);
	const beers = await response.json();

	return {
		props: { beers },
	};
}
