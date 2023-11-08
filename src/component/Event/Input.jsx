import React, { useState } from "react";

const Input = () => {
  const [name, setName] = useState("sera");
  const [userName, setUserName] = useState("");

  const changeName = () => {
    setName(userName);
    setUserName(userName);
  };

  return (
    <div>
      <h1 className="text-4xl">{name}</h1>
      <input
        type="text"
        className="border-2 p-4 border-black"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        className="rounded-md bg-yellow-300 p-2 px-4"
        onClick={changeName}
      >
        ChangeName
      </button>
    </div>
  );
};

export default Input;
