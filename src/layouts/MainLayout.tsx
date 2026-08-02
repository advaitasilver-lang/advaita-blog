import { ReactNode } from "react";
import { Navigation } from "@/components/ui/Navigation";
import { AmbientEffects } from "@/components/ui/AmbientEffects";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="dark min-h-screen font-body antialiased selection:bg-accent/30 text-text-primary bg-bg-dark">
      <AmbientEffects />
      <Navigation />
      <div className="relative z-10 flex min-h-screen flex-col">
        {children}
      </div>
    </div>
  );
}
