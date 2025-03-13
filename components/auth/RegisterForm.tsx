"use client";

import React, { useState } from "react";

type RegisterFormProps = {
  setShowLoginForm: (value: boolean) => void
};

const RegisterForm: React.FC<RegisterFormProps> = ({ setShowLoginForm }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateFormData = () => {
    return Boolean(formData.email !== "" && formData.password !== "");
  };

  return (
    <form className="flex flex-col justify-center gap-4 py-4 max-w-sm mx-auto w-full">
       <input
        type="text"
        placeholder="Username"
        className="bg-tone-7 p-4 rounded-2xl text-white/70"
        value={formData.email}
        onInput={(e) =>
          setFormData({
            ...formData,
            username: (e.target as HTMLInputElement).value,
          })
        }
      />

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

      <div>
        Already on reddit?{" "}
        <button
          type="button"
          onClick={() => setShowLoginForm(true)}
          className="text-blue-400 cursor-pointer"
        >
          Sign In
        </button>
      </div>

      <button
        type="submit"
        className="px-4 py-3 bg-fuchsia-800 hover:bg-fuchsia-900 disabled:bg-neutral-700 cursor-pointer disabled:cursor-auto duration-75 rounded-full mt-4"
        disabled={validateFormData()}
      >
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
