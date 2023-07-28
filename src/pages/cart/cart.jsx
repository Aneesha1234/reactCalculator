import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { HiOutlineBackspace } from "react-icons/hi";
import "./cart.css";

export const Cart = () => {
  const [typed, setTyped] = useState("");
  const [caller, setCaller] = useState("Add Number");
  const log = [
    { name: "Aneesha", number: "6282575230" },
    { name: "Sheffin", number: "9895260915" },
  ];
  const clickNumber = (number) => {
    setTyped(typed.concat(number));
    setCaller("Add Number");
  };
  const call = () => {
    for (let object of log) {
      if (typed === object.number) {
        setCaller(`${object.name} is calling...`);
      }
    }
  };
  return (
    <div className="container">
      <div className="result-number">{typed}</div>
      <div className="add-number">{caller}</div>
      <div className="buttons">
        <div className="number">
          {" "}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((number) => (
            <div
              onClick={() => clickNumber(number)}
              className="num-keys"
              key={number}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
      <div className="icons">
        <div onClick={() => call()} className="call-button">
          <FaPhone size={30} color="white" />
        </div>
        <div onClick={() => setTyped(typed.slice(0, -1))} className="backspace">
          <HiOutlineBackspace />
        </div>
      </div>
    </div>
  );
};
