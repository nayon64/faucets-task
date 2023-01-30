import React from "react";
import About from "../About/About";
import Transaction from "../Transaction/Transaction";

const Home = () => {
  return (
    <div className="bg-blue-10 pb-4">
      {/* banner section  */}
      <section className="bg-purple py-4 text-center text-white">
        <h5 className="mb-0">Notice here</h5>
      </section>
      <div className="container-xxl ">
        <About />
        <Transaction />
      </div>
    </div>
  );
};

export default Home;
