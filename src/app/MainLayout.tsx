import { type FC } from "react";
import { Footer, Header } from "../components";
import { Outlet } from "react-router";

export const MainLayout: FC = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
