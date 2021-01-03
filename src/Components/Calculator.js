import React, { useState } from "react";
import { Calculate } from "../utils/calcul";
import { DisplayAlert, ClearAlert } from "../utils/alert";
import Touch from "./Touch";


const Calculator = ({theme, toggleTheme, isLight}) => {
  const [formState, setFormState] = useState({
    calcul: "",
    result: 0
  });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    if (name === "calcul") {
      const regex = /[^0-9.+\-*/]/g;
      value = value.replace(regex, "");
    }
    let oldState = { ...formState };
    oldState[name] = value;
    setFormState(oldState);
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    ClearAlert();
    let result;

    if (formState.calcul === "0" || formState.calcul === "") {
      DisplayAlert("Pas de calcul en cours");
    } else {
      result = Calculate(formState.calcul);
      let oldState = { ...formState };
      oldState["result"] = result;
      setFormState(oldState);
    }
  };

  const handleTouch = (value) => {
    let oldState = { ...formState };
    if (
      (value >= 0 && value <= 9) ||
      value === "/" ||
      value === "*" ||
      value === "-" ||
      value === "+" ||
      value === "."
    ) {
      oldState["calcul"] += value;
      setFormState(oldState);
    } else if (value === "C") {
      oldState["calcul"] = "";
      setFormState(oldState);
    } else if (value === "=") {
        handleSubmit();
    } else if (value === "AC") {
      oldState["calcul"] = "";
      oldState["result"] = 0;
      setFormState(oldState);
    } else if (value === "Del" && oldState["calcul"] !== "") {
      console.log(oldState["calcul"]);
      oldState["calcul"] = oldState["calcul"].substring(
        0,
        oldState["calcul"].length - 1
      );
      setFormState(oldState);
    }
  };
  return (
    <>
    <h1>Basic Calculator</h1>
    <div className="calc-content">
    <form action="#" className="form-style" onSubmit={handleSubmit}>
      <div className="grid-top">
        <label htmlFor="calcul" id="calcul">Caclul</label>
        <input
          
          type="text" autoFocus
          name="calcul" id="calcul"
          value={formState.calcul}
          onChange={handleChange}
        />
        <label htmlFor="result" id="result">Résultats</label>
        <input
          type="text" disabled readOnly
          name="result" id="result"
          value={formState.result}
        />
      </div>
      
        <Touch handleTouch={handleTouch}
          theme={theme}
          toggleTheme={toggleTheme} 
          isLight={isLight} />
      <button type="submit" id="sub" onSubmit={handleSubmit}></button>
    </form>
    </div>
    <div className="error-box" id="error" role="alert">
    Erreur ?
    </div>
  </>
)}

export default Calculator