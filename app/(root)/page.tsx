// app/page.tsx

import { ThemeToggle } from "@/components/shared/ToggleTheme";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <h1 className="text-4xl font-bold mb-4">Next.js 15 ark Mode</h1>
      <p className="text-lg">
        Click the icon in the top right to toggle themes
      </p>
    </main>
  );
}
