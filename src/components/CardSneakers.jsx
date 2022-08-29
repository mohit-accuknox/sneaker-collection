import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/Cardsneaker.css";
import { cartContext } from "../ContextApi";

export const CardSneakers = ({ item }) => {
  const navigateToCart = useNavigate();

  const { cart, setCart } = useContext(cartContext);
  
  const isItemPresentInCart = (item) =>{
    return cart.some(cartItem => cartItem.id === item.id)
  }

  console.log({cart,item});
  return (
    <div>
      <div key={item.id} className="card_container">
        <div className="image">
          <img src={item.img} alt="Sneakers" />
        </div>
        <div className="product_details">
          <h2 className="title">{item.name}</h2>
          <p className="price">Price: {item.price}</p>

          {isItemPresentInCart(item)?(
            <button
            className="add_card"
            onClick={() => setCart(cart => cart.filter(c => c.id !== item.id))}
          >
            Remove From Cart
          </button>
          ):(
            <button
            className="add_card"
            onClick={() => setCart(cart => ([...cart,item]))}
          >
            Add to Cart
          </button>
          )}
        </div>
      </div>
    </div>
  );
};
