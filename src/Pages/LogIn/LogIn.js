import React, { useContext} from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const LogIn = () => {
  const { setUser, setPageLoad } = useContext(AuthContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // handle email and password login
  const handleSingIn = async (fromValue) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: fromValue.email,
        password: fromValue.password,
      });
      console.log(data);
      console.error(error);
      if (data.user) {
        toast.success("successfully Login");
        setUser(data);
        reset();
        navigate("/");
      } else {
        toast.error("User does not match!");
      }
    } catch (error) {
      // toast.error(error);
    }
  };

  // handle google login
  const googleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      console.log(data);
      if (data) {
        localStorage.setItem("user1", JSON.stringify(data?.user));
        console.log(data);
        setPageLoad(true);
      } else {
        toast.error(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle githup login
  const gitHubLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });
      if (data) {
        localStorage.setItem("user2", JSON.stringify(data?.user));
        console.log(data);
        toast.success("LogIn Successfull!");
        //  navigate("/");
      } else {
        console.log(error);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="px-3">
      <div className="col-md-5 col-lg-4 bg-white mx-auto p-4">
        <h3 className="text-center">Login</h3>
        <form onSubmit={handleSubmit(handleSingIn)}>
          <div className="">
            <label className="fw-bold mb-1">Email </label>
            <input
              type="email"
              {...register("email", { required: "Please Enter your Email" })}
              className="d-block input-outline-none w-100 border-bottom border-top-0 border-start-0 border-end-0 pb-1"
              placeholder="Enter Your Email"
            />
          </div>
          {errors.email && (
            <p className="text-danger">{errors.email?.message}</p>
          )}
          <div className="mt-3">
            <label className="fw-bold mb-1">Password</label>
            <input
              {...register("password", {
                required: "Please Enter Your Password",
              })}
              type="password"
              className="d-block input-outline-none w-100 border-bottom border-top-0 border-start-0 border-end-0 pb-1"
              placeholder="Enter Your Password"
            />
          </div>
          {errors.password && (
            <p className="text-danger">{errors.password?.message}</p>
          )}
          <input
            className="d-block w-100 border-0 bg-purple py-2 mt-3 rounded-1 text-white fw-bold"
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
        <div className="col-4 col-sm-3 mx-auto d-flex justify-content-around">
          <FaGoogle onClick={googleLogin} className="fs-5 cursor-pointer" />
          <FaGithub onClick={gitHubLogin} className="fs-5 cursor-pointer" />
          <FaInstagram className="fs-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
