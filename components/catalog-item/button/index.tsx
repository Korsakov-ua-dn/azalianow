import React from "react";
import s from "./style.module.scss";

type PropsType = {
  action: () => void;
  isActive: boolean;
  children: string;
};

const Button: React.FC<PropsType> = (props) => {
  const className = props.isActive
    ? `${s.Card__button} ${s.Card__button_active}`
    : `${s.Card__button}`;

  return (
    <button onClick={props.action} className={className}>
      {props.children}
    </button>
  );
};

export default React.memo(Button);
