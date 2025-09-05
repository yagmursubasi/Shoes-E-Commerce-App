import type { FC } from "react";

import { Link } from "react-router-dom";
import UserInfo from "./user-info";

const Header: FC = () => {
  return (
    <div className="grid grid-cols-3 items-center bg-fa-white p-4 md:p-5 lg:p-6 xl:p-8 text-dark-gray rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[24px] mb-6 md:mb-10 lg:mb-15 xl:mb-20 ">
      <nav className="flex gap-10 font-semibold max-lg:hidden">
        <a href="">Yeni Kolleksiyon 🔥 </a>
        <a href="">Erkek</a>
        <a href="">Kadın</a>
      </nav>
      <button className="lg:hidden">
        <img src="/hamburger.svg" alt="" />
      </button>

      <Link to="/" className="flex justify-center">
        <img src="/logo.svg" alt="logo" />
      </Link>
      <UserInfo />
    </div>
  );
};

export default Header;
