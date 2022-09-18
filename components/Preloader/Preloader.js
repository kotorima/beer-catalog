import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import styles from "./Preloader.module.scss";

const Preloader = ({ isLoading, children }) => {
	const router = useRouter();
	const { container, screen } = styles;
	console.log("isLoading", isLoading);

	useEffect(() => console.log(router), []);

	return (
		<div className={container}>
			{!isLoading ? (
				<div>{children}</div>
			) : (
				<div className={screen}>
					<CircularProgress />
				</div>
			)}
		</div>
	);
};

export default Preloader;
