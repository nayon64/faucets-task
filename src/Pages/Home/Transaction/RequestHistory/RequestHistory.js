import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const RequestHistory = () => {
	const linkRoutes = [
    { path: "/home/history1", name: "ETH Transaction History" },
    { path: "/home/history2", name: "TestLink Transaction History" },
	];
	const routes = (
    <>
      {linkRoutes.map((route, i) => (
        <NavLink
          key={i}
          to={route.path}
          className={({ isActive }) =>
            isActive
              ? "text-decoration-none py-2 px-3 me-2 bg-primary fs-6 text-white rounded-1"
              : "text-decoration-none py-2 px-3 me-2 bg-blue-10 fs-6 text-black rounded-1"
          }
        >
          {route.name}
        </NavLink>
      ))}
    </>
  );
	return (
    <div className='mt-4 col-md-6'>
			<h6 className='fw-bold mb-3'>Request History</h6>
			<ul className='p-0'>
				{routes}
			</ul>
			<Outlet></Outlet>
    </div>
  );
};

export default RequestHistory;