import React from "react";
import s from "./style.module.scss";

type PropsType = {
  addToCart: () => void;
  isAtCart: boolean;
};

const Button: React.FC<PropsType> = (props) => {
  const className = props.isAtCart
    ? `${s.Card__button} ${s.Card__button_atCart}`
    : `${s.Card__button}`;

  return (
    <button onClick={props.addToCart} className={className}>
      {props.isAtCart ? "В корзине" : "В корзину"}
    </button>
  );
};

export default React.memo(Button);
