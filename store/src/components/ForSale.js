import Card from './Card.js'
import products from '../db/products.js'

function createCard(products, props) {
  const { onAdd } = props;
    return(
        <Card
        key={products.id}
        image={products.image}
        title={products.title}
        price={products.price}
        category={products.category}
        onAdd={onAdd}
        />
    )
}

export default function ForSale(props) {
  
  return (
    <div>
      <div className="products">{products.map(createCard)}</div>
    </div>
  )
}
