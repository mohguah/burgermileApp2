import Products from '../components/Cart/Products';
import { useEffect, useState } from "react";
import { productList } from '../assets/products.js';

import './Store.scss';
import ShoppingCart from '../components/Cart/ShoppingCart';

const Message = ({ message }) => (
	<section>
		<p>{message}</p>
	</section>
);

const Store = () => {
	const [products, setProducts] = useState(productList);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	}

	const [message, setMessage] = useState("");

	useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);

		if (query.get("success")) {
			setMessage("Order placed! You will receive an email confirmation.");
		}

		if (query.get("canceled")) {
			setMessage(
				"Order canceled -- continue to shop around and checkout when you're ready."
			);
		}
	}, []);

	return message ? (
		<Message message={message} />
	) : (
		<div className='store-container'>
			<div className='store-main'>
				<div className='store-grid'>
					<Products
						products={products}
						addItem={addItem}
					/>
					<ShoppingCart
						cart={cart}
					/>
				</div>
			</div>
		</div>

		// 		{/* <div className='store-grid'>
		// 	{productList.map((product, i) =>
		// 		<Products {...product} key={i} />)}
		// </div> */}

		// productList.map((product) => (
		// 	<div key={product.id}>
		// 		<ProductDisplay
		// 			Name={product.Name}
		// 			Description={product.Description}
		// 			Price={product.Price}
		// 			ImageUrl={product.ImageUrl}
		// 			Id={product.Id}
		// 		/>
		// 	</div>
		// ))
	)
};



export default Store