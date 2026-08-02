import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { cn } from "@/utils/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Poems", href: "/poems" },
  { name: "Collections", href: "/collections" },
  { name: "Themes", href: "/themes" },
  { name: "About", href: "/about" },
];

export function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-6">
      <nav className="flex items-center gap-8 rounded-full border border-white/10 bg-surface/40 px-8 py-3 backdrop-blur-md shadow-lg">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "font-ui text-sm tracking-widest uppercase transition-colors duration-300",
                isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
              )}
            >
              {link.name}
            </Link>
          );
        })}
        <div className="h-4 w-px bg-white/20" />
        <button className="text-text-secondary hover:text-accent transition-colors">
          <Search size={18} />
        </button>
      </nav>
    </header>
  );
}
