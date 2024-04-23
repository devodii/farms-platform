import { Farm } from "@/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

interface Props {
  farm: Farm;
}

export const FarmCard = ({ farm }: Props) => {
  return (
    <Card className="h-72 w-full">
      <CardHeader className="h-[76%]" />

      <CardContent className="w-full px-0">
        <Separator className="" />
        <div className="w-full flex items-center justify-between px-4">
          <div>{farm.name}</div>
          <div>{farm.location}</div>
        </div>
      </CardContent>
    </Card>
  );
};
