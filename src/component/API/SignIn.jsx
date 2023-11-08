import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Redux/Counter";
// import { handleSubmit } from "../../Redux/LogIng";

const Form = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const handleFirstNameChnage = (e) => {
  //   setFirstName(e.target.value);
  //   a;
  // };
  const handleSubmit = () => {
    const userDetails = {
      email,
      password,
    };
    console.log(userDetails);

    // const handleSubmit = () => {
    axios
      .post("https://nodeclass2.onrender.com/user/SignIn", { email, password })
      .then((response) => {
        if (response.data.status) {
          localStorage.token = response.data.token;
          navigate("/dashboard");
        } else {
          console.log("wrong credentials");
        }
      });

    // };
    // setEmail("");
    // setPassword("");
  };

  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center bg-white-500 my-5 ">
      <span className="shadow px-5 bg-gray-200 rounded flex flex-col items-center justify-center">
        <h1 className="text-red-600 font-bold mt-5 ">LOG IN PAGE</h1>

        <div className="py-2">
          <input
            type="email"
            className="border border-black rounded bg-white-200 px-5 py-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="py-2">
          <input
            type="password"
            className="border border-black rounded bg-white-200 px-5 py-2"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="py-2">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 py-3 px-5 rounded text-white"
          >
            LOG IN
          </button>
        </div>
      </span>
      <div>
        {/* <h1 className="flex justify-center item-center">{count}</h1> */}

        {/* <button
          className="bg-green-500 text-white rounded-md px-4 py-3 mx-5"
          onClick={() => dispatch(handleSubmit({ email, password }))}
        >
          {" "}
          LOG IN 2
        </button> */}
      </div>
    </div>
  );
};

export default Form;
