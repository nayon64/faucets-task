import React, { useContext, useEffect} from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import About from "../About/About";
import Transaction from "../Transaction/Transaction";

const Home = () => {
  const {setUser,pageLoad, setPageLoad } = useContext(AuthContext);
  useEffect(() => {
    setPageLoad(false)
    const data = JSON.parse(
      localStorage.getItem("sb-ospphfvknfcjaigezmss-auth-token")
    );
    setUser(data);
    
  }, [setUser, setPageLoad]);
  if (pageLoad) {
    return <h1>Loading...</h1>;
  }
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
