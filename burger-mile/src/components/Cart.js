import './Cart.scss';
import ProductDisplay from './Cart/Product';

const Cart = () => {


    return (
        <div>Hello from cart
            <div>
                {setCart.map((product, i) => (
                    <ul>
                        <li {...product} key={i}>product</li>
                    </ul>
                ))}
            </div>

            <form action="/create-checkout-session" method="POST">
					<button
						className="stripe-add-item"
						data-item-id={props.id}
						// data-item-image={props.imageUrl}
						data-item-name={props.name}
						data-item-price={props.price}
						data-item-url="/"
					>
						Add to cart
					</button>
				</form>
        </div>

    )
}