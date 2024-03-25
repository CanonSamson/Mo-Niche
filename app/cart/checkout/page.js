"use client";
import { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import FlutterWave from "@/components/FlutterWave";
import Input from "@/components/Input";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone_number: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
  street_name: yup.string().required("Street name is required"),
  post_code: yup.string().required("Postcode is required"),
});

const CheckOut = () => {
  const [forError, setForError] = useState(true);
  const { items, subtotal } = useSelector((state) => state.cart);

  const { values, touched, handleSubmit, errors, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone_number: "",
        address: "",
        street_name: "",
        post_code: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
        setForError(false);
      },
    });

  useEffect(() => {
    setForError(true);
  }, [values]);

  return (
    <div className="text-[14px] gap-2 font-sans flex-col pb-[150px] pt-[100px] w-full items-center p-4 justify-start min-h-screen bg-gray-50  flex">
      <div className="border-t  max-w-[450px]  z-[20] right-0 text-[16px] w-full  p-5 bg-white bottom-0">
        <div className="flex items-center justify-between pb-10">
          <span>Subtotal:</span>{" "}
          <span className="text-xl font-semibold">{subtotal.total}</span>
        </div>
        <div className="pb-4">
          <span className=" text-center items-center flex">
            Shipping is currently not calculated, but it will be calculated
            based on your distance off the website.
          </span>
        </div>
      </div>
      <div className="w-full max-w-[450px] p-4 bg-white ">
        <form onSubmit={handleSubmit}>
          <span className="font-medium text-base flex pb-4">User Details</span>
          <div className="grid gap-4">
            <Input
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors?.name}
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors?.email}
            />
            <Input
              label="Phone Number"
              name="phone_number"
              type="tel"
              placeholder="Phone Number"
              value={values.phone_number}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone_number && errors?.phone_number}
            />
          </div>

          <span className="font-medium mt-10 flex text-base pb-4">
            Shipping Details
          </span>
          <div className="grid gap-4">
            <Input
              label="Address"
              name="address"
              type="text"
              placeholder="Address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address && errors?.address}
            />

            <Input
              label="Street Name"
              name="street_name"
              type="text"
              placeholder="Street Name"
              value={values.street_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.street_name && errors?.street_name}
            />

            <Input
              label="Postcode"
              name="post_code"
              type="text"
              placeholder="Postcode"
              value={values.post_code}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.post_code && errors?.post_code}
            />

            {forError ? (
              <button
                type="submit"
                className="bg-gray-900  w-full text-white px-4 py-2 mt-10"
              >
                Submit
              </button>
            ) : (
              <FlutterWave
                user={{
                  name: values.name,
                  email: values.email,
                  phone_number: values.phone_number,
                }}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
