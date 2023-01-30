import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import "../../style.css"
import WalletIcon from "../../assets/icons/wallet.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light px-4 py-3">
      <div className="container-fluid">
        <Link to="/" className="logo">
          Faucets
        </Link>
        <div className="d-flex">
          <div className="border px-4 me-3 d-flex align-items-center justify-content-cente h-full cursor-pointer">
            <img className="nav-icon" src={WalletIcon} alt="" />
            <span className="ms-2">Connect Wallet</span>
          </div>
          <div className="border px-4 me-3 d-flex align-items-center justify-content-cente h-full cursor-pointer">
            <img className="nav-icon" src={WalletIcon} alt="" />
            <span className="ms-2">Connect Wallet</span>
          </div>
          <div className="bg-gray p-2 cursor-pointer rounded-circle">
            <FaRegUserCircle className="fs-2" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
