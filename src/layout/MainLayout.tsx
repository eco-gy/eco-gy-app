import { FC } from "react";
import { ColorModeSwitcher } from "../components/common/ColorModeSwitcher";
import { Outlet } from "react-router-dom";
const MainLayout: FC = () => {
  return (
    <>
      <ColorModeSwitcher />
      <Outlet />
    </>
  );
};
export default MainLayout;
