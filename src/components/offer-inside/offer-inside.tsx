import React, {FC} from "react";

type TInsideProps = {
  inside: string[]
}

const Inside: FC<TInsideProps> = ({inside}) => {
  return (
    <>
    {inside.map((item, i) => {
      return (
        <li className="property__inside-item" key={`${i}-${item}`}>
          {item}
        </li>);
    })}
    </>
  );
};

export default Inside;
