import getStripe from "../GetStripe";
import Item from "./ShoppingCartItem";
// import axios from '../Axios';
// import { useEffect } from "react";

const ShoppingCart = props => {

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(fetchUrl);
    //         console.log(request);
    //         return request;
    //     }
    //     fetchData();

    // }, [])

    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(props.cart)
        });

        if(response.statusCode === 500) return;
        const data = await response.json();
        stripe.redirectToCheckout({ sessionId: data.id });
    }

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

            <p>Total: ${getCartTotal()}</p>

            <button type='button' className='btn' onClick={handleCheckout}>
                Checkout
            </button>

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