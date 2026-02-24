import collegeLogo from "@/assets/college-logo.jpg";

const CollegeBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl mx-4 md:mx-6 lg:mx-8 mt-4 mb-2">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(42_70%_50%/0.15),transparent_60%)]" />

      <div className="relative flex items-center gap-4 md:gap-6 px-4 md:px-6 py-4">
        {/* Logo */}
        <div className="shrink-0 w-14 h-14 md:w-[72px] md:h-[72px] rounded-2xl overflow-hidden bg-white/90 p-1.5 shadow-lg ring-2 ring-white/30">
          <img
            src={collegeLogo}
            alt="RVR & JC College of Engineering Logo"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h1 className="text-sm md:text-lg font-bold text-primary-foreground font-heading leading-tight tracking-tight">
            R.V.R &amp; J.C College of Engineering
          </h1>
          <p className="text-[10px] md:text-xs text-primary-foreground/75 mt-0.5 font-medium">
            Central Library &bull; Knowledge is Power
          </p>
          <p className="text-[9px] md:text-[11px] text-primary-foreground/55 mt-0.5 hidden sm:block">
            NAAC A+ Grade &bull; Autonomous &bull; Estd. 1985
          </p>
        </div>

        {/* Decorative element */}
        <div className="hidden md:flex shrink-0 items-center gap-2">
          <div className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[10px] font-semibold text-primary-foreground/90">
            AUTONOMOUS
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeBanner;
