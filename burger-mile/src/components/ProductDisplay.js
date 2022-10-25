import './ProductDisplay.scss';

const ProductDisplay = (props) => {
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
				<form action="/create-checkout-session" method="POST">
					<button
						className="stripe-add-item"
						data-item-id={props.id}
						data-item-image={props.imageUrl}
						data-item-name={props.name}
						data-item-price={props.price}
						data-item-url="/"
					>
						Add to cart
					</button>
				</form>
			</div>

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
		</>
	);
}

export default ProductDisplay