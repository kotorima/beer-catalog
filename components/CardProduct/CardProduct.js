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
	const { card } = styles;
	const text = cx({
		overflow: description.length > 140 ? true : false,
	});

	return (
		<CustomLink href={href}>
			<Card variant='outlined' className={card}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='140'
						image={image}
						alt='green iguana'
					/>
					<CardContent>
						<Typography variant='h5'>{name}</Typography>
						<p className={text}>{description}</p>
					</CardContent>
				</CardActionArea>
			</Card>
		</CustomLink>
	);
};

export default CardProduct;
