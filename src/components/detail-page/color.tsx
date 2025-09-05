import { useState, type FC } from "react";
import type { Shoe } from "../../types";
import { colors } from "../../utils/constants";

interface ColorProps {
  item: Shoe;
}

const Color: FC<ColorProps> = ({ item }) => {
  const [selected, setSelected] = useState<string>("");
  const toggle = (id: string) => {
    setSelected(selected === id ? "" : id);
  };
  return (
    <div>
      <h2 className="font-semibold mb-3">Renk Seçiniz</h2>
      <div className="flex gap-4">
        {item.color.split(",").map((id) => {
          //ekrana basılan rengin kodunu bul
          const color = colors.find((i) => i.id === id);
          //ekrana basılan resk seçili mi ?
          const isSelected = selected === id;
          return (
            <div key={id}>
              <button
                onClick={() => toggle(id)}
                style={{ backgroundColor: color?.code }}
                className={`size-7 rounded-full cursor-pointer ${
                  isSelected ? "ring-2 ring-my-blue ring-offset-2" : ""
                }`}
              ></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
