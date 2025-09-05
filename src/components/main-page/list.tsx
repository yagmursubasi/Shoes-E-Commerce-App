import type { FC } from "react";
import { useShoes } from "../../hooks/useShoes";
import Loader from "../loader";
import Error from "../error";
import Card from "../card";

const List: FC = () => {
  const { shoes } = useShoes();

  if (shoes.isLoading) return <Loader />;
  if (shoes.isError)
    return <Error message={shoes.error.message} refetch={shoes.refetch} />;
  // console.log(shoes.data);
  return (
    <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-x-4 gap-y-6 md:gap-y-8 xl:gap-y-10 items-stretch">
      {shoes.data?.map((item) => (
        <Card key={item._id} item={item} />
      ))}{" "}
    </div>
  );
};

export default List;
