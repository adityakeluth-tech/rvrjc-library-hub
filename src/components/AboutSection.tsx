import { ExternalLink, MapPin, Award, BookOpen, Users, GraduationCap, Building2 } from "lucide-react";
import collegeLogo from "@/assets/college-logo.jpg";
import collegeCampus from "@/assets/college-campus.jpg";
import collegeLibrary from "@/assets/college-library.jpg";

const AboutSection = () => {
  return (
    <div className="space-y-4 animate-fade-in max-w-5xl mx-auto">
      <h2 className="text-xl font-bold text-foreground font-heading">About the Library</h2>

      {/* College Card */}
      <div className="ios-card-minimal p-6 flex items-start gap-5">
        <div className="w-20 h-20 rounded-sm overflow-hidden bg-white p-2 shadow shrink-0">
          <img src={collegeLogo} alt="RVR&JC Logo" className="w-full h-full object-contain rounded-sm" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-card-foreground font-heading">R.V.R & J.C College of Engineering</h3>
          <p className="text-xs text-muted-foreground mt-1 font-medium">
            (Autonomous) &bull; Affiliated to Acharya Nagarjuna University
          </p>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Established in 1985, R.V.R & J.C College of Engineering is an autonomous institution sponsored by Nagarjuna Education Society. The college is accredited with NAAC 'A+' Grade and is recognized as one of the premier engineering institutions in Andhra Pradesh. EAPCET Code: RVJC.
          </p>
        </div>
      </div>

      {/* Accreditations & Affiliations */}
      <div className="ios-card-minimal p-6 space-y-4">
        <h3 className="text-sm font-semibold text-card-foreground flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-primary" />
          Accreditations & Affiliations
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "NAAC", value: "A+ Grade" },
            { label: "AICTE", value: "Approved" },
            { label: "NBA", value: "Accredited" },
            { label: "ARIIA", value: "Ranked" },
          ].map((item) => (
            <div key={item.label} className="bg-muted/50 rounded-sm p-4 text-center">
              <p className="text-base font-bold text-primary">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-muted/50 rounded-sm p-4 flex items-center gap-3">
            <Building2 className="w-5 h-5 text-primary shrink-0" />
            <div>
              <p className="text-sm font-semibold text-card-foreground">Affiliated to</p>
              <p className="text-xs text-muted-foreground">Acharya Nagarjuna University</p>
            </div>
          </div>
          <div className="bg-muted/50 rounded-sm p-4 flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-primary shrink-0" />
            <div>
              <p className="text-sm font-semibold text-card-foreground">Sponsored by</p>
              <p className="text-xs text-muted-foreground">Nagarjuna Education Society</p>
            </div>
          </div>
        </div>
      </div>

      {/* College Photos */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-sm overflow-hidden h-56">
          <img src={collegeCampus} alt="College Campus" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-sm overflow-hidden h-56">
          <img src={collegeLibrary} alt="Library Interior" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { icon: BookOpen, label: "Books", value: "50,000+" },
          { icon: Users, label: "Students", value: "4,500+" },
          { icon: Award, label: "Accreditation", value: "NAAC A+" },
          { icon: MapPin, label: "Location", value: "Guntur, AP" },
        ].map((s) => (
          <div key={s.label} className="ios-card-minimal p-4 text-center">
            <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-base font-bold text-card-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* About Library */}
      <div className="ios-card-minimal p-6 space-y-3">
        <h3 className="text-sm font-semibold text-card-foreground">Central Library</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The Central Library houses over 50,000 volumes covering all branches of engineering, science, and humanities. It provides access to national and international journals, e-resources through DELNET, IEEE, Springer, and other digital repositories. The library features a spacious reading hall, a digital library section, and a well-maintained book bank.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Facilities include OPAC (Online Public Access Catalogue), reprographic services, and an internet browsing center.
        </p>
      </div>

      {/* Website Link */}
      <a
        href="https://www.rvrjcce.ac.in"
        target="_blank"
        rel="noopener noreferrer"
        className="ios-card-minimal p-5 flex items-center gap-3 card-hover group"
      >
        <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
          <ExternalLink className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-card-foreground">Visit College Website</p>
          <p className="text-xs text-muted-foreground">www.rvrjcce.ac.in</p>
        </div>
      </a>
    </div>
  );
};

export default AboutSection;
