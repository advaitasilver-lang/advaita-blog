import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 md:p-6">
      <nav className="flex items-center gap-4 md:gap-8 rounded-full border border-white/10 bg-surface/40 px-6 md:px-8 py-3 backdrop-blur-md shadow-lg max-w-full">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
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
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-secondary hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={20} />
        </button>

        <div className="hidden md:block h-4 w-px bg-white/20" />
        
        <button className="text-text-secondary hover:text-accent transition-colors">
          <Search size={18} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg-dark/95 backdrop-blur-lg p-6">
          <div className="flex justify-end mb-8">
            <button 
              className="p-2 text-text-secondary hover:text-accent transition-colors rounded-full border border-white/10 bg-surface/40"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 mt-12">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "font-ui text-2xl tracking-widest uppercase transition-colors duration-300",
                    isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
