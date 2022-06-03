import React from "react";
import "boxicons";
import "./Product.css";

const Product = (props) => {
  const { product, selectedItem } = props;
  const { img, name, price } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="content">
        <p className="name">{name}</p>
        <p>Price: &#2547; {price}</p>
      </div>

      <button onClick={() => selectedItem(product)}>
        Add to Cart <box-icon className="icon" name="cart"></box-icon>
      </button>
    </div>
  );
};

export default Product;
