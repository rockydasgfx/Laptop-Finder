import Header from "./Components/Header/Header";
import Selected from "./Components/Selected/Selected";
import Shop from "./Components/Shop/Shop";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div className="app">
      <Header />
      <main>
        <section className="shop">
          <Shop />
        </section>
        <section className="selected">
          <Selected />
        </section>
      </main>
    </div>
  );
}

export default App;
