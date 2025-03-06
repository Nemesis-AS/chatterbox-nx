"use client";

import Link from "next/link";
import React, { useState } from "react";
import { PiX } from "react-icons/pi";
import GoogleOAuthButton from "./GoogleOAuthButton";

const LoginModal = () => {
  const [showModal, setShowModal] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const closeModal = () => {
    setShowModal(false);
  };

  const validateFormData = () => {
    return Boolean(formData.email !== "" && formData.password !== "");
  };

  if (!showModal) return "";

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-neutral-background/30 flex items-center justify-center py-8">
      <div className="bg-neutral-background-container-strong rounded-xl p-4 h-full flex flex-col gap-2 max-w-lg w-full">
        <div className="flex flex-col gap-2">
          <div className="flex justify-end">
            <button
              className="bg-gray-500 p-1 rounded-full aspect-square cursor-pointer"
              onClick={closeModal}
            >
              <PiX className="size-5" />
            </button>
          </div>
          <h1 className="text-2xl font-bold text-center">Log In</h1>
          <p className="text-center text-lg text-zinc-300">
            Login for the ultimate community experience
          </p>
        </div>

        <div className="oauth w-full max-w-sm mx-auto py-4">
          <GoogleOAuthButton />
        </div>

        <div className="flex justify-center items-center py-4 gap-2">
          <div className="grow h-px bg-zinc-600"></div>
          <span className="text-zinc-400 uppercase">Or</span>
          <div className="grow h-px bg-zinc-600"></div>
        </div>

        <form className="flex flex-col justify-center gap-4 py-4 max-w-sm mx-auto w-full">
          <input
            type="text"
            placeholder="Email"
            className="bg-tone-7 p-4 rounded-2xl text-white/70"
            value={formData.email}
            onInput={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-tone-7 p-4 rounded-2xl text-white/70"
            value={formData.password}
            onInput={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <Link href="/" className="text-blue-400">
            Forgot password?
          </Link>
          <p>
            New to reddit?{" "}
            <Link href="/signup" className="text-blue-400">
              Sign Up
            </Link>
          </p>

          <button
            type="submit"
            className="px-4 py-3 bg-fuchsia-800 hover:bg-fuchsia-900 disabled:bg-neutral-700 cursor-pointer disabled:cursor-auto duration-75 rounded-full mt-4"
            disabled={validateFormData()}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
