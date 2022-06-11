
function Card(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <p>{props.category}</p>
            <img src={props.image} alt="avatar" />
        </div>
    )
}

export default Card;