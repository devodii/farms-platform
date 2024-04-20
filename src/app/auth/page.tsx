import { AuthButton } from "@/components/auth-button";

export default function AuthPage() {
  return (
    <div className="h-screen w-screen flex flex-col gap-6 items-center justify-center">
      <h2 className="text-2xl lg:text-3xl font-semibold">
        Continue to Farms platform
      </h2>

      <AuthButton />
    </div>
  );
}
