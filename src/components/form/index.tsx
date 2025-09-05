import type { FC } from "react";
import Input from "../input";
import type { Shoe, ShoeData } from "../../types";

interface FormProps {
  handleAction: (data: ShoeData) => void;
  shoeData?: Shoe;
}
type ShoeFormData = Omit<ShoeData, "isNew"> & { isNew?: "on" | boolean };

const Form: FC<FormProps> = ({ handleAction, shoeData }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const shoeData = Object.fromEntries(formData.entries());
    const shoe = shoeData as unknown as ShoeFormData;
    shoe.isNew = shoe.isNew === "on";

    handleAction(shoeData as unknown as ShoeData);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
      <Input label="Ürün Adı" name="name" defaultValue={shoeData?.name} />
      <Input
        label="Fiyat"
        name="price"
        type="number"
        defaultValue={shoeData?.price?.toString() ?? ""}
      />
      <Input
        label="İndirim"
        name="discount"
        type="number"
        defaultValue={shoeData?.discount?.toString() ?? ""}
      />
      <Input
        label="Renkler"
        name="color"
        type="string"
        defaultValue={shoeData?.color}
      />
      <Input
        label="Boyutlar"
        name="size"
        type="string"
        defaultValue={shoeData?.size}
      />
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-900"
        >
          Açıklama
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={shoeData?.description}
          className="block p-2.5 mt-2 w-full min-h-[100px] max-h-[300px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        ></textarea>
      </div>
      <div className="flex items-center ">
        <input
          id="isNew"
          type="checkbox"
          defaultChecked={shoeData?.isNew}
          name="isNew"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500   "
        />
        <label
          htmlFor="isNew"
          className="ms-2 text-sm font-medium text-gray-900 "
        >
          Yeni
        </label>
      </div>
      <div className="flex items-center ">
        <input
          id="men"
          type="radio"
          value="men"
          name="gender"
          defaultChecked={shoeData?.gender === "men"}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500   "
        />
        <label
          htmlFor="men"
          className="ms-2 text-sm me-5 font-medium text-gray-900  "
        >
          Erkek
        </label>
        <input
          id="women"
          type="radio"
          value="women"
          name="gender"
          defaultChecked={shoeData?.gender === "women"}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500   "
        />
        <label
          htmlFor="women"
          className="ms-2 text-sm font-medium text-gray-900 "
        >
          Kadın
        </label>
      </div>
      <button className="bg-my-blue py-1 px-4 rounded-md text-white transition hover:bg-my-blue/80 cursor-pointer">
        {shoeData ? "Kaydet" : "Oluştur"}
      </button>
    </form>
  );
};

export default Form;
