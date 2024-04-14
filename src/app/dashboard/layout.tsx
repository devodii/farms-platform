import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import * as React from "react";

export default async function DashboardLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  const session = await getServerSession();

  if (!session?.user?.email) {
    redirect("/sign-in");
  }

  return <div>{children}</div>;
}
