import React from "react";
import { Product } from "../../api";
import s from "./style.module.scss";
import Price from "./price";
import ActionGroup from "./action-group";
import CardImage from "./card-image";
import CardInfo from "./card-info";

type PropsType = {
  item: Product;
  total: number;
  isAtCart: boolean;
  isFavorites: boolean;
  addToCart: () => void;
  onDecrement: () => void;
  onIncrement: () => void;
  addToFavorites: () => void;
};

const CatalogItem: React.FC<PropsType> = (props) => {
  return (
    <li className={`${s.Catalog__item} ${s.Card}`}>
      <CardImage
        image={props.item.image}
        ratingCount={props.item.rating.count}
      />
      <CardInfo
        ratingCount={props.item.rating.count}
        rate={props.item.rating.rate}
        category={props.item.category}
      />
      <div className={s.Card__title}>{props.item.title}</div>
      <Price price={props.item.price} />
      <ActionGroup
        onFavorites={props.addToFavorites}
        onDecrement={props.onDecrement}
        onIncrement={props.onIncrement}
        addToCart={props.addToCart}
        total={props.total}
        isAtCart={props.isAtCart}
        isFavorites={props.isFavorites}
      />
    </li>
  );
};

export default React.memo(CatalogItem);
