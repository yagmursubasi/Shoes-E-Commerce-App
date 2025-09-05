import { useState, type FC } from "react";
import type { Shoe } from "../../types";
import { numbers } from "../../utils/constants";

interface SizeProps {
  item: Shoe;
}

const Size: FC<SizeProps> = ({ item }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const toggle = (size: string) => {
    setSelectedSize(selectedSize === size ? "" : size);
  };
  return (
    <div>
      <h2 className="mb-4 font-semibold">Numara Seçiniz</h2>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num) => {
          //ekrana basılan numara stokta var mı ?
          const inStock = item.size.split(",").includes(num.toString());

          //numara seçili mi ?
          const isSelected = selectedSize === num.toString();
          return (
            <button
              onClick={() => toggle(num.toString())}
              disabled={!inStock}
              type="button"
              key={num}
              className={`text-center border border-gray-300 rounded-md px-4 py-2 mr-2 mb-2 hover:bg-zinc-400 cursor-pointer transition disabled:cursor-not-allowed disabled:bg-[#D2D1D3] disabled:text-[#8F8C91]  ${
                isSelected ? "bg-black text-white" : "bg-white"
              }`}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
