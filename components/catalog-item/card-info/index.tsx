import React, { useState } from "react";
import RateStars from "../rate-stars";
import s from "./style.module.scss";

type PropsType = {
  category: string;
  ratingCount: number;
  rate: number;
};

const CardInfo: React.FC<PropsType> = (props) => {
  let review = {
    zero: "отзывов",
    one: "отзыв",
    two: "отзыва",
    few: "отзыва",
    many: "отзывов",
    other: "отзывов", 
  };

  let form = new Intl.PluralRules("ru-RU").select(props.ratingCount);

  return (
      <div className={s.Card__info}>
        <span className={s.Card__category}>{props.category}</span>
        <span className={s.Card__starWrapper}>
          <RateStars rate={props.rate} />
          <a className={s.Card__review} href="#">
            {props.ratingCount} {review[form]}
          </a>
        </span>
      </div>
  );
};

export default React.memo(CardInfo);
