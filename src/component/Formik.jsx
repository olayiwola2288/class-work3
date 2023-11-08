import React from "react";
import { useFormik } from "formik";
// import * as yup from "yup";
import axios from "axios";

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios.post("http://localhost:3000/user/register", userDetails);
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (formik.values.firstName === "") {
        errors.firstName = "Require";
      }
      if (formik.values.lastName === "") {
        errors.lastName = "Require";
      }
      if (formik.values.email === "") {
        errors.email = "Require ";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (formik.values.password === "") {
        errors.password = "Require";
      } else if (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      ) {
        errors.password = "not strong well";
      }
      return errors;
    },
    // validationSchema: yup.object({
    //   firstName: yup.string().required("this field  is required"),
    //   lastNames: yup.string().required("this field  is required"),
    // }),
  });

  //   console.log(formik.values);
  return (
    <div className="flex flex-col items-center justify-center bg-white-500 my-5 ">
      <form onSubmit={formik.handleSubmit}>
        <span className="shadow px-5 bg-gray-200 rounded flex flex-col items-center justify-center">
          <div className="py-2">
            <input
              type="text"
              className="border border-black rounded bg-white-200 px-5 py-2"
              placeholder="First Name"
              onChange={formik.handleChange}
              name="firstName"
            />{" "}
          </div>
          <small className="">{formik.errors.firstName}</small>
          <div className="py-2">
            <input
              type="text"
              className="border border-black rounded bg-white-200  px-5 py-2"
              placeholder="Last Name"
              onChange={formik.handleChange}
              name="lastName"
            />
          </div>
          <small>{formik.errors.lastName}</small>

          <div className="py-2">
            <input
              type="email"
              className="border border-black rounded bg-white-200 px-5 py-2"
              placeholder="Email"
              onChange={formik.handleChange}
              name="email"
            />
          </div>
          <small>{formik.errors.email}</small>
          <div className="py-2">
            <input
              type="password"
              className="border border-black rounded bg-white-200 px-5 py-2"
              placeholder="Note:-the password most have Minimum eight characters, at least one letter, one number and one special character:

              "
              onChange={formik.handleChange}
              name="password"
            />
          </div>
          <small>{formik.errors.password}</small>
          <div className="py-2">
            <button
              type="submit"
              className="bg-blue-600 py-3 px-5 rounded text-white"
            >
              Submit
            </button>
          </div>
        </span>
      </form>
    </div>
  );
};

export default Formik;
