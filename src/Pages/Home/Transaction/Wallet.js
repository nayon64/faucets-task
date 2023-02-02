import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

// reCaptcha site key
const siteKey = process.env.REACT_APP_apiKey;

const Wallet = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [reCaptchaValue, setReCaptchaValue] = useState(true);
  const captchaRef= useRef()

  // check recaptche 
  const onChange = (value) => {
    console.log(value);
    setReCaptchaValue(false);
  };

  // handle amount submit 
  const submit = (data) => {
    console.log(data)
    captchaRef.current.reset()
    toast.success("successfull submit")
    reset()
  }

  return (
    <section className="col-md-6">
      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-3 mt-2">
          <label className="form-label mb-1 text-purple fw-bold ">
            Wallet address
          </label>
          <input
            {...register("wallet", { required: "Please Enter Wallet Address" })}
            type="text"
            className="d-block w-100 border p-2 rounded-1 input-outline-none"
            placeholder="Your Wallet Address..."
          />
        </div>
        {errors.wallet && (
          <p className="text-danger">{errors.wallet?.message}</p>
        )}
        <div className="mb-3 mt-2">
          <label className="form-label mb-1 text-purple fw-bold ">
            Request Type
          </label>
          <div className="row">
            <div className="col">
              <input
                className="form-control"
                type="text"
                placeholder="20 Test Link"
                aria-label="Disabled input example"
                disabled
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                type="text"
                placeholder="0.5 ETH"
                aria-label="Disabled input example"
                disabled
              />
            </div>
          </div>
        </div>
        <div className="my-3">
          <ReCAPTCHA ref={captchaRef} sitekey={siteKey} onChange={onChange} />
        </div>
        <button
          className={`bg-purple border-0 py-1 px-3 text-white rounded-1 ${
            reCaptchaValue ? "disable" : ""
          }`}
          disabled={reCaptchaValue}
        >
          Send Request
        </button>
      </form>
    </section>
  );
};

export default Wallet;
