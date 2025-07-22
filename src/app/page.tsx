import { HydrateClient } from "~/trpc/server";
import ThemeToggle from "@/components/ThemeToggle";
import LandingPage from "@/components/LandingPage";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <LandingPage />
      </main>
    </HydrateClient>
  );
}
