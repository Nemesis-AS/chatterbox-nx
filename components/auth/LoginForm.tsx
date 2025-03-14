"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { login } from "@/components/auth/authActions";
import { useFormState } from "react-dom";

type LoginFormProps = {
  setShowLoginForm: (value: boolean) => void;
  setLoggedIn: (value: boolean) => void;
  closeModal: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({
  setShowLoginForm,
  setLoggedIn,
  closeModal,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [state, formAction] = useFormState(login, {
    success: false,
    message: null,
  });

  const validateFormData = () => {
    return Boolean(formData.email === "" || formData.password === "");
  };

  useEffect(() => {
    if (state?.success) {
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
