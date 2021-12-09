import { FC } from "react";
import { Outlet } from "react-router-dom";
// import "./Layout.scss";
interface Props {}
const Layout: FC<Props> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Layout;
