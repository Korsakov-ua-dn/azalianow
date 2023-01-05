import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import s from "./style.module.scss";

type PropsType = {
  href: string;
  title: string;
};

const ActiveLink: React.FC<PropsType> = (props) => {
  const router = useRouter();
  const className =
    router.asPath === `${props.href}`
    ? `${s.Menu__link} ${s.Menu__link_active}`
    : `${s.Menu__link}`;

  return (
    <Link className={className} href={props.href}>
      {props.title}
    </Link>
  );
};

export default React.memo(ActiveLink);
