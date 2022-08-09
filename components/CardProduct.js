import { forwardRef, useRef, useEffect, useCallback } from "react";
// import PropTypes from "prop-types";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import MuiLink from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";

const NextComposed = forwardRef(function NextComposed({ href, as }, ref) {
	// console.log(ref);
	return (
		<NextLink href={href} as={as}>
			<a ref={ref} />
		</NextLink>
	);
});

const Link = forwardRef(function Link({ name, description, image, id }, ref) {
	console.log(name, ref);
	return (
		<MuiLink component={NextComposed} ref={ref} href={"/[id]"} as={`/${id}`}>
			<div>{name}</div>
			{/* <CardMedia component='img' height='140' image={image} alt={name} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{name}
				</Typography>
				<Typography variant='body2' color='textSecondary'>
					{description}
				</Typography>
			</CardContent> */}
		</MuiLink>
	);
});

const CardProduct = ({ id, ...props }) => {
	useEffect(() => {
		console.log(props);
	}, []);
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>{/* <Link {...props} ref={ref} /> */}</CardActionArea>
		</Card>
	);
};

// const commonPropsTypes = {
// 	href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
// 	name: PropTypes.string,
// 	description: PropTypes.string,
// 	image_url: PropTypes.string,
// };

// NextComposed.propTypes = {
// 	href: commonPropsTypes.href,
// };

// Link.propTypes = {
// 	href: commonPropsTypes.href,
// 	name: PropTypes.string,
// 	description: PropTypes.string,
// 	image_url: PropTypes.string,
// };

// CardProduct.propTypes = {
// 	id: PropTypes.number,
// };
export default CardProduct;
