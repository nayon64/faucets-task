import React from "react";

const Wallet = () => {
  return (
    <section className="col-md-6">
      <form>
        <div className="mb-3 mt-2">
          <label
            for="exampleFormControlInput1"
            className="form-label mb-1 text-purple fw-bold "
          >
            Email address
          </label>
          <input
            type="text"
            className="d-block w-100 border p-2 rounded-1 input-outline-none"
            id="exampleFormControlInput1"
            placeholder="Your Wallet Address..."
          />
        </div>
        <div className="mb-3 mt-2">
          <label
            for="exampleFormControlInput1"
            className="form-label mb-1 text-purple fw-bold "
          >
            Request Type
          </label>
          <div class="row">
            <div class="col">
              <input
                class="form-control"
                type="text"
                placeholder="20 Test Link"
                aria-label="Disabled input example"
                disabled
              />
            </div>
            <div class="col">
              <input
                class="form-control"
                type="text"
                placeholder="0.5 ETH"
                aria-label="Disabled input example"
                disabled
              />
            </div>
          </div>
			  </div>
			  <button className="bg-purple border-0 py-1 px-3 text-white rounded-1">Send Request</button>
      </form>
    </section>
  );
};

export default Wallet;
