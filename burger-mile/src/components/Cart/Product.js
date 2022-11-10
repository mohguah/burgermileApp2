import { useState } from 'react';
import './Product.scss';

const Product = (props) => {

	// const {id, imageUrl, name, description, price} = props
	return (
		<>
			<div className="product">
				<img
					src={props.product.imageUrl}
					alt={`Image of ${props.product.name}`}
					className={'image-product'}
				/>
				<h3>{props.product.name}</h3>
				<p>{props.product.description}</p>
				<span>${props.product.price}</span>

				<button onClick={() => props.addItem(props.product)}>
					Add to cart
				</button>

			</div>
			{/* <div key={props.id} className="product">
				<img
					src={props.imageUrl}
					alt={`Image of ${props.name}`}
					className={'image-product'}
				/>
				<h3>{props.name}</h3>
				<p>{props.description}</p>
				<span>${props.price}</span>

				<button onClick={() => props.addItem(props.product)}>
					Add to cart
				</button>

			</div> */}
		</>
	);
}

export default Product


{/* <section>
				<form action="/create-checkout-session" method="POST">
					<button type="submit">
						Checkout
					</button>
				</form>
			</section> */}