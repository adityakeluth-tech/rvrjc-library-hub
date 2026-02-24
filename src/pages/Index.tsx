import { useState } from "react";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import BooksGrid from "@/components/BooksGrid";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("books");

  return (
    <div className="flex flex-col min-h-screen">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {activeSection === "books" && (
            <div className="animate-fade-in">
              <div className="mb-6">
                <h2 className="text-2xl font-heading font-bold text-foreground">Browse Collection</h2>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  Explore our library of {25} academic books
                </p>
              </div>
              <BooksGrid searchQuery={searchQuery} />
            </div>
          )}

          {activeSection === "analytics" && <AnalyticsDashboard />}

          {activeSection !== "books" && activeSection !== "analytics" && (
            <div className="flex items-center justify-center h-full animate-fade-in">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground capitalize">
                  {activeSection.replace("-", " ")}
                </h3>
                <p className="text-sm text-muted-foreground font-body max-w-xs">
                  This section is coming soon. Connect a backend to enable full functionality.
                </p>
              </div>
            </div>
          )}
        </main>

        {/* Right Side Navigation */}
        <SideNav activeSection={activeSection} onSectionChange={setActiveSection} />
      </div>
    </div>
  );
};

export default Index;
