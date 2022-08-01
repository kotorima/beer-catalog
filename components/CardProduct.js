import { forwardRef } from "react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import NextLink from "next/link";
import MuiLink from "@material-ui/core/Link";

const NextComposed = forwardRef(function NextComposed({ href, ...props }, ref) {
	return (
		<NextLink href={href}>
			<a ref={ref} {...props} />
		</NextLink>
	);
});

const Link = ({ href, name, description, image_url }) => {
	return (
		<MuiLink component={NextComposed} href={href}>
			<Image src={image_url} alt={name} width={500} height={500} />
			<h6>{name}</h6>
			<p>{description}</p>
		</MuiLink>
	);
};

const CardProduct = ({ product: { id, ...props } }) => {
	const { route } = useRouter();
	console.log(props);
	const href = `${route}/${id}`;
	return (
		<div>
			<Link href={href} {...props} />
		</div>
	);
};

export default CardProduct;
