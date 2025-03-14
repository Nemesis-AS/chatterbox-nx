"use client";

import React, { useEffect, useState } from "react";

import AuthModal from "./AuthModal";
import { createClient } from "@/utils/supabase/client";

const AuthBtn = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      const session = await supabase.auth.getSession();

      if (!session.data.session) setLoggedIn(false);
    };

    checkAuth();
  });

  const logout = async () => {
    await supabase.auth.signOut();

    setLoggedIn(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary hover:bg-primary-hover px-4 py-2 text-sm rounded-full cursor-pointer"
        >
          Log In
        </button>
      ) : (
        <button
          onClick={logout}
          className="bg-primary hover:bg-primary-hover px-4 py-2 text-sm rounded-full cursor-pointer"
        >
          Log Out
        </button>
      )}

      {showModal && <AuthModal closeModal={closeModal} setLoggedIn={setLoggedIn} />}
    </>
  );
};

export default AuthBtn;
