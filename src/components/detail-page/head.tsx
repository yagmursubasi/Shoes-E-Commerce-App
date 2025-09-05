import type { FC } from "react";
import type { Shoe } from "../../types";
import Badge from "../card/badge";

interface HeadProps {
  item: Shoe;
}

const Head: FC<HeadProps> = ({ item }) => {
  let price = item.price;
  if (item.discount) {
    price = (price * (100 - item.discount)) / 100;
  }
  return (
    <div className="relative">
      <div className="sticky top-0 z-10">
        <Badge item={item} />
      </div>

      <h1 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] mt-[55px]">
        {item.name}{" "}
      </h1>
      <p className="text-[20px] md:text-[24px] lg:text-[28px]  mt-2">
        <span className="text-my-blue">${price} </span>
        {item.discount && (
          <span className="text-gray-500 line-through ml-2">${item.price}</span>
        )}
      </p>
    </div>
  );
};

export default Head;
