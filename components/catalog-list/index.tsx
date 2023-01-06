import React from "react";
import { Product } from "../../api";
import s from "./style.module.scss";
import cardStyle from "../catalog-item/style.module.scss";
import Image from "next/image";

type PropsType = {
  products: Product[];
  renderItem: (product: Product, i: number) => React.ReactNode;
};

const CatalogList: React.FC<PropsType> = (props) => {
  return (
    <ul className={s.Catalog}>
      <li className={`${cardStyle.Catalog__item}`}>
        <h3>Всё для комфортной работы</h3>
        <Image
          className={s.Catalog__banner}
          src="/images/banner.png"
          alt="- 25% на товары для кабинета"
          width={332}
          height={340}
          priority
        />
      </li>

      {props.products.map((product, i) => props.renderItem(product, i))}
    </ul>
  );
};

export default React.memo(CatalogList);
