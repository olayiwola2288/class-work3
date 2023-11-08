// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

// let logInSlice = createSlice({
//   name: "login",
//   initialState: {
//     email: "",
//     password: "",
//   },
//   reducers: {
//     handleSubmit: (state, values) => {
//       const dispatch = useDispatch();
//       const history = useHistory();

//       axios
//         .post("http://localhost:3000/user/SignIn", values.payload)
//         .then((response) => {
//           if (response.data.status) {
//             localStorage.token = response.data.token;
//             history.push("/dashboard");
//           } else {
//             console.log("wrong credentials");
//           }
//         });
//     },
//   },
// });

// export const { handleSubmit } = logInSlice.actions;
// export default logInSlice.reducer;
