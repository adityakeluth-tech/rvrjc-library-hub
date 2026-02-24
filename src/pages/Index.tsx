import { useState } from "react";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import BooksGrid from "@/components/BooksGrid";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import CollegeBanner from "@/components/CollegeBanner";

const categories = ["All", "Computer Science", "Mathematics", "Physics", "Engineering", "Literature"];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("books");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <SideNav activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <CollegeBanner />
        <main className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-8 py-4">
          {activeSection === "books" && (
            <div className="animate-fade-in">
              {/* Title */}
              <h2 className="text-xl font-bold text-foreground mb-4">Library</h2>

              {/* Category pills */}
              <div className="flex gap-2 mb-5 overflow-x-auto pb-1 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
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

          {activeSection === "analytics" && <AnalyticsDashboard />}

          {activeSection !== "books" && activeSection !== "analytics" && (
            <div className="flex items-center justify-center h-full animate-fade-in">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-accent mx-auto flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground capitalize">
                  {activeSection.replace("-", " ")}
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  This section is coming soon. Connect a backend to enable full functionality.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
