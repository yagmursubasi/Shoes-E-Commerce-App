import type { FC } from "react";
import type { Shoe } from "../../types";
import { Link } from "react-router-dom";
import Price from "./price";
import Badge from "./badge";

interface CardProps {
  item: Shoe;
}

const Card: FC<CardProps> = ({ item }) => {
  return (
    <div className="flex flex-col justify-between h-full w-full bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow p-2">
      <div className="flex flex-col flex-1">
        <div className="relative">
          <Badge item={item} />
          <img
            src={item.picture[0]}
            alt={item.name}
            className="rounded-3xl aspect-[9/10] w-full object-cover"
          />
        </div>
        <h2 className="text-md font-bold line-clamp-2 my-4 lg:text-[16px] xl:text-[18px]">
          {item.name}
        </h2>
      </div>
      <Link
        to={`/shoe/${item._id}`}
        className="bg-dark-gray hover:bg-black text-white font-medium py-2 px-4 rounded-[8px] transition text-center flex items-center justify-center gap-1"
      >
        Detay - <Price item={item} />
      </Link>
    </div>
  );
};

export default Card;
