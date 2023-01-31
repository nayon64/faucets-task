import React, { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import WalletIcon from "../../assets/icons/wallet.png";
import Modal from "../../Componets/Modal/Modal";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { DataContext } from "../../Context/DataProvider/DataProvider";
import "../../style.css";
import { supabase } from "../../client";

const Navbar = () => {
  const { currencies, currency, setCurrency } = useContext(DataContext);
  const { user,setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCurrency = (value) => {
    setCurrency(value);
  };

  const handleLogOut = async () => {
    localStorage.removeItem("user");
    const { error } = await supabase.auth.signOut();
    setUser(false)
    navigate("/");
  };

  return (
    <nav className="bg-light py-3">
      <div className="container-xxl d-flex align-items-center justify-content-between  mx-auto">
        <Link to="/" className="logo">
          Faucets
        </Link>
        <div className="d-flex ">
          <div className="dropdown">
            <div
              className="border px-3 px-md-4 me-3 d-flex align-items-center justify-content-center h-100 cursor-pointer"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img className="nav-icon-sm" src={currency?.img} alt="" />
              <span className="ms-2 d-none d-md-block">{currency?.title}</span>
            </div>

            <ul
              className="dropdown-menu rounded-1 mt-1 dropdown-menu-end"
              aria-labelledby="dropdownMenuLink"
            >
              {currencies.map((value) => (
                <li
                  key={value?._id}
                  onClick={() => handleCurrency(value)}
                  className="px-3 cursor-pointer py-1"
                >
                  {" "}
                  <img className="nav-icon-sm" src={value?.img} alt="" />
                  <span className="ms-2 ">{value?.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="border px-2 px-md-4 me-3 d-flex align-items-center justify-content-cente h-full cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <img className="nav-icon" src={WalletIcon} alt="" />
            <span className="ms-2 text-purple fw-bold d-none d-md-block">
              Connect Wallet
            </span>
          </div>
          <div className="dropdown">
            <div
              className="bg-gray p-2 cursor-pointer rounded-circle border-0"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaRegUserCircle className="fs-3" />
            </div>
            <ul
              className="dropdown-menu dropdown-menu-end mt-1 rounded-1 border-0"
              aria-labelledby="dropdownMenuButton1"
            >
              {user ? (
                <>
                  <li
                    onClick={handleLogOut}
                    className="px-3 cursor-pointer py-1"
                  >
                    LogOut
                  </li>
                  <li>
                    <Link to="/dashboard" className="dropdown-item" href="#">
                      DashBoard
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="dropdown-item" href="#">
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="dropdown-item" href="#">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}

              <li>
                <Link to="/faq" className="dropdown-item" href="#">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal />
    </nav>
  );
};

export default Navbar;
