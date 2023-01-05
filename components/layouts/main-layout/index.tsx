import Head from "next/head";
import React from "react";
import Header from "../../header";
import s from "./style.module.scss";

type PropsType = {
  title?: string;
  description?: string;
  keywords?: string;
  children?: React.ReactNode;
};

const MainLayout: React.FC<PropsType> = (props) => {
  return (
    <div className={s.Layout}>
      <Head>
        <title>{props.title || "Интернент магазин"}</title>
        <meta name="title" content="Интернент магазин" />
        {props.description && (
          <meta
            name="description"
            content={`${props.description}
              с доставкой по Москве. Все товары соответствуют фото на 100%. Доставка точно в срок.`}
          />
        )}
        <meta name="keywords" content="Одежда, бытовая техника" />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="keywords"
          content={props.keywords || "Одежда, бытовая техника"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      {props.children}
    </div>
  );
};

export default React.memo(MainLayout);
