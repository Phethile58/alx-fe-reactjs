import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    alert("Form submitted successfully with Formik!");
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Formik Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label className="block mb-1">Username</label>
            <Field
              type="text"
              name="username"
              className="w-full border px-3 py-2 rounded"
            />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full border px-3 py-2 rounded"
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full border px-3 py-2 rounded"
            />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
