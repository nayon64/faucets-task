import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import EthTransaction from "../../Pages/EthTransaction/EthTransaction";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/Register/Register";
import TestLinkTransaction from "../../Pages/TestLinkTransaction/TestLinkTransaction";

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
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/faq",
        element: <FAQ/>,
      },
    ],
  },
]);

export default routes;