import React, { useState, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import CartIcon from '../supermarket.svg';

export default function Header() {
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
            <img src={CartIcon} width="30" />({0})
          </button>

          <div
            ref ={modalRef}
            className="cart-modal"
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            cart goes here
          </div>
        </div>
      </div>
    </header>
  );
}
