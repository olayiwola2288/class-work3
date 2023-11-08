import axios from "axios";
import React from "react";
import { useState } from "react";

const Api = () => {
  const [result, setResult] = useState(null);
  console.log(result);
  const fetchData = () => {
    axios.get("http://localhost:3000/user/alluser");
  };

  const registerUser = (req, res) => {
    const user = { name: "user 1", email: "user1@gmail.com" };
    axios.post("http://localhost:3000/user/register", user);
  };
  return (
    <div className="h-[200px]">
      <h1>APi</h1>

      {result ? (
        <div>
          <p className="bg-white-200">{result.name}</p>
          <p className="bg-white-200">{result.email}</p>
        </div>
      ) : (
        "No data yet"
      )}
      <div className="my-2">
        <button onClick={fetchData} className="bg-red-500 px-3 py-2 rounded">
          Send Request
        </button>

        <button onClick={registerUser} className="bg-red-500 px-3 py-2 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Api;
