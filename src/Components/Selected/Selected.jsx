import React, { useState } from "react";
import "./Selected.css";

const Selected = ({ products }) => {
  const [choose, setChoose] = useState({});

  const chooseItem = () => {
    const product = products[Math.floor(Math.random() * products.length)];
    setChoose(product);
  };
  console.log(choose);

  return (
    <div>
      <h1>From Selected</h1>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
      <br />
      <br />
      <button onClick={chooseItem}>Choose One</button>
    </div>
  );
};

export default Selected;
