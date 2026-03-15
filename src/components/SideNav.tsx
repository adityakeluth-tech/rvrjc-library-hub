import {
  BookOpen, Newspaper, BookMarked, User, Info, Home, X, LogOut, PlusCircle, Users, BarChart3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SideNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const studentItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "books", icon: BookOpen, label: "Books" },
  { id: "updates", icon: Newspaper, label: "Updates" },
  { id: "issued", icon: BookMarked, label: "Issued" },
  { id: "profile", icon: User, label: "Profile" },
];

const adminItems = [
  { id: "manage-updates", icon: Newspaper, label: "Updates" },
  { id: "add-book", icon: PlusCircle, label: "Add Book" },
  { id: "upload-books", icon: BookOpen, label: "Upcoming" },
  { id: "manage-students", icon: Users, label: "Users" },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
  { id: "admin-profile", icon: User, label: "Profile" },
  { id: "edit-about", icon: Info, label: "About" },
];

const bottomItems = [
  { id: "about", icon: Info, label: "About" },
];

const SideNav = ({ activeSection, onSectionChange, isOpen, onClose }: SideNavProps) => {
  const navigate = useNavigate();
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;
  const isAdmin = user?.role === "admin";
  const topItems = isAdmin ? adminItems : studentItems;
  const showBottomItems = !isAdmin;

  const handleNav = (id: string) => {
    onSectionChange(id);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!isOpen) return null;

  return (
    <aside className="fixed top-0 left-0 h-full z-50 w-20 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4">
      <button
        onClick={onClose}
        className="mb-4 w-10 h-10 rounded-md flex items-center justify-center text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

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

      <div className="mt-auto pt-6 flex flex-col items-center gap-1">
        {showBottomItems && bottomItems.map((item) => {
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
        <button
          onClick={handleLogout}
          className="flex flex-col items-center justify-center w-14 h-14 rounded-md text-sidebar-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-[9px] font-medium mt-0.5 leading-none">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default SideNav;
