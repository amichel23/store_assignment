import Card from './Card.js'
import products from '../db/products.js'

function createCard(products) {
    return(
        <Card
        key={products.id}
        title={products.title}
        price={products.price}
        category={products.category}
        image={products.image}
        />
    )
}

export default function ForSale() {
  return (
    <div>
    <h1>Products for Sale</h1>
    {products.map(createCard)}
    </div>
  )
}
