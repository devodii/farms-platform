import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="my-8">
      <header className="border-b pb-4">
        <div className="container mx-auto flex items-center justify-between">
          <div>Farms platform</div>

          <Button variant="outline">Get started</Button>
        </div>
      </header>
    </section>
  );
}
