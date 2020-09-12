import React from 'react'
import { useCart } from '../contexts/use-cart';


export default function Product({ product }) {
    const { message } = useCart();



    return <div className="product">
        <img src={product.image_url} alt={product.name} />
        
        <h3>{message}</h3>

        <div className="product-buttons">
            <button className="remove">Remove</button>

            <button className="add">Add to Cart(0)</button>
        </div>
   </div>
}