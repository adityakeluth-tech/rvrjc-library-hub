import { useState } from "react";
import { Search, LogIn, Menu, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 md:px-6 h-14">
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-1.5 rounded-xl hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="hidden md:flex flex-1 max-w-sm mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9 h-9 rounded-xl bg-muted/60 border-0 focus:bg-card text-sm"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1.5">
          <Button variant="ghost" size="sm" className="rounded-xl text-xs h-8 px-3">
            <LogIn className="w-3.5 h-3.5 mr-1" />
            Login
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-xl hover:bg-muted"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9 rounded-xl bg-muted/60 border-0"
            />
          </div>
          <Button variant="ghost" size="sm" className="w-full rounded-xl">
            <LogIn className="w-4 h-4 mr-1.5" />
            Login
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
