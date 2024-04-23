"use client";

import { createFarm } from "@/action/farm";
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
import { Organization } from "@/types";

interface Props {
  children: React.ReactNode;
  organization: Organization;
}
export const CreateFarm = ({ children: trigger, organization }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Lets create an farm</DialogTitle>
          <DialogDescription>
            Setup a farm inside {organization?.name}, where you&apos;ll be able
            to track inventories
          </DialogDescription>
        </DialogHeader>

        <form
          className="flex flex-col gap-4 mt-4"
          action={async (formdata) => {
            const org = await createFarm(formdata);

            if (org?.success) {
              toast(`farm "${formdata.get("name")}" has been created`, {
                position: "top-right",
              });
            } else {
              toast("An error occured while creating your farm", {
                position: "top-right",
              });
            }

            setIsOpen(false);
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name of your farm</Label>
            <Input id="name" required name="name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" required name="location" />
          </div>

          <Input className="hidden" name="org_id" value={organization.id} />

          <SubmitButton className="w-full">create</SubmitButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};
