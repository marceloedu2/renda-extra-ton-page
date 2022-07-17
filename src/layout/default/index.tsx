import type { NextPage } from "next";
import Header from "./components/Header";

interface IDefaultLayout {
  children: React.ReactNode;
}

const DefaultLayout: NextPage<IDefaultLayout> = ({ children }) => {
  return (
    <div className="flex flex-col w-screen h-full min-h-screen">
      <Header />
      {children}
    </div>
  );
};

export default DefaultLayout;
