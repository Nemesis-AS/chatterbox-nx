"use client";

import React, { useState } from "react";
import { PiX } from "react-icons/pi";

import GoogleOAuthButton from "./GoogleOAuthButton";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type AuthModalProps = {
  closeModal: () => void
};

const AuthModal: React.FC<AuthModalProps> = ({ closeModal }) => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  return (
    <div className="fixed inset-0 z-50 bg-neutral-background/30 flex items-end md:items-center justify-center md:py-8">
      <div className="bg-neutral-background-container-strong rounded-xl p-4 flex flex-col md:gap-2 max-w-lg w-full">
        <div className="flex flex-col gap-2">
          <div className="flex justify-end">
            <button
              className="bg-gray-500 p-1 rounded-full aspect-square cursor-pointer"
              onClick={closeModal}
            >
              <PiX className="size-5" />
            </button>
          </div>
          <h1 className="text-lg md:text-2xl font-bold text-center">
            {showLoginForm ? "Log In" : "Sign Up"}
          </h1>
          <p className="text-center text-sm md:text-lg text-zinc-300">
            {showLoginForm
              ? "Login for the ultimate community experience"
              : "Register to transform the way you interact with the communities around you"}
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

        {showLoginForm ? (
          <LoginForm setShowLoginForm={setShowLoginForm} />
        ) : (
          <RegisterForm setShowLoginForm={setShowLoginForm} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
