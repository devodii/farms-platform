"use client";

import { createOrg } from "@/action/organization";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { toast } from "sonner";
import { SubmitButton } from "./submit-button";

export const CreateOrganization = ({
  children: trigger,
}: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Lets create an organization</DialogTitle>
          <DialogDescription>
            An organization is a place where you store your various farms.
          </DialogDescription>
        </DialogHeader>

        <form
          className="flex flex-col gap-4 mt-4"
          action={async (formdata) => {
            const org = await createOrg(formdata);

            if (org?.success) {
              toast("Your organization has been created", {
                position: "top-right",
              });
            } else {
              toast("An error occured while creating your organization", {
                position: "top-right",
              });
            }

            setIsOpen(false);
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Organization name</Label>
            <Input id="name" required name="name" />
          </div>

          <SubmitButton className="w-full">create</SubmitButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};
