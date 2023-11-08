// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../Redux/Counter";

function Event() {
  //   const [name, setName] = useState("sera");
  //   const [userName, setUserName] = useState("");
  //   const [num, setNum] = useState(0);

  //   const changeName = () => {
  //     setName(userName);
  //     console.log(name);
  //   };

  //   const changeNumber = () => {
  //     setNum(num + 1);
  //   };
  //   const deleteNumber = () => {
  //     if (num) {
  //       setNum(num - 1);
  //     }
  //   };

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    // <>
    //   {" "}
    //   <div>
    //     <h1 className="px-8 text-4xl">{name}</h1>
    //     <button
    //       className="rounded-md bg-yellow-300 p-2 px-3"
    //       onClick={changeName}
    //     >
    //       change name
    //     </button>
    //   </div>
    //   <h1 className="flex item-center justify-center ">{num}</h1>
    //   <div className="flex item-center justify-center ">
    //     <button className=" rounded-md bg-blue-300 p-2 " onClick={changeNumber}>
    //       change number
    //     </button>
    //     <button
    //       className="bg-red-300 p-2 rounded-md mx-2"
    //       onClick={deleteNumber}
    //     >
    //       delete number
    //     </button>
    //   </div>
    <div>
      <h1 className="flex justify-center item-center my-5">{count}</h1>
      <div className="flex item-center justify-center">
        <button
          className="bg-green-500 text-white rounded-md px-4 py-3 mx-5"
          onClick={() => dispatch(increment())}
        >
          {" "}
          increment
        </button>
        <button
          className="bg-green-500 text-white rounded-md px-4 py-3 mx-5"
          onClick={() => dispatch(decrement())}
        >
          {" "}
          decrement
        </button>

        <button
          className="bg-green-500 text-white rounded-md px-4 py-3 mx-5"
          onClick={() => dispatch(incrementByAmount(20))}
        >
          {" "}
          decrement by 20
        </button>
      </div>
    </div>
    // </>
  );
}
export default Event;
