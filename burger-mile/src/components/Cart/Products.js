import Product from "./Product";
import './Products.scss';

const Products = props => {
    return (
        <div className="products-container">
            {props.products.map(product => (
                <Product
                    key={product.key}
                    product={product}
                    addItem={props.addItem}
                />
            ))}
        </div>
    )
}

export default Products