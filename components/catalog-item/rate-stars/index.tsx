import React from "react";

type PropsType = {
  rate: number;
};

const RateStars: React.FC<PropsType> = (props) => {
  const stars = new Array(5).fill(null).map((_, i) =>
    i < Math.ceil(props.rate) ? (
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 0L8.61892 5.12352L14 5.08673L9.62155 8.21419L11.3233 13.3101L7 10.1183L2.67674 13.3101L4.37845 8.21419L0 5.08673L5.38108 5.12352L7 0Z"
          fill="#F26A61"
        />
      </svg>
    ) : (
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 0L8.61892 5.12352L14 5.08673L9.62155 8.21419L11.3233 13.3101L7 10.1183L2.67674 13.3101L4.37845 8.21419L0 5.08673L5.38108 5.12352L7 0Z"
          fill="#F5F5F5"
        />
      </svg>
    )
  );
  return <>{stars}</>;
};

export default React.memo(RateStars);
