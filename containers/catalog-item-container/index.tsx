import React, { useCallback, useState } from "react";
import { Product } from "../../api";
import { useAppSelector } from "../../hooks";
import CatalogItem from "../../components/catalog-item";

type PropsType = {
  item: Product;
  addToCart: (id: number, total: number) => void;
  addToFavorites: (id: number) => void;
};

const CatalogItemContainer: React.FC<PropsType> = (props) => {
  const select = useAppSelector((state) => ({
    cart: state.cart.data,
    favorites: state.favorites.data,
  }));

  const [total, setTotal] = useState(1);

  const callbacks = {
    onDecrement: useCallback(() => {
      setTotal((prev) => (prev > 1 ? prev - 1 : prev));
    }, []),

    onIncrement: useCallback(() => {
      setTotal((prev) => prev + 1);
    }, []),
    
    addToCart: useCallback(() => {
      props.addToCart(props.item.id, total);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.addToCart, total]),

    addToFavorites: useCallback(() => {
      props.addToFavorites(props.item.id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.addToFavorites]),
  };

  return (
    <CatalogItem
      item={props.item}
      total={total}
      addToCart={callbacks.addToCart}
      addToFavorites={callbacks.addToFavorites}
      onDecrement={callbacks.onDecrement}
      onIncrement={callbacks.onIncrement}
      isAtCart={!!select.cart[props.item.id]}
      isFavorites={select.favorites.includes(props.item.id)}
    />
  );
};

export default React.memo(CatalogItemContainer);
