"use client";

import Input from "@/components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    const { auth } = await import("@/firebase-config");
    const { signInWithEmailAndPassword } = await import("firebase/auth");
    const { email, password } = values;
    try {
      await signInWithEmailAndPassword(auth, email, password);

      if (auth.currentUser) {
      }
    } catch (error) {
      let err;
      if (error.message === `Firebase: Error (auth/user-not-found).`) {
        err = "Sorry This User Is Not Register";
      }

      if (error.message === `Firebase: Error (auth/wrong-password).`) {
        err = "Your Password Is Wrong";
      }

      if (
        error.message === `Firebase: Error (auth/invalid-login-credentials).`
      ) {
        err = " user has not been registered";
      }

      if (error.message === `Firebase: Error (auth/network-request-failed).`) {
        err = "turn on your network";
      }

      if (
        error.message ===
        `Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).`
      ) {
        err =
          "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
      }
      if (err) return { Success: false, Error: err };
    }
  };
  const { errors, touched, handleChange, handleBlur, values, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        address: "",
      },
      validationSchema,
      onSubmit,
    });

  return (
    <div className=" pt-[100px] pb-[150px]  w-full z-4 relative px-4">
      <div className="  bg-white h-[300px] min-w-[300px] w-full  flex flex-col">
        <h1 className=" text-center text-2xl">Login</h1>
        <form className="mt-10 gap-2 flex flex-col" onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Email*"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && errors?.email}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && errors?.password}
          />
          <span className=" underline text-[12px]">Forgotten Password</span>
          <button className=" mt-5 bg-gray-900 w-full text-white py-2">
            Login
          </button>
          <span className=" text-[12px] mt-2 flex gap-2">
            <span> Don&lsquo;t have an account? </span>{" "}
            <Link
              href="/signup"
              className=" text-primary hover:underline duration-200"
            >
              Sign-up here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
