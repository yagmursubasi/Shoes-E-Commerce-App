import type { FC } from "react";
import Form from "../../components/form";
import { useShoes } from "../../hooks/useShoes";
import { useNavigate } from "react-router-dom";
import type { ShoeData } from "../../types";

const Create: FC = () => {
  const navigate = useNavigate();
  const { create } = useShoes();
  const handleAction = (data: ShoeData) => {
    create.mutate(data);
    navigate("/admin");
  };
  return (
    <div className="max-w-[1000px] mx-auto ">
      <h1 className="text-2xl font-semibold md:text-3xl mb-5">Ürün Ekle</h1>
      <Form handleAction={handleAction} />
    </div>
  );
};

export default Create;
