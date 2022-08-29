import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../ContextApi";
import { CardSneakers } from "../CardSneakers";
import "../styles/Cart.css";

const Cart = () => {
  const {cart} = useContext(cartContext);

  const [total,setTotal] = useState()

//   console.log(cart[0].price);
  useEffect(() => {

    const newCartTotal = cart.reduce((acc,curr) => Number(acc + curr.price), 0);
    setTotal(newCartTotal);

    // window.localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])
  
  window.localStorage.setItem('cart', JSON.stringify(cart))
  
  return (
    <div>
      <section className="cartContainer">
        <h1 className="title">My Cart</h1>
        <p className="total">Total: &#8377; {total}</p>
        <div className="cardComponent">
          {cart.map((item) => (
            <CardSneakers item={item} key={item.id}/>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cart;
