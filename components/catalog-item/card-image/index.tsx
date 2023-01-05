import React, { useState } from "react";
import s from "./style.module.scss";
import Image from "next/image";

type PropsType = {
  image: string;
  ratingCount: number;
};

const CardImage: React.FC<PropsType> = (props) => {
  const [imgSrc, set_imgSrc] = useState(props.image);
  const fallbackSrc = "/images/fallbackImage.jpg";

  return (
    <div className={s.Card__image}>
      <Image
        src={imgSrc}
        alt="product image"
        width={220}
        height={220}
        // priority
        onError={() => {
          set_imgSrc(fallbackSrc);
        }}
      />
      {props.ratingCount > 300 && (
        <span className={s.Card__hit}>Хит</span>
      )}
    </div>
  );
};

export default React.memo(CardImage);
