"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

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
          onSubmit={(e) => {
            e.preventDefault();
            setIsOpen(false);
            toast("Your organization has been created", {
              position: "top-right",
            });
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Organization name</Label>
            <Input id="name" required />
          </div>

          <Button className="w-full" type="submit">
            create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
