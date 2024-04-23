import { getOrganization } from "@/action/organization";
import { AuthButton } from "@/components/auth-button";
import { CreateOrganization } from "@/components/create-organization";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";
import { ViewOrganization } from "@/components/view-organization";

export default async function DashboardPage() {
  const organization = await getOrganization();

  return (
    <section className="w-screen flex-col min-h-screen flex items-center py-12 gap-12">
      <header className="w-full border-b pb-4">
        <div className="container px-16 md:px-24 mx-auto flex items-center justify-between">
          <div>Farms platform</div>

          <div className="flex items-center justify-center gap-4">
            <UserAvatar />
            <AuthButton action="logout" />
          </div>
        </div>
      </header>

      {!organization?.id && (
        <div className="px-6 md:px-12 mt-24 flex flex-col gap-4">
          <span>You do not have a organization</span>
          <CreateOrganization>
            <Button>Create an organization</Button>
          </CreateOrganization>
        </div>
      )}

      {organization?.id && <ViewOrganization organization={organization} />}
    </section>
  );
}
