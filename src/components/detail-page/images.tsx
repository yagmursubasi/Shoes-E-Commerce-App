import type { FC } from "react";
import type { Shoe } from "../../types";

interface ImagesProps {
  item: Shoe;
}

const Images: FC<ImagesProps> = ({ item }) => {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-[48px] h-fit ">
      {item.picture.map((url, key) => (
        <img
          key={key}
          src={url}
          alt={item.name}
          // className="w-full h-full object-cover "
        />
      ))}
    </div>
  );
};

export default Images;
