import { StartButton } from "@/components/start-button";

export default function Home() {
  return (
    <section className="my-8">
      <header className="border-b pb-4">
        <div className="container mx-auto flex items-center justify-between">
          <div>Farms platform</div>

          <StartButton />
        </div>
      </header>
    </section>
  );
}
