import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Selected from "../Selected/Selected";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [choose, setChoose] = useState({});

  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const selectedItem = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const chooseItem = () => {
    const product = cart[Math.floor(Math.random() * cart.length)];
    setChoose(product);
  };

  const chooseAgain = () => {
    setCart([]);
    setChoose({});
  };

  return (
    <main>
      <section className="shop">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            selectedItem={selectedItem}
          />
        ))}
      </section>
      <section className="selected">
        <Selected
          cart={cart}
          choose={choose}
          chooseAgain={chooseAgain}
          chooseItem={chooseItem}
        />
      </section>
    </main>
  );
};

export default Shop;
