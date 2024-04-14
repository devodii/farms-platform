import { getServerSession } from "next-auth";
import Link from "next/link";
import { Button } from "./ui/button";

export const StartButton = async () => {
  const session = await getServerSession();

  if (session?.user?.email) {
    return (
      <Button variant="outline" asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    );
  }
  return (
    <Button variant="outline" asChild>
      <Link href="/sign-in">Get started</Link>
    </Button>
  );
};
