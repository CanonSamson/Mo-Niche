"use client";
import Link from "next/link";
import { useState } from "react";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { getUserDetails } from "@/Redux/actions/getUser";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [backendError, setBackendError] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBackendError(null);
    // Simple validation
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({ ...formData, addresses: [] }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem("token", responseData.token);
        console.log("Signup successful!");
        await getUserDetails(dispatch);
        router.push("/account");
      } else {
        console.error(`Signup failed: ${response.statusText}`);
        const responseData = await response.json();

        setBackendError(responseData.error);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      throw error; // Re-throw the error to propagate it to the calling code
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[100px] pb-[150px] w-full z-4 relative px-4">
      <div className="bg-white min-h-[300px] min-w-[300px] w-full flex flex-col">
        <h1 className="text-center text-2xl">Create Account</h1>
        <p className="text-center">
          Be the first to know about our special offers and new lookbooks.
        </p>
        <form
          className="mt-10 gap-2 flex flex-col"
          onSubmit={handleSubmit}
          method="post"
        >
          <Input
            label="Full Name"
            name="fullName"
            type="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            error={errors?.fullName}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors?.email}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors?.password}
          />
          {backendError && (
            <div>
              <span className=" text-red-500">{backendError}</span>
            </div>
          )}
          <button
            disabled={loading}
            className="mt-5 bg-gray-900 w-full text-white py-2"
          >
            {loading ? "loading..." : "Create Account"}
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
