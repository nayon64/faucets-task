import React from "react";
import WarningIcon from "../../../assets/icons/warning.png";
import RequestHistory from "./RequestHistory/RequestHistory";
import Wallet from "./Wallet";

const Transaction = () => {
  return (
    <section className="bg-white p-4">
      <div className="d-flex bg-blue-10 p-2">
        <img className="nav-icon" src={WarningIcon} alt="warning sign" />
        <p className="pb-0 mb-0 ms-2">
          Your wallet is connected to
          <span className=" fw-bold"> POA Network Sokol</span>, so you are
          requesting
          <span className=" fw-bold"> POA Network Sokol</span> Link/ETH.
        </p>
      </div>
      <Wallet />
      <RequestHistory />
    </section>
  );
};

export default Transaction;
