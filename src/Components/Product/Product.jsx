import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
        <div>
          <p>{name}</p>
          <p>Price: ${price}</p>
        </div>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
