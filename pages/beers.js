import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainContainer from "../components/MainContainer";
import CardProduct from "../components/CardProduct/CardProduct";
import Pagination from "../components/Pagination";
import styles from "../styles/beer.module.scss";

const Beers = ({ content }) => {
	const router = useRouter();
	const { list } = styles;
	const countPages = 10;
	const [loader, setLoader] = useState(false);
	let {
		query: { page },
	} = router;
	page = page || 1;

	useEffect(() => {}, []);

	useEffect(() => {}, [page]);

	return (
		<MainContainer keywords={"beers"} title='Catalog'>
			<Pagination countPages={countPages} page={page} />
			{content && content.length > 0 ? (
				<ul className={list}>
					{content.map(({ id, name, description, image_url }) => (
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
			) : (
				<h3>The list is empty</h3>
			)}
		</MainContainer>
	);
};

export default Beers;

export async function getServerSideProps({ query }) {
	const page = query.page || 1;
	const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}`);
	const content = await response.json();

	return { props: { content } };
}
