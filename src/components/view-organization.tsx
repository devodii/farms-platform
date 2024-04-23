import { getFarms } from "@/action/farm";
import { CreateFarm } from "@/components/create-farm";
import { Button } from "@/components/ui/button";
import { Organization } from "@/types";

interface Props {
  organization: Organization;
}

export const ViewOrganization = async ({ organization }: Props) => {
  const farms = await getFarms(organization?.id);

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl font-semibold text-center">
        You&apos;re working in {organization.name}
      </h3>
      <div className="text-center -mt-4">
        Next up, you need to set up a farm.
      </div>

      <CreateFarm organization={organization}>
        <Button className="max-w-xl w-full mx-auto">Create a farm</Button>
      </CreateFarm>

      <div className="mt-5 mx-auto max-w-4xl">{JSON.stringify(farms)}</div>
    </div>
  );
};
