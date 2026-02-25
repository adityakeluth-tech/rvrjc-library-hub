import {
  BookOpen, Newspaper, BookMarked, User, Info, Home,
} from "lucide-react";

interface SideNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "books", icon: BookOpen, label: "Books" },
  { id: "updates", icon: Newspaper, label: "Updates" },
  { id: "issued", icon: BookMarked, label: "Issued" },
  { id: "profile", icon: User, label: "Profile" },
  { id: "about", icon: Info, label: "About" },
];

const SideNav = ({ activeSection, onSectionChange }: SideNavProps) => {
  return (
    <aside className="hidden lg:flex flex-col items-center justify-center w-20 shrink-0 gap-1 bg-sidebar border-r border-sidebar-border">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`relative flex flex-col items-center justify-center w-14 h-14 rounded-lg transition-all duration-200 group ${
              isActive
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[9px] font-medium mt-0.5 leading-none">{item.label}</span>
          </button>
        );
      })}
    </aside>
  );
};

export default SideNav;
