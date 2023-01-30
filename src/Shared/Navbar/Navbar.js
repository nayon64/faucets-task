import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import "../../style.css";
import WalletIcon from "../../assets/icons/wallet.png";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  console.log(user)

  return (
    <nav className="bg-light py-3">
      <div className="container-xxl d-flex align-items-center justify-content-between  mx-auto">
        <Link to="/" className="logo">
          Faucets
        </Link>
        <div className="d-flex ">
          <div className="border px-4 me-3 d-flex align-items-center justify-content-center h-full cursor-pointer">
            <img className="nav-icon" src={WalletIcon} alt="" />
            <span className="ms-2">Connect Wallet</span>
          </div>
          <div className="border px-4 me-3 d-flex align-items-center justify-content-cente h-full cursor-pointer">
            <img className="nav-icon" src={WalletIcon} alt="" />
            <span className="ms-2">Connect Wallet</span>
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
              {isAuthenticated ? (
                <>
                  <li
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                    className="px-3 cursor-pointer py-1"
                  >
                    Log Out
                  </li>
                  <li>
                    <Link to="/dashboard" className="dropdown-item" href="#">
                      DashBoard
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li
                    onClick={() => loginWithRedirect()}
                    className="px-3 cursor-pointer py-1"
                  >
                    Log In
                  </li>
                  <li className="px-3 cursor-pointer py-1">Sign Up</li>
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
    </nav>
  );
};

export default Navbar;
