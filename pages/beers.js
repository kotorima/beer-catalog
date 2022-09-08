import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import MainContainer from "../components/MainContainer";
import CardList from "../components/CardList/CardList";
import Pagination from "../components/Pagination";

const Beers = ({ productList }) => {
	const { query, events } = useRouter();
	const countPages = 10;
	let page = query.page || 1;
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
			<Pagination countPages={countPages} page={page} />
			{isLoading ? (
				<div>
					<CircularProgress />
				</div>
			) : (
				<>
					{productList && productList.length > 0 ? (
						<CardList cards={productList} />
					) : (
						<h3>The list is empty or something went wrong</h3>
					)}
				</>
			)}
		</MainContainer>
	);
};

export default Beers;

export async function getServerSideProps({ query }) {
	const page = query.page || 1;
	const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}`);
	const productList = await response.json();

	return { props: { productList } };
}
