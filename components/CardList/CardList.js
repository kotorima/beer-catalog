import CardProduct from "../CardProduct/CardProduct";
import styles from "./CardList.module.scss";

const CardList = ({ cards }) => {
	const { list } = styles;
	return (
		<ul className={list}>
			{cards.map(({ id, name, description, image_url }) => (
				<li key={id}>
					<CardProduct
						id={id}
						name={name}
						image={image_url}
						description={description}
					/>
				</li>
			))}
		</ul>
	);
};

export default CardList;
