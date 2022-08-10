import { forwardRef } from "react";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import classNames from "classnames/bind";
import styles from "./CardProduct.module.scss";

let cx = classNames.bind(styles);

const NextComposed = forwardRef(function NextComposed({ href, ...props }, ref) {
	return (
		<NextLink href={href}>
			<a ref={ref} {...props} />
		</NextLink>
	);
});

const Link = ({ href, name, description, image }) => {
	const { card } = styles;
	const text = cx({
		overflow: description.length > 140 ? true : false,
	});

	return (
		<MuiLink component={NextComposed} href={href}>
			<Card variant='outlined' className={card}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='140'
						image={image}
						alt='green iguana'></CardMedia>
					<CardContent>
						<Typography variant='h5'>{name}</Typography>
						<p className={text}>{description}</p>
					</CardContent>
				</CardActionArea>
			</Card>
		</MuiLink>
	);
};

const CardProduct = ({ id, ...props }) => {
	const { route } = useRouter();
	const href = `${route}/${id}`;
	return <Link href={href} {...props} />;
};

export default CardProduct;
