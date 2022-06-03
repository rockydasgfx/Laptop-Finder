import "./Selected.css";

const Selected = (props) => {
  const { cart, chooseAgain, chooseItem, choose } = props;
  console.log(choose);
  return (
    <div>
      <h1>From Selected</h1>
      {cart.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
      <br />
      <br />
      <button onClick={chooseItem}>Choose One</button>
      <p>{choose.name}</p>

      <button onClick={chooseAgain}>Choose Again</button>
    </div>
  );
};

export default Selected;
