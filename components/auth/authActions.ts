"use server";

import { z } from "zod";

import { createClient } from "@/utils/supabase/server";

type FormResponse = {
  success: boolean;
  message?: string | null;
  errors?: {
    username?: string[];
    email?: string[];
    password?: string[];
  };
};

const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid Email!",
  }),
  password: z
    .string({
      invalid_type_error:
        "The password should contain Alphabets, Numbers and Special Characters",
    })
    // .min(8, { message: "The password must be at least 8 characters" }),
});

const signUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({
    message: "Please enter a valid Email!",
  }),
  password: z
    .string({
      invalid_type_error:
        "The password should contain Alphabets, Numbers and Special Characters",
    })
    .min(8, { message: "The password must be at least 8 characters long" }),
});

export async function login(
  _prevState: FormResponse,
  formData: FormData
): Promise<FormResponse> {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const parsedFormData = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsedFormData.success) {
    return {
      success: false,
      errors: parsedFormData.error.flatten().fieldErrors,
    };
  }

  const { error } = await supabase.auth.signInWithPassword(parsedFormData.data);

  if (error) {
    return { success: false, message: error.message };
  }

  return {
    success: true,
    message: "Login Successfull!",
  };
}

export async function signup(
  _prevState: FormResponse,
  formData: FormData
): Promise<FormResponse> {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const parsedFormData = signUpSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsedFormData.success) {
    return {
      success: false,
      errors: parsedFormData.error.flatten().fieldErrors,
    };
  }

  const { error } = await supabase.auth.signUp(parsedFormData.data);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Signup successfull!",
  };
}
