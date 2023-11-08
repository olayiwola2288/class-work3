import React, { useState } from "react";
import axios from "axios";

const Async = () => {
  const endpoint = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   const response = await axios.get(endpoint);
  //   console.log(response);
  //   setData(response.data);
  // };

  let url = "http://localhost:3000/user/register";
  const fetchData = async () => {
    axios.post(url, { firstName: "ola", lastName: "salau" });
  };

  return (
    <div>
      <button className="bg-green-300 p-4 rounded-md my-10" onClick={fetchData}>
        Fetch Data
      </button>
      {data.map((item) => [
        <h2>{item.id}</h2>,
        <h2>{item.email}</h2>,
        <h2>{item.company.name}</h2>,
      ])}
    </div>
  );
};

export default Async;
