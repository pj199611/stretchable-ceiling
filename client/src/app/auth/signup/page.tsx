"use client";

import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register_me_axios } from "@/services/authApi";
import { useRouter } from "next/navigation";
// import Navbar from '@/components/Navbar';
// import { TailSpin } from "react-loader-spinner";

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
  });
  const [loading, setLoding] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoding(true);
    if (!formData.email) {
      setError({ ...error, email: "Email is Required" });
      return;
    }
    if (!formData.password) {
      setError({ ...error, password: "Password is required" });
      return;
    }
    if (!formData.name) {
      setError({ ...error, name: "Name is required" });
      return;
    }
    if (!formData.mobile) {
      setError({ ...error, mobile: "Mobile Number is required" });
      return;
    }
    const data = await register_me_axios(formData);
    console.log(data, data.success);
    if (data.success) {
      console.log("in");
      setLoding(false);
      toast.success(data.message);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      setLoding(false);
      toast.error(data.message);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full h-screen bg-gray-50 ">
        <div className="flex flex-col text-center items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 shadow-xl">
          <div className="w-full bg-white rounded-lg shadow text-black md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Register your account
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div className="text-left">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your Name
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    type="text"
                    name="name"
                    id="namw"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5"
                    placeholder="Name"
                  />
                  {error.name && (
                    <p className="text-sm text-red-500">{error.name}</p>
                  )}
                </div>
                <div className="text-left">
                  <label
                    htmlFor="mobile"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your Mobile Number
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    type="number"
                    name="mobile"
                    id="mobile"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5"
                    placeholder="99999 99999"
                  />
                  {error.mobile && (
                    <p className="text-sm text-red-500">{error.mobile}</p>
                  )}
                </div>
                <div className="text-left">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5"
                    placeholder="name@company.com"
                  />
                  {error.email && (
                    <p className="text-sm text-red-500">{error.email}</p>
                  )}
                </div>
                <div className="text-left">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5"
                  />
                  {error.password && (
                    <p className="text-sm text-red-500">{error.password}</p>
                  )}
                </div>

                {loading ? (
                  <button
                    type="button"
                    className="w-full flex items-center justify-center text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Loading...
                    {/* <TailSpin
                      height="20"
                      width="20"
                      color="white"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    /> */}
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Sign up
                  </button>
                )}

                <p className="text-sm  text-gray-500 ">
                  Already have an account{" "}
                  <Link
                    href="/login"
                    className="font-medium text-orange-600 hover:underline "
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
}
