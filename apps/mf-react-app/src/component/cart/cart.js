import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
import Parcel from "single-spa-react/parcel";
const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  //function for remove item from cart
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  //function for total price of cart items
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.amount * item.price;
    });
    sessionStorage.setItem("Data", JSON.stringify(cart));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="container">
      <article>
        {cart.map((item) => (
          <div key={item.id} className="cart_box">
            <div className="row ">
              <div className="col-sm-1">
                <img src={item.img} alt="" />
              </div>
              <div className="col-sm-4 ">
                <span className="fw-bold">{item.title}</span>
              </div>
              <div className="col-sm-3 ">
                <button
                  className="btn btn-sm add"
                  onClick={() => handleChange(item, -1)}
                >
                  -
                </button>

                <button className="btn add btn-sm ms-2 me-2">
                  {item.amount}
                </button>

                <button
                  className="btn add btn-sm"
                  onClick={() => handleChange(item, +1)}
                >
                  +
                </button>
              </div>

              <div className="col-sm-2 ">
                <span className="fw-bold">Price: {item.price}</span>
              </div>

              <div className="col-sm-2 text-end ">
                <button
                  id="remove"
                  className=" btn btn-danger btn-sm"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="total">
          <span>Total Price of your Cart</span>
          <span>Rs : {price}</span>
        </div>
      </article>
      {/* Use Parcel to import vue.js component from vue app in cart (react) component */}

      <Parcel config={() => System.import("@app/vue-micro-app")} />
    </div>
  );
};

export default Cart;
