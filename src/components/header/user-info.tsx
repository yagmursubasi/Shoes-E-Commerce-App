import { useEffect, useRef, useState, type FC } from "react";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";

const UserInfo: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { logout } = useAuth();
  //dışarıya tıklanınca dropdown'ı kapat
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative flex justify-end " ref={dropDownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center  gap-2 cursor-pointer"
      >
        <img src="/user.svg" />
        <p className="font-semibold text-sm  md:text-base max-md:hidden">
          {user?.firstName} {user?.lastName}
        </p>
      </button>
      {isOpen && (
        <div className=" absolute flex flex-col -right-4  bg-fa-white  shadow-md z-50 rounded-md mt-10 items-start ">
          <button className="font-semibold p-3 px-6 hover:bg-gray-300/50 border-b border-zinc-200 w-full md:hidden">
            {user?.firstName} {user?.lastName}
          </button>
          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="p-3 px-6 hover:bg-gray-300/50 border-b border-zinc-200 w-full"
            >
              Admin Paneli
            </Link>
          )}
          <button
            onClick={() => logout.mutate()}
            className="p-3 px-6 hover:bg-gray-300/50 cursor-pointer w-full text-start"
          >
            Çıkış Yap
          </button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
