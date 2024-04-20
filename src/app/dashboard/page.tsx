import { AuthButton } from "@/components/auth-button";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession();

  return (
    <section className="flex-col min-h-screen flex items-center justify-center">
      {JSON.stringify(session?.user)}

      <AuthButton variant="logout" />
    </section>
  );
}
