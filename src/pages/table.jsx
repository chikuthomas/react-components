import React, { useEffect, useState } from "react";
import Navbar from "./../components/navbar";
import axios from "axios";

const table = () => {

   // Step 1: Add state for sorting

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

    // Sorting state
    const [sortConfig, setSortConfig] = useState({ key: 'firstName', direction: 'ascending' });

      // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Step 2: Sorting function
  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });


    // Filtered users based on search term
  const filteredUsers = sortedUsers.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.age.toString().includes(searchTerm) ||
      user.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Step 3: Click handler to change sort configuration
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <Navbar />
      <h1 className="mb-4 mt-4">Table Operations</h1>
 <div>
    {/* Search Input */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            {/* Step 4: Add click events for sorting */}
            <th onClick={() => requestSort('firstName')}>
              Firstname {sortConfig.key === 'firstName' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
            </th>
            <th onClick={() => requestSort('lastName')}>
              Surname {sortConfig.key === 'lastName' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
            </th>
            <th onClick={() => requestSort('age')}>
              Age {sortConfig.key === 'age' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
            </th>
            <th onClick={() => requestSort('gender')}>
              Sex {sortConfig.key === 'gender' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
            </th>
            <th onClick={() => requestSort('company.title')}>
              Job Title {sortConfig.key === 'company.title' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
         <tbody>
          {/* Display filtered users */}
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.company.title}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No results found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default table;
