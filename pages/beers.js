import MainContainer from "../components/MainContainer";
import { Link } from "../components/CardProduct";
import CardProduct from "../components/CardProduct";
import Button from "@material-ui/core/Button";
const Beers = ({ beers }) => {
	// console.log(beers);
	return (
		<MainContainer keywords={"beers"} title='Catalog'>
			<Button variant='contained'>Keke</Button>
			<ul>
				{beers.map(({ id, name, description, image_url }) => (
					<li key={id}>
						<CardProduct
							component={Link}
							id={id}
							name={name}
							image={image_url}
							description={description}
						/>
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
