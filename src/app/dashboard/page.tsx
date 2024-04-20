import { AuthButton } from "@/components/auth-button";
import { CreateOrganization } from "@/components/create-organization";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession();

  return (
    <section className="w-screen flex-col min-h-screen flex items-center py-12">
      <header className="w-full border-b pb-4">
        <div className="container px-16 md:px-24 mx-auto flex items-center justify-between">
          <div>Farms platform</div>

          <AuthButton action="logout" />
        </div>
      </header>

      <div className="px-6 md:px-12 mt-24 flex flex-col gap-4">
        <span>You do not have a organization</span>
        <CreateOrganization>
          <Button>Create an organization</Button>
        </CreateOrganization>
      </div>

      <div className="mt-8">{JSON.stringify(session?.user)}</div>
    </section>
  );
}
