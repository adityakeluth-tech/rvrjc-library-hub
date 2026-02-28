import {
  BookOpen, Newspaper, BookMarked, User, Info, Home, X,
} from "lucide-react";

interface SideNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const topItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "books", icon: BookOpen, label: "Books" },
  { id: "updates", icon: Newspaper, label: "Updates" },
  { id: "issued", icon: BookMarked, label: "Issued" },
  { id: "profile", icon: User, label: "Profile" },
];

const bottomItems = [
  { id: "about", icon: Info, label: "About" },
];

const SideNav = ({ activeSection, onSectionChange, isOpen, onClose }: SideNavProps) => {
  const handleNav = (id: string) => {
    onSectionChange(id);
  };

  if (!isOpen) return null;

  return (
    <aside className="fixed top-0 left-0 h-full z-50 w-20 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="mb-4 w-10 h-10 rounded-md flex items-center justify-center text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Top nav items */}
      <div className="flex flex-col items-center gap-1 flex-1">
        {topItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-md transition-all duration-200 ${
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
      </div>

      {/* About at the very bottom */}
      <div className="mt-auto pt-6">
        {bottomItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-md transition-all duration-200 ${
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
      </div>
    </aside>
  );
};

export default SideNav;
