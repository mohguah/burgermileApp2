import { useState } from 'react';
import './ProductDisplay.scss';

const ProductDisplay = (props) => {

	const [cartItems, setCartItems] = useState({});

	const handleAddItem = product => {
		const ProductExists = cartItems.find(item => item.id === product.id);
		console.log("hello 1")
		if (ProductExists) {
			setCartItems(
				cartItems.map(item =>
					item.id === product.id
						? { ...ProductExists, quantity: ProductExists.quantity }
						: item
				)
			);
			console.log(cartItems);
			console.log(setCartItems);
			console.log(ProductExists);
		} else {
			setCartItems([...cartItems, {
				...product, quantity: 1
			}]);
			console.log(setCartItems);
		}
	};

	console.log(setCartItems);
	console.log(cartItems);


	// const {id, imageUrl, name, description, price} = props
	return (
		<>
			<div key={props.id} className={"product"}>
				<img
					src={props.imageUrl}
					alt={`Image of ${props.name}`}
					className={'image-product'}
				/>
				<h3>{props.name}</h3>
				<p>{props.description}</p>
				<span>${props.price}</span>

				<form>
					<button onClick={handleAddItem} />
				</form>
			</div>
		</>
	);
}

export default ProductDisplay


{/* <section>
				<div className="checkout">
					<img
						src="https://i.imgur.com/EHyR2nP.png"
						alt="The cover of Stubborn Attachments"
					/>
					<div className="description">
						<h3>Stubborn Attachments</h3>
						<h5>$20.00</h5>
					</div>
				</div>
				<form action="/create-checkout-session" method="POST">
					<button type="submit">
						Checkout
					</button>
				</form>
			</section> */}