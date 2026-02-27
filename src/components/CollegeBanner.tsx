import { Menu } from "lucide-react";
import collegeLogo from "@/assets/college-logo.jpg";

interface CollegeBannerProps {
  onToggleSidebar?: () => void;
}

const CollegeBanner = ({ onToggleSidebar }: CollegeBannerProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(42_70%_50%/0.15),transparent_60%)]" />

      <div className="relative flex items-center gap-3 md:gap-5 px-4 md:px-6 py-3">
        {/* Hamburger menu */}
        <button
          onClick={onToggleSidebar}
          className="shrink-0 w-9 h-9 rounded-sm flex items-center justify-center bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-colors"
          title="Menu"
        >
          <Menu className="w-5 h-5 text-primary-foreground" />
        </button>

        {/* Logo */}
        <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-sm overflow-hidden bg-white/90 p-1 shadow-lg ring-2 ring-white/30">
          <img
            src={collegeLogo}
            alt="RVR & JC College of Engineering Logo"
            className="w-full h-full object-contain rounded-sm"
          />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h1 className="text-xs md:text-base font-bold text-primary-foreground font-heading leading-tight tracking-tight">
            R.V.R &amp; J.C College of Engineering
          </h1>
          <p className="text-[9px] md:text-[11px] text-primary-foreground/80 mt-0.5 font-medium">
            (Autonomous) &bull; Affiliated to Acharya Nagarjuna University
          </p>
          <p className="text-[8px] md:text-[10px] text-primary-foreground/60 mt-0.5 hidden sm:block">
            Sponsored by Nagarjuna Education Society &bull; EAPCET Code: RVJC
          </p>
        </div>

        {/* Accreditation badges */}
        <div className="hidden md:flex shrink-0 items-center gap-1.5">
          {["NAAC A+", "AICTE", "NBA", "ARIIA"].map((badge) => (
            <div
              key={badge}
              className="px-2 py-0.5 rounded-sm bg-white/15 backdrop-blur-sm border border-white/20 text-[9px] font-semibold text-primary-foreground/90"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />
    </div>
  );
};

export default CollegeBanner;
