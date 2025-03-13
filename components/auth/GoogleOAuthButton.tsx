"use client";

import Script from "next/script";
import { createClient } from "@/utils/supabase/client";
import { CredentialResponse } from "google-one-tap";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const GoogleOAuthButton = () => {
  const supabase = createClient();
  const router = useRouter();

  const btnEl = useRef(null);

  // generate nonce to use for google id token sign-in
  const generateNonce = async (): Promise<string[]> => {
    const nonce = btoa(
      String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32)))
    );
    const encoder = new TextEncoder();
    const encodedNonce = encoder.encode(nonce);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encodedNonce);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedNonce = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    return [nonce, hashedNonce];
  };

  useEffect(() => {
    const initializeGoogleOneTap = async () => {
      console.log("Initializing Google One Tap");
      const [nonce, hashedNonce] = await generateNonce();

      // check if there's already an existing session before initializing the one-tap UI
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting session", error);
      }
      if (data.session) {
        router.push("/");
        return;
      }

      if (!window.google)
        return;

      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
        callback: async (response: CredentialResponse) => {
          try {
            // send id token returned in response.credential to supabase
            const { data, error } = await supabase.auth.signInWithIdToken({
              provider: "google",
              token: response.credential,
              nonce,
            });

            if (error) throw error;
            console.log("Session data: ", data);
            console.log("Successfully logged in with Google One Tap");
            //@todo! Re render the current UI (Hide auth buttons)

            // redirect to protected page
            // router.push("/");
          } catch (error) {
            console.error("Error logging in with Google One Tap", error);
          }
        },
        nonce: hashedNonce,
        // with chrome's removal of third-party cookies, we need to use FedCM instead (https://developers.google.com/identity/gsi/web/guides/fedcm-migration)
        use_fedcm_for_prompt: true,
      });

      if (btnEl.current) {
        window.google.accounts.id.renderButton(btnEl.current, {
          type: "standard",
          theme: "outline",
          size: "large",
          text: "continue_with",
          shape: "pill",
        });
      }

      clearTimeout(timeoutId);
    };

    const timeoutId = setTimeout(initializeGoogleOneTap, 500);
    // initializeGoogleOneTap();
    // return () => window.removeEventListener("load", initializeGoogleOneTap);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" />
      <div ref={btnEl}></div>
    </>
  );
};

export default GoogleOAuthButton;
