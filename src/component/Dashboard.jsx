import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "https://nodeclass2.onrender.com/user/dashboard";
        let token = localStorage.token;

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        setUser(response.data.user);
        setLoading(false);
      } catch (error) {
        // Handle error here
        console.error(error);
        setLoading(false);
        setError(
          error.response ? error.response.data.error : "An error occurred"
        );
        if (error.response && error.response.status === 401) {
          navigate("/signIn");
        }
      }
    };

    fetchData();
  }, [navigate]);
  return (
    <div className="flex flex-col items-center justify-center bg-white-500 mt-10">
      {loading ? (
        // Display loading spinner here
        <div>
          <div className="flex items-center justify-center h-screen" disabled>
            <div className="animate-spin h-40 w-40 border-t-4 border-[#111130] rounded-full">
              {/* <!-- ... --> */}
            </div>
          </div>
        </div>
      ) : error ? (
        // Display error message here
        <p>Error: {error}</p>
      ) : user ? (
        // Display user data here
        <div>
          <h1 className="text-center font-bold">Dashboard</h1>
          <div>
            <h2>User Details</h2>
            <p>Duration: You have {user.exp} microsecond</p>
            <p>Email: {user.email}</p>
          </div>
        </div>
      ) : (
        // Display a message when there is no user data
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Dashboard;
