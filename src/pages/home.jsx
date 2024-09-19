import React, { useEffect, useState } from "react";
import Navbar from "./../components/navbar";
import Footer from './../components/footer';
import Sidebar from './../components/sidebar';
import axios from "axios";



const home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   useEffect(() => {
    // Fetching data with Axios
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch((error) => {
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
        <Sidebar/>
      <Navbar />
      <h1 className="mb-4 mt-4">Dashboard</h1>
        <div className="row">
            {/* Card 1 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card  text-black">
                <div className="card-body">
                  <h5 className="card-title">Total Users</h5>
                  <h2 className="card-text">1,250</h2>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span>View Details</span>
                  <i className="fas fa-users"></i>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card  text-black">
                <div className="card-body">
                  <h5 className="card-title">Sales</h5>
                  <h2 className="card-text">$24,000</h2>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span>View Details</span>
                  <i className="fas fa-dollar-sign"></i>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card  text-black">
                <div className="card-body">
                  <h5 className="card-title">New Orders</h5>
                  <h2 className="card-text">45</h2>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span>View Details</span>
                  <i className="fas fa-shopping-cart"></i>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card  text-black">
                <div className="card-body">
                  <h5 className="card-title">Tasks</h5>
                  <h2 className="card-text">18</h2>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span>View Details</span>
                  <i className="fas fa-tasks"></i>
                </div>
              </div>
            </div>
          </div>
           <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Surname</th>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Job Title</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.company.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      <Footer/>
    </div>
  );
};

export default home;
