import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../client";

const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // handle email and password singup
  const handleEmailPasswordSingUp = async (fromvalue) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: fromvalue.email,
        password: fromvalue.password,
        options: {
          data: {
            first_name: fromvalue.fullName,
          },
        },
      });
      const user = {
        email: fromvalue.email,
        fullName: fromvalue.fullName,
        role: "user",
      };
      console.log(data);
      axios
        .post("https://faucets-task-server.vercel.app/user", user)
        .then((res) => {
          if (res.data.acknowledged) {
            if (res.data.message === "Your account was created.") {
              toast.error("Your account was created.");
            } else {
              reset();
              toast.success("Check your email for varification link!");
            }
          }
        });
    } catch (error) {
      toast.error(error);
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
      } else {
        toast.error(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle github login
  const gitHubLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });
      if (error) {
        toast.error(error);
      }
      console.log(data);
      toast.success("LogIn Successfull!");
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="px-3">
      <div className="col-md-5 col-lg-4 bg-white mx-auto p-4">
        <h3 className="text-center">Sing Up</h3>
        <form onSubmit={handleSubmit(handleEmailPasswordSingUp)}>
          <div className="mt-2">
            <label className="fw-bold mb-1">Full Name </label>
            <input
              type="text"
              {...register("fullName", {
                required: "Please Enter You Full Name",
              })}
              className="d-block input-outline-none w-100 border-bottom border-top-0 border-start-0 border-end-0 pb-1"
              placeholder="Enter Your Full Name"
            />
          </div>
          {errors.fullName && (
            <p className="text-danger">{errors.fullName?.message}</p>
          )}
          <div className="mt-2">
            <label className="fw-bold mb-1">Email </label>
            <input
              type="email"
              {...register("email", { required: "Please Enter Your Email" })}
              className="d-block input-outline-none w-100 border-bottom border-top-0 border-start-0 border-end-0 pb-1"
              placeholder="Enter Your Email"
            />
          </div>
          {errors.email && (
            <p className="text-danger">{errors.email?.message}</p>
          )}
          <div className="mt-2">
            <label className="fw-bold mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Please Enter Your Password.",
                minLength: {
                  value: 6,
                  message: "min length is 6",
                },
              })}
              className="d-block input-outline-none w-100 border-bottom border-top-0 border-start-0 border-end-0 pb-1"
              placeholder="Enter Your Password"
            />
          </div>
          {errors.password && (
            <p className="text-danger">{errors.password?.message}</p>
          )}
          <input
            className="d-block w-100 border-0 bg-purple py-2 mt-3  rounded-1 text-white fw-bold"
            type="submit"
            value="Sing Up"
          />
        </form>
        <div className="d-flex justify-content-center mt-4">
          <p>Already have an account? </p>{" "}
          <Link
            className="text-decoration-none text-purple fw-bold ms-1"
            to="/login"
          >
            {" "}
            Login
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

export default Register;
