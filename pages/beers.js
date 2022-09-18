import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainContainer from "../components/MainContainer";
import Preloader from "../components/Preloader/Preloader";
import CardList from "../components/CardList/CardList";
import Pagination from "../components/Pagination";

const countProductOnPage = 12;

const Beers = ({ productList }) => {
	const { query, events } = useRouter();
	let page = query.page || 1;
	const itemsOnPage = query.itemsOnPage || countProductOnPage;
	const [isLoading, setLoading] = useState(false);

	const startLoading = () => setLoading(true);
	const stopLoading = () => setLoading(false);

	useEffect(() => {
		events.on("routeChangeStart", startLoading);
		events.on("routeChangeComplete", stopLoading);

		return () => {
			events.off("routeChangeStart", startLoading);
			events.off("routeChangeComplete", stopLoading);
		};
	}, []);

	return (
		<MainContainer keywords={"beers"} title='Catalog'>
			<Pagination itemsOnPage={itemsOnPage} page={page} />
			<Preloader isLoading={isLoading}>
				{productList && productList.length > 0 ? (
					<CardList cards={productList} />
				) : (
					<h3>The list is empty or something went wrong</h3>
				)}
			</Preloader>
		</MainContainer>
	);
};

export default Beers;

export async function getServerSideProps({ query }) {
	const page = query.page || 1;
	const itemsOnPage = query.itemsOnPage || countProductOnPage;
	const response = await fetch(
		`https://api.punkapi.com/v2/beers?page=${page}&per_page=${itemsOnPage}`,
	);
	const productList = await response.json();

	return { props: { productList } };
}
