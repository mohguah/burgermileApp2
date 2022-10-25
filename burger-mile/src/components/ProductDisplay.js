

const ProductDisplay = () => {
	return (
		<>
			<div key={id} className={"product"}>
				<img
					src={imageUrl}
					alt={`Image of ${name}`}
					className={'image-product'}
				/>
				<h3>{name}</h3>
				<p>{description}</p>
				<span>${price}</span>
				<form action="/create-checkout-session" method="POST">
					<button
						className="stripe-add-item"
						data-item-id={id}
						data-item-image={imageUrl}
						data-item-name={name}
						data-item-price={price}
						data-item-url="/"
					>
						Add to cart
					</button>
				</form>
			</div>

			<section>
				<div className="product">
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
			</section>
		</>
	);
}

export default ProductDisplay