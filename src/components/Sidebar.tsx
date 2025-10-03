import { Home, User, Briefcase, FolderOpen, Award, GraduationCap, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Award, label: "Skills", href: "#skills" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden rounded-full bg-card/80 backdrop-blur-sm border border-border"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-card border-r border-border z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-20 flex flex-col items-center py-8 gap-6`}
      >
        <div className="text-2xl font-bold text-primary mb-4">
          GR
        </div>

        <nav className="flex-1 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="group relative p-3 rounded-xl hover:bg-accent/10 transition-all duration-300"
              aria-label={item.label}
            >
              <item.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="absolute left-full ml-4 px-3 py-1 bg-card border border-border rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
