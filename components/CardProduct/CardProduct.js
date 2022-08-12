import { useRouter } from "next/dist/client/router";
import {
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
	Typography,
} from "@mui/material";
import classNames from "classnames/bind";
import CustomLink from "../CustomLink";
import styles from "./CardProduct.module.scss";

let cx = classNames.bind(styles);

const CardProduct = ({ id, name, description, image }) => {
	const { route } = useRouter();
	const href = `${route}/${id}`;
	const { overflow, img, headline, card } = styles;
	const text = cx(description.length > 140 ? overflow : false);

	return (
		<CustomLink href={href} className={card}>
			<Card variant='outlined'>
				<CardActionArea>
					<CardMedia
						className={img}
						component='img'
						image={image}
						alt='green iguana'
					/>
					<CardContent>
						<Typography variant='h5' className={headline}>
							{name}
						</Typography>
						<Typography variant='p' className={text}>
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</CustomLink>
	);
};

export default CardProduct;
