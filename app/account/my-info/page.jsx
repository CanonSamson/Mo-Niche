"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import Link from "next/link";

const MyInfo = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(values);
    if (Object.keys(errors).length === 0) {
      // No errors, submit the form
      console.log("Form submitted:", values);
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (formData) => {
    let errors = {};

    // Example validation rules
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className=" pt-[60px] ">
      <div className="bg-gray-100 py-5 flex justify-center mb-5">
        <span className="uppercase">
          <Link href="/account">ACCOUNT</Link> / <Link href=""> My Info</Link>
        </span>
      </div>
      <h1 className=" text-2xl px-4  ">My Info</h1>

      <div className="mt-5 px-4">
        <form className=" grid gap-4" onSubmit={handleSubmit}>
          <Input
            label="Your Name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={values.name}
            error={errors?.name}
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
            error={errors?.email}
          />

          <Input
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            onChange={handleChange}
            value={values.phoneNumber}
            error={errors?.phoneNumber}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
            disabled={true}
            error={errors?.password}
          />

          <div>
            <button
              className="mt-5 bg-gray-900 w-full text-white py-2"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyInfo;
