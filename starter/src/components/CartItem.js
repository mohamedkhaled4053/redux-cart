import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, toggleAmount } from '../features/cart/cartSlice';
import { ChevronDown, ChevronUp } from '../icons';

const CartItem = ({ id, img, title, price, amount }) => {
  let dispatch = useDispatch();

  function handleDecrease() {
    if (amount === 1) {
      dispatch(removeItem({ id }));
    } else {
      dispatch(toggleAmount({ id, type: 'dec' }));
    }
  }
  
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button
          className="remove-btn"
          onClick={() => dispatch(removeItem({ id }))}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="amount-btn"
          onClick={() => dispatch(toggleAmount({ id, type: 'inc' }))}
        >
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={handleDecrease}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
