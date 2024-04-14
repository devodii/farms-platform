"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react";

import { signIn } from "next-auth/react";

export const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="h-screen w-screen flex flex-col gap-6 items-center justify-center">
      <h2>Sign up</h2>

      <form
        className="w-full max-w-2xl mx-auto flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="****"
        />

        <Button>Submit</Button>
      </form>
    </div>
  );
};
