import ProductDisplay from '../components/ProductDisplay';
import { useEffect, useState } from "react";
import productList from '../assets/products.json';

import './Store.scss';

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

const Store = () => {
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
        {
            productList.map((product) => (
                <div key={product.id}>
                    <ProductDisplay
                        Name={product.Name}
                        Description={product.Description}
                        Price={product.Price}
                        ImageUrl={product.ImageUrl}
                        Id={product.Id}
                    >
                    </ProductDisplay>
                </div>
            )}
    );
}

//             products.map((product) => <ProductDisplay {...product} key={i} />)


export default Store