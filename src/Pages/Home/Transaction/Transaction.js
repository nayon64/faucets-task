import React, { useContext } from "react";
import WarningIcon from "../../../assets/icons/warning.png";
import { DataContext } from "../../../Context/DataProvider/DataProvider";
import RequestHistory from "./RequestHistory/RequestHistory";
import Wallet from "./Wallet";

const Transaction = () => {

  const {currency}=useContext(DataContext)

  return (
    <section className="bg-white p-4">
      <div className="d-flex bg-blue-10 p-2">
        <div >
          <img className="nav-icon " src={WarningIcon} alt="warning sign" />
        </div>
        <p className="pb-0 mb-0 ms-2">
          Your wallet is connected to
          <span className=" fw-bold"> {currency?.title} </span>, so you are
          requesting
          <span className=" fw-bold"> {currency?.title} </span> Link/ETH.
        </p>
      </div>
      <Wallet />
      <RequestHistory />
    </section>
  );
};

export default Transaction;
