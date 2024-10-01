import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, incrementQuantity, decrementQuantity} from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false); 
  const [showPlants, setShowPlants] = useState(); 
 // console.log(" Cart ",cart);
  // Calculate total amount for all products in the cart
  
  const calculateTotalAmount = () => {
    let total = 0.0;
    
    cart.forEach((item) => {
        total +=  item.cost * item.quantity;   
       // console.log(" total = ", total, "  cost" ,cost )
    });
    return total;
  };

  const handleContinueShopping = (e) => {
	console.log(" In cartItems.handleContinueShopping ");
	e.preventDefault();
    setShowCart(false);
    setShowPlants(true);
  };
  const total_amount = calculateTotalAmount () ;
  
  const handleIncrement = (item) => {
   // console.log(" In handleIncrement  ");
    dispatch(incrementQuantity(item));
 };

 const handleDecrement = (item) => {
   // console.log(" In handleDecrement quantity: ",item.quantity );

    if ( item.quantity == 0)
        Return;
    if (item.quantity >= 2) {
        dispatch(decrementQuantity(item));
    }
    else if (item.quantity == 1 ) {
        dispatch(decrementQuantity(item));
        dispatch(removeItem(item));
    };
 };

 const handleRemove = (item) => {
    dispatch(removeItem(item));
  };
  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
   //  console.log (" In Calculate Cost ", item.cost ," * ", parseInt(item.quantity))
    return item.quantity * item.cost  ;
 };
  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${total_amount}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


