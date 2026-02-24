import { useState } from "react";
import {
  BookOpen, BarChart3, Newspaper, BookMarked, User, Info,
  Phone, LogOut, ChevronLeft, ChevronRight, Home,
} from "lucide-react";

interface SideNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Main Menu", icon: Home },
  { id: "books", label: "Books", icon: BookOpen },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "updates", label: "Daily Updates", icon: Newspaper },
  { id: "issued", label: "My Issued Books", icon: BookMarked },
  { id: "profile", label: "Profile", icon: User },
  { id: "about", label: "About Library", icon: Info },
  { id: "contact", label: "Contact", icon: Phone },
];

const SideNav = ({ activeSection, onSectionChange }: SideNavProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden lg:flex flex-col shrink-0 border-l bg-card transition-all duration-300 ${
        collapsed ? "w-16" : "w-56"
      }`}
    >
      {/* Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center h-12 border-b hover:bg-muted/50 transition-colors"
      >
        {collapsed ? (
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      {/* Nav Items */}
      <nav className="flex-1 py-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-body transition-all duration-200 ${
                isActive
                  ? "bg-primary/10 text-primary border-r-2 border-primary font-medium"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              } ${collapsed ? "justify-center px-0" : ""}`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <button
        className={`flex items-center gap-3 px-4 py-3 text-sm font-body text-destructive hover:bg-destructive/10 border-t transition-colors ${
          collapsed ? "justify-center px-0" : ""
        }`}
      >
        <LogOut className="w-4 h-4 shrink-0" />
        {!collapsed && <span>Logout</span>}
      </button>
    </aside>
  );
};

export default SideNav;
