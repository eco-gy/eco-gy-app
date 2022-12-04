import { FC } from "react";
import { Outlet } from "react-router-dom";
import UserAvatar from "../components/common/UserAvatar";

const MainLayout: FC = () => {
  return (
    <>
      <UserAvatar />
      <Outlet />
    </>
  );
};
export default MainLayout;
