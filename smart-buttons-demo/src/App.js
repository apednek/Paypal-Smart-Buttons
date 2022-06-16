import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function App() {
  const [price, setPrice] = useState(0)
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <div className="app">
      <div className="wrapper">
        <div className= "title">
          <h2>Smart Buttons Demo</h2>
        </div>
        <input type = "number" editable={false} selectTextOnFocus={false} className = "input" placeholder="Enter amount" min = "0" max = "10"  onChange = {e => setPrice(e.target.value)} value = {price}/>
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </div>
  );
}

export default App;
