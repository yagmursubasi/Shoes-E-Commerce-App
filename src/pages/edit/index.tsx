import type { FC } from "react";
import Form from "../../components/form";
import { useShoes } from "../../hooks/useShoes";
import { useNavigate, useParams } from "react-router-dom";
import type { ShoeData } from "../../types";
import Loader from "../../components/loader";

const Edit: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { useShoe, edit } = useShoes();
  const { data, isLoading } = useShoe(id as string);
  const handleAction = (data: ShoeData) => {
    edit.mutate({ id: id as string, data });
    navigate("/admin");
  };
  if (isLoading) return <Loader />;
  return (
    <div className="max-w-[1000px] mx-auto ">
      <h1 className="text-2xl font-semibold md:text-3xl mb-5">Ürünü Düzenle</h1>

      <Form handleAction={handleAction} shoeData={data} />
    </div>
  );
};

export default Edit;
