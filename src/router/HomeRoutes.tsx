import { Home } from "../coponents/pages/Home";
import { UserManagement } from "../coponents/pages/UserManagement";
import { Setting } from "../coponents/pages/Setting";
import { Page404 } from "../coponents/pages/Page404";

export const homeRouter = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
