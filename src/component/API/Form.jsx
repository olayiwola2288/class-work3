import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailToDelete, setEmailToDelete] = useState("");
  //   const handleFirstNameChnage = (e) => {
  //     setFirstName(e.target.value);
  //a  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    const userDetails = {
      firstName,
      lastName,
      email,
      password,
    };

    axios.post("https://nodeclass2.onrender.com/user/register", userDetails);
    console.log(userDetails);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    navigate("/SignIn");
  };

  const handleDelete = () => {
    // const email = "ade";
    console.log(emailToDelete);
    axios.post(`https://nodeclass2.onrender.com/user/delete/${emailToDelete}`);
    // console.log();
  };
  return (
    <div className="flex flex-col items-center justify-center bg-white-500 my-5 ">
      <span className="shadow px-5 bg-gray-200 rounded flex flex-col items-center justify-center">
        <h1 className="text-red-600 font-bold mt-5 ">Sign Up Page</h1>
        <div className="py-2">
          <input
            type="text"
            className="border border-black rounded bg-white-200 px-5 py-2"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="py-2">
          <input
            type="text"
            className="border border-black rounded bg-white-200  px-5 py-2"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
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
            Submit
          </button>
        </div>
        <div className="py-2">
          <input
            type="text"
            className="border border-black rounded bg-white-200 px-5 py-2"
            placeholder="email"
            onChange={(e) => setEmailToDelete(e.target.value)}
          />
        </div>
        <div className="py-2">
          <button
            onClick={handleDelete}
            className="bg-blue-600 py-3 px-5 rounded text-white"
          >
            Delete
          </button>
        </div>
      </span>
    </div>
  );
};

export default Form;
