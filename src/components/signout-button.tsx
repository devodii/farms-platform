"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export const SignOutButton = () => {
  return (
    <Button
      variant="outline"
      onClick={async () => await signOut({ callbackUrl: "/" })}
    >
      Sign out
    </Button>
  );
};
