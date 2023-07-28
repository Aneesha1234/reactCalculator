import React, { useState } from "react";
import "./shop.css";
export const Shop = () => {
  const [result, setResult] = useState(0);
  const [calc, setCalc] = useState("");
  const calcResult = () => {
    setResult(eval(calc));
  };
  const calculationText = (text) => {
    const lastLetter = calc[calc.length - 1];
    if (text === "=") {
        calcResult();}
    else if (
      lastLetter === ("+" || "-" || "/" || "*") &&
      text === ("+" || "-" || "/" || "*")
    ) {
      setCalc(calc);
    } else setCalc(calc.concat(text));
  };
  const del = () => {
    setCalc(calc.slice(0, -1));
  };
  const extraOperands = (extras) => {
    if (extras === "DEL") del();
    else if (extras === "AC") {
      setCalc("");
      setResult(0);
    } else if (extras === "!") {
      let sum = 1;
      for (let i = 1; i <= eval(calc); i++) {
        sum = sum * i;
      }
      setResult(sum);
    }   else if(extras === "%"){
        setResult(eval(calc)/100)
    }

  };

  return (
    <div className="flex-container">
      {" "}
      <div className="containerS">
        <div className="result">{result}</div>
        <div className="calculations">{calc}</div>
        <div className="extra-operands">
          {["!", "%", "AC", "DEL"].map((extra) => (
            <div
              onClick={() => extraOperands(extra)}
              className="extras"
              key={extra}
            >
              {extra}
            </div>
          ))}
        </div>
        <div className="buttonsS">
          <div className="numbers">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "="].map((number) => (
              <div
                onClick={() => calculationText(number)}
                className="num"
                key={number}
              >
                {number}
              </div>
            ))}
          </div>
          <div className="operations">
            {["+", "-", "/", "*"].map((operation) => (
              <div
                onClick={() => calculationText(operation)}
                className="operands"
                key={operation}
              >
                {operation}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
