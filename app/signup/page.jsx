"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Input from "@/components/Input";

const Signup = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    address: Yup.string().required("Address is required"),
  });

  const onSubmit = async (values) => {
    const { auth } = await import("@/firebase-config");
    const { createUserWithEmailAndPassword, updateProfile } = await import(
      "firebase/auth"
    );
    const { db } = await import("../../firebase-config");
    const { doc, setDoc } = await import("firebase/firestore");

    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (credential && auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: fullName,
        });

        await setDoc(doc(db, "users", auth.currentUser.uid), {
          email,
          fullName,
          emailVerification,
        });
      }
    } catch (error) {
      let err;
      if (error.message === `Firebase: Error (auth/email-already-in-use).`) {
        err = "Email address already in use";
      }

      if (error.message === `Firebase: Error (auth/invalid-email).`) {
        err = "Enter a valid Email address";
      }
      if (
        error.message ===
        `Firebase: Password should be at least 6 characters (auth/weak-password).`
      ) {
        err = "Password should be at least 6 characters ";
      }

      if (err) return { Error: err, Success: false };
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
    <div className="pt-[100px] pb-[150px] w-full z-4 relative px-4">
      <div className="bg-white min-h-[300px] min-w-[300px] w-full flex flex-col">
        <h1 className="text-center text-2xl">Create Account</h1>
        <p className="text-center">
          Be the first to know about our special offers and new lookbooks.
        </p>
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

          <Input
            label="Address"
            name="address"
            type="text"
            placeholder="Address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            error={touched.address && errors?.address}
          />

          <button className="mt-5 bg-gray-900 w-full text-white py-2">
            Create Account
          </button>

          <span>
            By clicking on &apos;Create account&apos;, you accept our
            Confidentiality Policy.
          </span>
          <span className="text-[12px] mt-2 flex gap-2">
            <Link
              href="/login"
              className="text-primary hover:underline duration-200"
            >
              Log in with an existing account
            </Link>{" "}
            <span> or </span>{" "}
            <Link
              href="/"
              className="text-primary hover:underline duration-200"
            >
              Return to Store
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
