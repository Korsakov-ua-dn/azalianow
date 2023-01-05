import React from "react";
import s from "./style.module.scss";
import numberFormat from "../../../utils/number-format";

type PropsType = {
  price: number;
};

const Price: React.FC<PropsType> = (props) => (
  <div className={s.Card__price}>
    <strong>{numberFormat(Math.ceil(props.price * 70))} ₽ </strong>
    /шт.
  </div>
);

export default React.memo(Price);
