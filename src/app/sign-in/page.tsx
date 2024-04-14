import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function LoginPage() {
  return (
    <div className="h-screen w-screen flex flex-col gap-6 items-center justify-center">
      <h2>Sign in</h2>

      <form className="w-full max-w-2xl mx-auto flex flex-col gap-2">
        <Input placeholder="email" />
        <Input type="password" placeholder="****" />

        <Button >Submit</Button>
      </form>
    </div>
  );
}
