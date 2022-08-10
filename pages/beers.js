import MainContainer from "../components/MainContainer";
import CardProduct from "../components/CardProduct/CardProduct";
import Button from "@mui/material/Button";

const Beers = ({ beers }) => {
	return (
		<MainContainer keywords={"beers"} title='Catalog'>
			<Button variant='contained'>Kek</Button>
			<ul>
				{beers.map(({ id, name, description, image_url }) => (
					<li key={id}>
						<CardProduct
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
