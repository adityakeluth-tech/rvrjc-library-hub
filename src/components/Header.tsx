import { useState } from "react";
import { Search, LogIn, UserPlus, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-8 h-[var(--header-height)]">
        {/* Logo & Title */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-base md:text-lg font-heading font-bold text-foreground leading-tight">
              R.V.R & J.C College
            </h1>
            <p className="text-xs text-muted-foreground font-body -mt-0.5">Central Library</p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search books, authors, categories..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9 bg-secondary/60 border-border/50 focus:bg-card"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="font-body">
            <LogIn className="w-4 h-4 mr-1.5" />
            Login
          </Button>
          <Button size="sm" className="font-body">
            <UserPlus className="w-4 h-4 mr-1.5" />
            Register
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 animate-fade-in border-t">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="flex-1 font-body">
              <LogIn className="w-4 h-4 mr-1.5" />
              Login
            </Button>
            <Button size="sm" className="flex-1 font-body">
              <UserPlus className="w-4 h-4 mr-1.5" />
              Register
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
