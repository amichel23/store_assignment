
function Card(props) {
    return(
        <div>
            <img src={props.image} alt="avatar" />
            <p>{props.title}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Card;