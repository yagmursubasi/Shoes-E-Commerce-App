import type { FC } from "react";
import type { Shoe } from "../../types";

interface BadgeProps {
  item: Shoe;
}

const Badge: FC<BadgeProps> = ({ item }) => {
  return (
    (item.discount || item.isNew) && (
      <span
        className={`absolute text-white rounded rounded-tl-[12px] rounded-br-[12px] lg:rounded-tl-[24px] lg:rounded-br-[24px] px-2 py-1 lg:px-4 lg:lg:py-3 ${
          item.discount ? "bg-my-yellow" : "bg-my-blue"
        }`}
      >
        {item.discount ? `%${item.discount} İndirim` : "Yeni"}
      </span>
    )
  );
};

export default Badge;
