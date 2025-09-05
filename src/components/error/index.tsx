import type { FC } from "react";

interface ErrorProps {
  message: string;
  refetch?: () => void;
}

const Error: FC<ErrorProps> = ({ message, refetch }) => {
  return (
    <div className="my-30 flex flex-col gap-4 items-center">
      <div className="text-center bg-red-400 text-white rounded-md p-5 ">
        <h2 className="font-semibold">Üzgünüz bir sorun oluştu :( </h2>
        <p className=" mt-4">{message} </p>
      </div>
      {refetch && (
        <div className="flex justify-center">
          <button
            onClick={refetch}
            className=" mt-5 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition cursor-pointer"
          >
            Tekrar Dene
          </button>
        </div>
      )}
    </div>
  );
};

export default Error;
