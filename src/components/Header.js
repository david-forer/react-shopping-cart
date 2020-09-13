import React, { useState, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import CartIcon from '../supermarket.svg';
import {useCart} from '../contexts/use-cart';
import Cart from './Cart';

export default function Header() {
  const { cart } = useCart();


  const modalRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  
  useOnClickOutside(modalRef, () => {
    if(isOpen === true) setIsOpen(false)
  })


  return (
    <header>
      <div className="container">
        <div className="cart-button">
          <button onClick={() => setIsOpen(true)}>
            <img src={CartIcon} width="30" />({cart.length})
          </button>

          <div
            ref ={modalRef}
            className="cart-modal"
            style={{ display: isOpen ? 'block' : 'none' }}
          >
           <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
