import { forwardRef } from "react";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";

const NextComposed = forwardRef(function NextComposed({ href, ...props }, ref) {
	return (
		<NextLink href={href}>
			<a ref={ref} {...props} />
		</NextLink>
	);
});

const CustomLink = ({ href, children, ...props }) => {
	return (
		<MuiLink component={NextComposed} href={href} {...props}>
			{children}
		</MuiLink>
	);
};

export default CustomLink;
