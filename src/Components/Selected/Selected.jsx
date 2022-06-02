import React from "react";
import "./Selected.css";

const Selected = ({ products }) => {
  return (
    <div>
      <h1>From Selected</h1>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
      <br />
      <br />
      <button>Choose One</button>
    </div>
  );
};

export default Selected;
