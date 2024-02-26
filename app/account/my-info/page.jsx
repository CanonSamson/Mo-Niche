"use client";
import React, { useEffect, useState } from "react";
import Input from "@/components/Input";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import withAuth from "@/app/withAuth";
import { getUserDetails } from "@/Redux/actions/getUser";

const MyInfo = () => {
  const { user } = useSelector((state) => state.app);
  const [values, setValues] = useState({
    fullName: "",
    phoneNumber: "",
  });
  const [updating, setUpdating] = useState(false);
  const [errors, setErrors] = useState({});
  const [updadted, setUpdated] = useState(false);
  const [backenderrors, setBackendErrors] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(values);
    if (Object.keys(errors).length === 0) {
      const token = localStorage.getItem("token");
      try {
        if (!token || !user) return;
        setUpdating(true);
        const response = await fetch(`/api/user/update-info`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          await getUserDetails(dispatch);
          setUpdated(true);
        } else {
          const responseData = await response.json();
          setBackendErrors(responseData.error);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setUpdating(false);
      }
    } else {
      setErrors(errors);
      console.log(errors);
    }
  };

  const validateForm = (formData) => {
    let errors = {};

    // Example validation rules
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    }

    return errors;
  };

  useEffect(() => {
    setValues({
      fullName: user.fullName ?? "",
      phoneNumber: user.phoneNumber ?? "",
    });
    if (user) {
      console.log(user);
    }
  }, [user]);

  return (
    <div className=" pt-[60px]  pb-[200px]">
      <div className="bg-gray-100 py-5 flex justify-center mb-5">
        <span className="uppercase">
          <Link href="/account">ACCOUNT</Link> / <Link href=""> My Info</Link>
        </span>
      </div>
      <h1 className=" text-2xl px-4  ">My Info</h1>

      <div className="mt-5 px-4">
        <form className=" grid gap-4" onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
            error={errors?.email}
            disabled
          />

          <Input
            label="Full Name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={values.fullName}
            error={errors?.name}
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

          <div>
            <button
              disabled={updating}
              className="mt-5 bg-gray-900 w-full text-white py-2"
              type="submit"
            >
              {updating ? "loading" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withAuth(MyInfo);
