"use client";

import React, { useEffect, useState } from "react";

import { signup } from "@/components/auth/authActions";
import { useFormState } from "react-dom";

type RegisterFormProps = {
  setShowLoginForm: (value: boolean) => void;
  setLoggedIn: (value: boolean) => void;
  closeModal: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  setShowLoginForm,
  setLoggedIn,
  closeModal,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [state, formAction] = useFormState(signup, {
    success: false,
    message: null,
  });

  const validateFormData = () => {
    return Boolean(
      formData.email === "" ||
        formData.password === "" ||
        formData.username === ""
    );
  };

  useEffect(() => {
    if (state.success) {
      setLoggedIn(true);

      closeModal();
    }
  });

  return (
    <form
      className="flex flex-col justify-center gap-4 py-4 max-w-sm mx-auto w-full"
      action={formAction}
    >
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Username"
          className="bg-tone-7 p-4 rounded-2xl text-white/70"
          value={formData.username}
          name="username"
          onInput={(e) =>
            setFormData({
              ...formData,
              username: (e.target as HTMLInputElement).value,
            })
          }
        />
        <span className="text-xs text-rose-400 pl-4">
          {state.errors?.username}
        </span>
      </div>

      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Email"
          className="bg-tone-7 p-4 rounded-2xl text-white/70"
          value={formData.email}
          name="email"
          onInput={(e) =>
            setFormData({
              ...formData,
              email: (e.target as HTMLInputElement).value,
            })
          }
        />
        <span className="text-xs text-rose-400 pl-4">
          {state.errors?.email}
        </span>
      </div>

      <div className="flex flex-col">
        <input
          type="password"
          placeholder="Password"
          className="bg-tone-7 p-4 rounded-2xl text-white/70"
          value={formData.password}
          name="password"
          onInput={(e) =>
            setFormData({
              ...formData,
              password: (e.target as HTMLInputElement).value,
            })
          }
        />
        <span className="text-xs text-rose-400 pl-4">
          {state.errors?.password}
        </span>
      </div>

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
