import Card from './Card.js'
import products from '../db/products.js'

function createCard(products) {
    return(
        <Card
        key={products.id}
        image={products.image}
        title={products.title}
        price={products.price}
        category={products.category}
        />
    )
}

export default function ForSale() {
  return (
    <div>
      <div className="products">{products.map(createCard)}</div>
    </div>
  )
}
