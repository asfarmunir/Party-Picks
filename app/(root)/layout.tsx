import { ThemeToggle } from "@/components/shared/ToggleTheme";
import Navbar from "@/components/shared/Navbar";
import Tabbar from "@/components/shared/Tabbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-svh">
      {/* Navbar at top */}
      <Navbar />

      {/* Theme toggle */}
      <div className="absolute left-5 bottom-24 md:bottom-4 z-50 ">
        <ThemeToggle />
      </div>

      {/* Scrollable content */}
      <main className="flex-1 pb-[100px] md:pb-0 overflow-y-auto">
        {children}
      </main>

      {/* Fixed tabbar - mobile only */}
      <div className="fixed bottom-2 w-full md:hidden  z-50">
        <div className="w-[95%] mx-auto ">
          <Tabbar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
