import { ExternalLink, MapPin, Award, BookOpen, Users } from "lucide-react";
import collegeLogo from "@/assets/college-logo.jpg";
import collegeCampus from "@/assets/college-campus.jpg";
import collegeLibrary from "@/assets/college-library.jpg";

const AboutSection = () => {
  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-bold text-foreground font-heading">About the Library</h2>

      {/* College Card */}
      <div className="ios-card-minimal p-5 flex items-start gap-4">
        <div className="w-16 h-16 rounded-sm overflow-hidden bg-white p-1.5 shadow shrink-0">
          <img src={collegeLogo} alt="RVR&JC Logo" className="w-full h-full object-contain rounded-sm" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-card-foreground font-heading">R.V.R & J.C College of Engineering</h3>
          <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
            Established in 1985, R.V.R & J.C College of Engineering is an autonomous institution affiliated to Acharya Nagarjuna University. The college is accredited with NAAC 'A+' Grade and is recognized as one of the premier engineering institutions in Andhra Pradesh.
          </p>
        </div>
      </div>

      {/* College Photos */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-sm overflow-hidden h-44">
          <img src={collegeCampus} alt="College Campus" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-sm overflow-hidden h-44">
          <img src={collegeLibrary} alt="Library Interior" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[
          { icon: BookOpen, label: "Books", value: "50,000+" },
          { icon: Users, label: "Students", value: "4,500+" },
          { icon: Award, label: "Accreditation", value: "NAAC A+" },
          { icon: MapPin, label: "Location", value: "Guntur, AP" },
        ].map((s) => (
          <div key={s.label} className="ios-card-minimal p-3 text-center">
            <s.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
            <p className="text-sm font-bold text-card-foreground">{s.value}</p>
            <p className="text-[10px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* About Library */}
      <div className="ios-card-minimal p-5 space-y-3">
        <h3 className="text-sm font-semibold text-card-foreground">Central Library</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          The Central Library houses over 50,000 volumes covering all branches of engineering, science, and humanities. It provides access to national and international journals, e-resources through DELNET, IEEE, Springer, and other digital repositories. The library features a spacious reading hall, a digital library section, and a well-maintained book bank.
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Facilities include OPAC (Online Public Access Catalogue), reprographic services, and an internet browsing center.
        </p>
      </div>

      {/* Website Link */}
      <a
        href="https://www.rvrjcce.ac.in"
        target="_blank"
        rel="noopener noreferrer"
        className="ios-card-minimal p-4 flex items-center gap-3 card-hover group"
      >
        <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
          <ExternalLink className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-card-foreground">Visit College Website</p>
          <p className="text-[10px] text-muted-foreground">www.rvrjcce.ac.in</p>
        </div>
      </a>
    </div>
  );
};

export default AboutSection;
