"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { signIn } from "next-auth/react";

export const SignIn = () => {
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
      <h2>Sign in</h2>

      <form
        className="w-full max-w-2xl mx-auto flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="****"
          required
        />

        <Button>Submit</Button>
      </form>
    </div>
  );
};
