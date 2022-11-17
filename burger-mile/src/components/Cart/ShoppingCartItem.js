

const Item = props => {
    return (
        <div className="shopping-cart-item">
            {/* <img src={props.imageUrl} alt={`Image of ${props.name}`} /> */}

            <div>
                {/* <h1>{props.name}</h1> */}
                <p>${props.price}</p>
                <button>Remove from cart</button>
            </div>
        </div>
    )
}

export default Item