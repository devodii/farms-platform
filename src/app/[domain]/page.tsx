// maps to subdomain.

import { getSubDomain } from "@/lib/domain";

interface Props {
  params: {
    domain: string;
  };
}

export default async function HostedFarmPage({ params }: Props) {
  const farm = getSubDomain(params?.domain);

  return (
    <section className="min-h-screen flex items-center justify-center">
      This is a hosted farm page for {farm}
    </section>
  );
}
