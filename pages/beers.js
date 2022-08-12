import Button from "@mui/material/Button";
import MainContainer from "../components/MainContainer";
import CardProduct from "../components/CardProduct/CardProduct";
import styles from "../styles/beer.module.scss";

const Beers = ({ beers }) => {
	const { list, card } = styles;
	return (
		<MainContainer keywords={"beers"} title='Catalog'>
			<ul className={list}>
				{beers.map(({ id, name, description, image_url }) => (
					<li key={id} className={card}>
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
