import { useRef, useState } from "react";
import SideNav from "@/components/SideNav";
import BooksGrid from "@/components/BooksGrid";
import CollegeBanner from "@/components/CollegeBanner";
import GenreCards from "@/components/GenreCards";
import UpdatesSection from "@/components/UpdatesSection";
import IssuedSection from "@/components/IssuedSection";
import ProfileSection from "@/components/ProfileSection";
import AboutSection from "@/components/AboutSection";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = ["All", "Computer Science", "Mathematics", "Physics", "Engineering", "Literature"];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const booksRef = useRef<HTMLDivElement>(null);

  const handleExplore = (category: string) => {
    setActiveCategory(category);
    setActiveSection("books");
    setTimeout(() => booksRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner spans full width */}
      <CollegeBanner onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Sidebar overlay */}
      <SideNav
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-8 py-3">
        {/* Home */}
        {activeSection === "home" && (
          <div className="animate-fade-in space-y-3">
            <h2 className="text-lg font-bold text-foreground">Browse by Department</h2>
            <GenreCards onExplore={handleExplore} />
          </div>
        )}

        {/* Books */}
        {activeSection === "books" && (
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

        {activeSection === "updates" && <UpdatesSection />}
        {activeSection === "issued" && <IssuedSection />}
        {activeSection === "profile" && <ProfileSection />}
        {activeSection === "about" && <AboutSection />}
      </main>
    </div>
  );
};

export default Index;
