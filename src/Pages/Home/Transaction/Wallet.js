import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

// reCaptcha site key
const siteKey = process.env.REACT_APP_apiKey;

const onChange = (value) => {
  console.log(value);
};

const Wallet = () => {
  return (
    <section className="col-md-6">
      <form>
        <div className="mb-3 mt-2">
          <label className="form-label mb-1 text-purple fw-bold ">
            Email address
          </label>
          <input
            type="text"
            className="d-block w-100 border p-2 rounded-1 input-outline-none"
            placeholder="Your Wallet Address..."
          />
        </div>
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
          <ReCAPTCHA sitekey={siteKey} onChange={onChange} />
        </div>
        <button className="bg-purple border-0 py-1 px-3 text-white rounded-1">
          Send Request
        </button>
      </form>
    </section>
  );
};

export default Wallet;
