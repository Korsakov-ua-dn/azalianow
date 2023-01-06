import React from "react";
import Button from "../catalog-item/button";
import s from "./style.module.scss";

type PropsType = {
  showMore: () => void;
  isActive: boolean;
};

const ShowMore: React.FC<PropsType> = (props) => {
  return (
    <div className={s.ShowMore} style={props.isActive ? {} : {display: "none"}}>
      <Button isActive={true} action={props.showMore}>
        Показать еще
      </Button>
    </div>
  );
};

export default React.memo(ShowMore);
