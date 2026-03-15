import { LogIn, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-xl">
      <div className="flex items-center justify-end px-4 md:px-6 h-12">
        <div className="hidden md:flex items-center gap-1.5">
          <Button variant="ghost" size="sm" className="rounded-lg text-xs h-8 px-3">
            <LogIn className="w-3.5 h-3.5 mr-1" />
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
