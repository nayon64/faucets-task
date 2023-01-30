import React from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <div className="col-md-4 bg-white mx-auto p-4">
        <h3 className="text-center">Login</h3>
        <form>
          <div class="mb-3">
            <label class="fw-bold mb-1">Email </label>
            <input
              type="email"
              class="d-block input-outline-none w-100 border-bottom border-top-0 border-start-0 border-end-0 pb-1"
              placeholder="Enter Your Email"
            />
          </div>
          <div class="mb-3">
            <label class="fw-bold mb-1">Password</label>
            <input
              type="password"
              class="d-block input-outline-none w-100 border-bottom border-top-0 border-start-0 border-end-0 pb-1"
              placeholder="Enter Your Password"
            />
          </div>
          <input
            className="d-block w-100 border-0 bg-purple py-2  rounded-1 text-white fw-bold"
            type="submit"
            value="Login"
          />
        </form>
        <div className="d-flex justify-content-center mt-4">
          <p>Don't have an account? </p>{" "}
          <Link
            className="text-decoration-none text-purple fw-bold ms-1"
            to="/register"
          >
            {" "}
            Singup
          </Link>
        </div>
        <p className="text-center fw-bold">Or</p>
        <div className="col-md-3 mx-auto d-flex justify-content-around">
          <FaGoogle className="fs-5 cursor-pointer" />
          <FaFacebook className="fs-5 cursor-pointer" />
          <FaInstagram className="fs-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
