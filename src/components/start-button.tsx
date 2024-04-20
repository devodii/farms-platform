import { getServerSession } from "next-auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <Link href="/auth">Get started</Link>
    </Button>
  );
};
