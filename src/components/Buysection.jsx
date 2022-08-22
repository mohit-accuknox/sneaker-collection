import React, {useState} from 'react'
import "./Buysection.css"

export const Buysection = () => {
    const [quantity, setQuantity] = useState(0);

    const handleDecrement = () => {
      if(quantity > 0){
          setQuantity(quantity - 1);
      }
    }
  
    return (
      <div>
        <section className="buy_container">
          <div className="product_image">
            <img
              className="product_img"
              src="/images/image-product-1.jpg"
              alt="product_logo"
            />
          </div>
          <div className="product_detail">
            <p className="company_name">SNEAKER COMPANY</p>
            <h1 className="product_title">Fall Limited Edition Sneakers</h1>
            <p className="product_description">
              These low-profile sneakers are your prefect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand everything
              the weather can offer.
            </p>
            <div className="product_price">
              <h1 className="product_mrp">$125.00</h1>
              <p className="product_discount">50%</p>
            </div>
            <p className="product_before_price">$250.00</p>
  
            <div className="product-buy">
              <div className="product_quantity">
                <img
                  src="/images/icon-minus.png"
                  alt="Minus icon"
                  className="minus"
                  onClick={handleDecrement}
                />
                <p className="product_quant">{quantity}</p>
                <img
                  src="images/icon-plus.png"
                  alt=""
                  className="plus"
                  onClick={() => setQuantity(quantity + 1)}
                />
              </div>
              <button className="add_cart">
                <img className="cart_button" src="images/cart-regular.png" alt="" />
                Add To Cart
              </button>
            </div>
          </div>
        </section>
      </div>
    );
}
