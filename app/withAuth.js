"use client";
import React, { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import LoadingPage from "@/components/LoadingPage";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const { pending, user } = useSelector((state) => state.app);

    useLayoutEffect(() => {
      if (!pending && !user) {
        router.push("/login");
      }
    }, [pending, user, router]);

    if (pending) {
      return <LoadingPage />;
    }

    return !pending && user && <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
