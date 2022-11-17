import Item from "./ShoppingCartItem";

const ShoppingCart = props => {
    const getCartTotal = () => {
        console.log("hello")
        console.log(props.cart)
        return props.cart.reduce((acc, value) => {
            return acc + value.price;
        }, 0).toFixed(2);
    };

    return (
        <div className="shopping-cart">
            {props.cart.map(item => (
                <Item key={item.id} {...item} />
            ))}

            <form action="/create-checkout-session" method="POST">
                <p>Total: ${getCartTotal()}</p>
                <button type="submit">
                    Checkout
                </button>
            </form>
        </div>
    )
}

export default ShoppingCart