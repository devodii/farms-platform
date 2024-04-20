"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import * as React from "react";
import { CgSpinnerAlt } from "react-icons/cg";

interface Props {
  variant?: "login" | "logout";
}

export const AuthButton = ({ variant = "login" }: Props) => {
  const [isAuthenticating, setIsAuthenticating] = React.useState(false);

  return variant === "login" ? (
    <Button
      className="flex gap-1 items-center justify-center"
      disabled={isAuthenticating}
      onClick={async () => {
        setIsAuthenticating(true);
        await signIn("zitadel", {
          callbackUrl: "/dashboard",
        });
      }}
    >
      <span>Continue</span>
      {isAuthenticating && (
        <CgSpinnerAlt className="animate-spin text-[17px]" />
      )}
    </Button>
  ) : (
    <Button
      variant="outline"
      onClick={async () => await signOut({ callbackUrl: "/" })}
    >
      Sign out
    </Button>
  );
};
