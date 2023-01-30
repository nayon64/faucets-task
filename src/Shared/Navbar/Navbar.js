import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import "../../style.css"
import WalletIcon from "../../assets/icons/wallet.png"

const Navbar = () => {
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
          <div class="dropdown">
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
              class="dropdown-menu dropdown-menu-end mt-1 rounded-1 border-0"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <Link to="/login" class="dropdown-item" href="#">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/register" class="dropdown-item" href="#">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/faq" class="dropdown-item" href="#">
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
