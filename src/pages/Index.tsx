import { useRef, useState } from "react";
import SideNav from "@/components/SideNav";
import BooksGrid from "@/components/BooksGrid";
import CollegeBanner from "@/components/CollegeBanner";
import GenreCards from "@/components/GenreCards";
import UpdatesSection from "@/components/UpdatesSection";
import IssuedSection from "@/components/IssuedSection";
import ProfileSection from "@/components/ProfileSection";
import AboutSection from "@/components/AboutSection";
import AdminAddBook from "@/components/AdminAddBook";
import AdminManageUpdates from "@/components/AdminManageUpdates";
import AdminManageIssued from "@/components/AdminManageIssued";
import AdminManageStudents from "@/components/AdminManageStudents";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = ["All", "Computer Science", "Mathematics", "Physics", "Engineering", "Literature"];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState(() => {
    const userStr = localStorage.getItem("user");
    const user = userStr ? JSON.parse(userStr) : null;
    return user?.role === "admin" ? "add-book" : "home";
  });
  const [activeCategory, setActiveCategory] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const booksRef = useRef<HTMLDivElement>(null);

  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;
  const isAdmin = user?.role === "admin";

  const handleExplore = (category: string) => {
    setActiveCategory(category);
    setActiveSection("books");
    setSidebarOpen(true);
    setTimeout(() => booksRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div className="flex min-h-screen">
      <SideNav
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${sidebarOpen ? "ml-20" : "ml-0"}`}>
        <CollegeBanner onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-8 py-3">
          {/* Student sections */}
          {activeSection === "home" && !isAdmin && (
            <div className="animate-fade-in space-y-6">
              <h2 className="text-lg font-bold text-foreground">Browse by Department</h2>
              <GenreCards onExplore={handleExplore} />

              <div className="pt-2">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-bold text-foreground">Popular Books</h2>
                  <button onClick={() => setActiveSection("books")} className="text-xs font-semibold text-primary hover:underline">
                    View All →
                  </button>
                </div>
                <BooksGrid searchQuery="" categoryFilter="All" />
              </div>
            </div>
          )}

          {activeSection === "books" && !isAdmin && (
            <div className="animate-fade-in" ref={booksRef}>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold text-foreground">Library</h2>
                <div className="relative w-48">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                  <Input
                    placeholder="Search books..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 h-8 rounded-sm bg-muted/60 border-0 text-xs"
                  />
                </div>
              </div>
              <div className="flex gap-1.5 mb-3 overflow-x-auto pb-1 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-3 py-1 rounded-sm text-[10px] font-medium transition-all duration-200 border ${
                      activeCategory === cat
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-card text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
                    }`}
                  >
                    {cat === activeCategory && "✓ "}{cat}
                  </button>
                ))}
              </div>
              <BooksGrid searchQuery={searchQuery} categoryFilter={activeCategory} />
            </div>
          )}

          {activeSection === "updates" && !isAdmin && <UpdatesSection />}
          {activeSection === "issued" && !isAdmin && <IssuedSection />}
          {activeSection === "profile" && !isAdmin && <ProfileSection />}
          {activeSection === "about" && <AboutSection />}

          {/* Admin sections */}
          {activeSection === "add-book" && isAdmin && <AdminAddBook />}
          {activeSection === "manage-updates" && isAdmin && <AdminManageUpdates />}
          {activeSection === "manage-issued" && isAdmin && <AdminManageIssued />}
          {activeSection === "manage-students" && isAdmin && <AdminManageStudents />}
          {activeSection === "analytics" && isAdmin && <AnalyticsDashboard />}
        </main>
      </div>
    </div>
  );
};

export default Index;
