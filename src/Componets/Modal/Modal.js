import React from "react";

const Modal = () => {
  return (
    <div
      className="modal fade "
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0 px-4 pb-0">
            <h4 className="modal-title text-black" id="staticBackdropLabel">
              Connect your wallet
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="d-flex justify-content-around p-4 ">
            <div className=" col-5 bg-blue-10 p-4 d-flex flex-column align-items-center cursor-pointer" >
              <img
                className="img-fluid w-50"
                src="https://faucets1.netlify.app/static/media/MetaMask_Fox.svg.d9c41a5680a1daaae624.png"
                alt=""
              />
              <h5>MetaMask</h5>
            </div>
            <div className="col-5 bg-blue-10 p-4 d-flex flex-column align-items-center cursor-pointer">
              <img
                className="img-fluid w-50"
                src="https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg"
                alt=""
              />
              <h5>WalletConnect</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
