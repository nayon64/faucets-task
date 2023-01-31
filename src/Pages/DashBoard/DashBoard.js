import axios from "axios";
import React, { useEffect, useState } from "react";

const DashBoard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
	
  return (
    <section>
		  <div className="table-responsive container-xxl bg-white py-5">
			  <h1 className="text-center mb-5">Website Users</h1>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Si</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">User Id</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th scope="row">{i + 1}</th>
                <td>{user?.fullName}</td>
                <td>{user?.email}</td>
                <td>{user?._id}</td>
                <td>{user?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashBoard;
