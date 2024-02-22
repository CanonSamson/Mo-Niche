"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/Input";
import { loginWithEmailandPassword } from "./functions";
import Image from "next/image";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [logining, setLogining] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLogining(true);
    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        await loginWithEmailandPassword(formData);
      } catch (error) {
        console.log(error);
      } finally {
        setLogining(false);
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="pt-[100px] pb-[150px] w-full z-4 relative px-4">
      {logining && (
        <div className=" items-center justify-center w-full fixed h-screen bg-white/20  top-0 right-0 z-[55] flex">
          <Image
            className="animate-pulse"
            src="/loading-logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      )}
      <div className="bg-white h-[300px] min-w-[300px] w-full flex flex-col">
        <h1 className="text-center text-2xl">Login</h1>
        <form className="mt-10 gap-2 flex flex-col" onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Email*"
            onChange={handleChange}
            value={formData.email}
            error={touched.email && errors.email}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            error={touched.password && errors.password}
          />
          <span className="underline text-[12px]">Forgotten Password</span>
          <button
            disabled={logining}
            className="mt-5 bg-gray-900 w-full text-white py-2"
          >
            Login
          </button>{" "}
          <span className="text-[12px] mt-2 flex gap-2">
            <span> Don't have an account? </span>{" "}
            <Link
              href="/signup"
              className="text-primary hover:underline duration-200"
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
