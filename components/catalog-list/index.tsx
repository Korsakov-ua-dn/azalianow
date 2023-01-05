import React from "react";
import { Product } from "../../api";
import s from "./style.module.scss";

type PropsType = {
  products: Product[];
  renderItem: (product: Product, i: number) => React.ReactNode;
};

const CatalogList: React.FC<PropsType> = (props) => {
  return (
    <ul className={s.Catalog}>
      {props.products.map((product, i) => props.renderItem(product, i))}
    </ul>
  );
};

export default React.memo(CatalogList);
