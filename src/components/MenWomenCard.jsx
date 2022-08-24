import React from 'react'

export const MenWomenCard = ({title,price,img,id}) => {
  return (
    <div>
        <div className="cardSection" key={id}>
            <img src={img} alt="" />
            <div className="productDetails">
              <h3 className="productName">{title}</h3>
              <p className="productPrice">Price: {price}</p>
              <button className="add_cart addToCart">Add To Cart</button>
            </div>
        </div>
    </div>
  )
}
