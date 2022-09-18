import { useRouter } from "next/router";
import { Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ itemsOnPage, page }) => {
	const router = useRouter();
	const { pathname } = router;

	const handleChange = (event, value) => {
		router.push({
			pathname: pathname,
			query: { page: value },
		});
	};

	return (
		<MuiPagination
			count={itemsOnPage}
			page={parseInt(page)}
			onChange={handleChange}
		/>
	);
};

export default Pagination;
