import { Organization } from "@/types";

interface Props {
  organization: Organization;
}

export const ViewOrganization = ({ organization }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl font-semibold text-center">
        You&apos;re working in {organization.name}
      </h3>
      <div className="text-center -mt-4">
        Next up, you need to set up a farm.
      </div>
    </div>
  );
};
