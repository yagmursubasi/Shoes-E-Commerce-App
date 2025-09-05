import type { FC } from "react";
import type { Shoe } from "../../types";

interface PriceProps {
  item: Shoe;
}

const Price: FC<PriceProps> = ({ item }) => {
  let price = item.price;
  if (item.discount) {
    price = (item.price * (100 - item.discount)) / 100;
  }
  return (
    <div className={item.discount ? "text-my-yellow" : "text-white"}>
      ${price}{" "}
    </div>
  );
};

export default Price;
