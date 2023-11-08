import React, { useState } from "react";
import axios from "axios";

const AsyncAss = () => {
  const mainePoint = "https://api.github.com/users";
  const [user, setUser] = useState([]);

  const myData = async () => {
    const response = await axios.get(mainePoint);
    setUser(response.data); // Use response.data instead of response.user
  };

  return (
    <div className="mx-auto">
      <div className="row mx-auto">
        <div className="col-12">
          <div className="col-lg-3 col-6">
            {user.map((item) => [
              <div className="card d-flex" style={{ width: "18rem" }}>
                <img src={item.avatar_url} alt="avatar" />
                <h2 className="text-center pt-3">{item.login}</h2>
                <h2 className="text-center">{item.id}</h2>
                <h2 className="text-center pb-5">{item.url}</h2>
              </div>,
            ])}
          </div>
        </div>
      </div>
      <button className="bg-green-300 p-4 rounded-md my-10" onClick={myData}>
        get user info
      </button>
    </div>
  );
};

export default AsyncAss;
