// import "./App.css";
// import NavBar from "./component/NavBar";
// import Hero from "./component/hero";
// import Map from "./component/Map/Map";
// import Event from "./component/Event/Event";
// import Input from "./component/Event/input";
// import Async from "./component/Async/Async";
// import Api from "./component/API/Api";
// import Form from "./component/API/Form";
// // import AsyncAss from "./component/API/AsyncAss";

// function App() {
//   return (
//     <>
//       {/* <NavBar />
//       <Hero />
//       <Map /> */}
//       {/* <Event /> */}
//       <Input />
//       {/* <Async /> */}
//       {/* <Api /> */}
//       {/* <Form /> */}
//       {/* <AsyncAss /> */}
//     </>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./component/hero";
import Map from "./component/Map/Map";
import Event from "./component/Event/Event";
import Form from "./component/API/Form";
import NavBar from "./component/NavBar";
import About from "./component/About";
import SignIn from "./component/API/SignIn";
import Formik from "./component/Formik";
import Dashboard from "./component/Dashboard";

const App = () => {
  let token = localStorage.getItem("token");
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/About/:id" element={<About />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="formik" element={<Formik />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
