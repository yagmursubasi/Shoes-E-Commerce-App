import type { FC } from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="flex flex-col h-screen p-5 bg-gray">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
