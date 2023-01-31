import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import EthTransaction from "../../Pages/Home/Transaction/RequestHistory/EthTransaction/EthTransaction";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import TestLinkTransaction from "../../Pages/Home/Transaction/RequestHistory/TestLinkTransaction/TestLinkTransaction";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <EthTransaction />,
          },
          {
            path: "/h2",
            element: <TestLinkTransaction />,
          },
        ],
      },
      {
        path: "/faq",
        element: <FAQ/>,
      },
      {
        path: "/login",
        element: <LogIn/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/dashboard",
        element: <DashBoard/>,
      },
    ],
  },
]);

export default routes;