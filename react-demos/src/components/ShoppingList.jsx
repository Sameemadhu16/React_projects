import React from 'react'

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];


export default function ShoppingList() {

    const lisiItems = products.map(product=>
        <li
            key= {product.id}
            style={{
                color: product.isFruit ? 'blue' : 'green'
            }}
        >
            {product.title}
        </li>
    )
  return (
    <div>
     <ul>{lisiItems}</ul>
    </div>
  )
}
