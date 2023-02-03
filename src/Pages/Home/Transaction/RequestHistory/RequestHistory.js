import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RequestHistory = () => {
  const linkRoutes = [
    { path: "/", name: "ETH Transaction History" },
    { path: "/h2", name: "TestLink Transaction History" },
  ];
  const routes = (
    <>
      {linkRoutes.map((route, i) => (
        <li key={i} className="text-decoration-none mt-2 mb-3">
          <NavLink
            to={route.path}
            className={({ isActive }) =>
              isActive
                ? "text-decoration-none  py-2 px-3 me-2 bg-blue fs-6 text-white rounded-1"
                : "text-decoration-none  py-2 px-3 me-2 bg-blue-10 fs-6 text-black rounded-1"
            }
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </>
  );
  return (
    <div className="mt-4 col-md-6">
      <h6 className="fw-bold ">Request History</h6>
      <ul className="p-0 list-style-none d-flex flex-wrap">{routes}</ul>
      <Outlet></Outlet>
    </div>
  );
};

export default RequestHistory;
