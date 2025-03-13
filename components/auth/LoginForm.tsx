"use client";

import Link from "next/link";
import React, { useState } from "react";

type LoginFormProps = {
  setShowLoginForm: (value: boolean) => void
};

const LoginForm: React.FC<LoginFormProps> = ({ setShowLoginForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validateFormData = () => {
    return Boolean(formData.email === "" || formData.password === "");
  };

  return (
    <form className="flex flex-col justify-center gap-4 py-4 max-w-sm mx-auto w-full">
      <input
        type="text"
        placeholder="Email"
        className="bg-tone-7 p-4 rounded-2xl text-white/70"
        value={formData.email}
        onInput={(e) =>
          setFormData({
            ...formData,
            email: (e.target as HTMLInputElement).value,
          })
        }
      />
      <input
        type="password"
        placeholder="Password"
        className="bg-tone-7 p-4 rounded-2xl text-white/70"
        value={formData.password}
        onInput={(e) =>
          setFormData({
            ...formData,
            password: (e.target as HTMLInputElement).value,
          })
        }
      />

      <Link href="/" className="text-blue-400">
        Forgot password?
      </Link>
      <div>
        New to reddit?{" "}
        <button
          type="button"
          onClick={() => setShowLoginForm(false)}
          className="text-blue-400 cursor-pointer"
        >
          Sign Up
        </button>
      </div>

      <button
        type="submit"
        className="px-4 py-3 bg-fuchsia-800 hover:bg-fuchsia-900 disabled:bg-neutral-700 cursor-pointer disabled:cursor-auto duration-75 rounded-full mt-4"
        disabled={validateFormData()}
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
