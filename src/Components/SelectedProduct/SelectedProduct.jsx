import React from "react";
import "./SelectedProduct.css";
const SelectedProduct = (props) => {
  const { img, name } = props.product;
  return (
    <div className="wraper">
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default SelectedProduct;
