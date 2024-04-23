import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";

export const UserAvatar = async () => {
  const session = await getServerSession();

  const initial = session?.user?.email?.slice(0, 1);
  return (
    <Avatar>
      <AvatarFallback className="uppercase font-semibold select-none">
        {initial}
      </AvatarFallback>
    </Avatar>
  );
};
