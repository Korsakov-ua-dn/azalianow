import React, { useCallback, useState } from "react";
import Button from "../button";
import Favorites from "../favorites";
import s from "./style.module.scss";

type PropsType = {
  onFavorites: () => void;
  onDecrement: () => void;
  onIncrement: () => void;
  addToCart: () => void;
  total: number;
  isAtCart: boolean;
  isFavorites: boolean;
};

const ActionGroup: React.FC<PropsType> = (props) => {
  return (
    <div className={s.Card__actionGroup}>
      <span className={s.Card__buttonWrapper}>
        <Button isActive={props.isAtCart} action={props.addToCart}>
          { props.isAtCart ? "В корзине" : "В корзину" }
        </Button>
        {!props.isAtCart && (
          <div className={s.Card__counter}>
            <div className={s.Card__decr} onClick={props.onDecrement}>
              <span className={s.Card__line} />
            </div>
            <div className={s.Card__total}>{props.total}</div>
            <div className={s.Card__incr} onClick={props.onIncrement}>
              <span className={s.Card__line} />
              <span className={s.Card__line} />
            </div>
          </div>
        )}
      </span>
      <Favorites onClick={props.onFavorites} active={props.isFavorites} />
    </div>
  );
};

export default React.memo(ActionGroup);
