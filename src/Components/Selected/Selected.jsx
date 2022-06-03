import SelectedProduct from "../SelectedProduct/SelectedProduct";
import "./Selected.css";

const Selected = (props) => {
  const { cart, chooseAgain, chooseItem, choose } = props;

  return (
    <div className="selected">
      <h2>Selected Laptop</h2>
      <div className="selectedItem">
        {cart.map((product) => (
          <SelectedProduct key={product.id} product={product} />
        ))}
      </div>
      <br />
      <br />
      <button onClick={chooseItem} className="btn">
        Choose One
      </button>
      <SelectedProduct product={choose} />

      <button onClick={chooseAgain} className="btn">
        Choose Again
      </button>
    </div>
  );
};

export default Selected;
