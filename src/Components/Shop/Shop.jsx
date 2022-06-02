import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Selected from "../Selected/Selected";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <section className="shop">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
      <section className="selected">
        <Selected />
      </section>
    </main>
  );
};

export default Shop;
