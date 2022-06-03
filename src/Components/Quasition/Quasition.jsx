import React from "react";
import "./Quasition.css";

const Quasition = () => {
  return (
    <div className="container">
      <h1>Quasition</h1>
      <h2>1. The difference between state and props?</h2>
      <p>
        <strong>State</strong>
        <br /> 1. Use state to store the data your current page needs in your
        controller view.
        <br /> 2. State Changes can be Asynchronous. <br /> 3. State can be
        changed or Modified using setState. <br /> <strong>
          Props
        </strong> <br /> 1. Use props to pass data & event handlers down to your
        child components. <br /> 2. Props are Read-Only. <br /> 3. Props can not
        be changed or Modified.
      </p>
      <h2>2. How useState Work?</h2>
      <p>
        useState is a Hook that allows you to have state variables in functional
        components. You pass the initial state to this function and it returns a
        variable with the current state value and another function to update
        this value.
      </p>
    </div>
  );
};

export default Quasition;
