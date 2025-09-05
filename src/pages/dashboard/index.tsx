import type { FC } from "react";
import { useShoes } from "../../hooks/useShoes";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Link } from "react-router-dom";

const Dashboard: FC = () => {
  const { shoes, remove } = useShoes();
  if (shoes.isLoading) return <Loader />;
  if (shoes.isError)
    return <Error message={shoes.error.message} refetch={shoes.refetch} />;
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold md:text-3xl">Ürünler</h1>
        <Link
          to={"/admin/create"}
          className="text-white bg-my-blue hover:bg-my-blue/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 transition cursor-pointer "
        >
          Yeni Ürün Ekle
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Ürün
              </th>
              <th scope="col" className="px-6 py-3">
                Fiyat
              </th>
              <th scope="col" className="px-6 py-3">
                İndirim(%)
              </th>

              <th scope="col" className="px-6 py-3">
                Eylem
              </th>
            </tr>
          </thead>
          <tbody>
            {shoes.data?.map((item) => (
              <tr className="bg-white border-b   border-gray-200 hover:bg-gray-50 ">
                <td className="p-4">
                  <img
                    src={item.picture[0]}
                    className="w-16 md:w-28 max-w-full max-h-full rounded-xl"
                    alt={item.name}
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                  {item.name}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                  ${item.price}{" "}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    {item.discount > 0 ? `${item.discount}%` : "İndirim Yok"}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <Link
                    to={`/admin/edit/${item._id}`}
                    className="font-medium  text-blue-600  hover:underline pe-3 cursor-pointer"
                  >
                    Düzenle
                  </Link>
                  <button
                    onClick={() => remove.mutate(item._id)}
                    className="font-medium text-red-600  hover:underline cursor-pointer"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
