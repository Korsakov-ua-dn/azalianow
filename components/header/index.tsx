import React, { useMemo } from "react";
import ActiveLink from "../active-link";
import s from "./style.module.scss";

type PropsType = {};

const Header: React.FC<PropsType> = (props) => {
  const options = {
    menuLinks: useMemo(
      () => [
        { title: "Главная", href: "/" },
        { title: "Каталог", href: "/products" },
      ],
      []
    ),
  };
  return (
    <header className={s.Header}>
      <ul className={s.Menu}>
        {options.menuLinks.map((link, i) => (
          <ActiveLink key={i} href={link.href} title={link.title}/>
        ))}
      </ul>
    </header>
  );
};

export default React.memo(Header);