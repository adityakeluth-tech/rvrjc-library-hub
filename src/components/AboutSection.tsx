import { ExternalLink, MapPin, Award, BookOpen, Users } from "lucide-react";
import collegeLogo from "@/assets/college-logo.jpg";

const AboutSection = () => {
  return (
    <div className="space-y-5 animate-fade-in max-w-2xl">
      <h2 className="text-xl font-bold text-foreground font-heading">About the Library</h2>

      {/* College Card */}
      <div className="ios-card p-5 flex items-start gap-4">
        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white p-1 shadow shrink-0">
          <img src={collegeLogo} alt="RVR&JC Logo" className="w-full h-full object-contain rounded-xl" />
        </div>
        <div>
          <h3 className="text-base font-bold text-card-foreground font-heading">R.V.R & J.C College of Engineering</h3>
          <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
            Established in 1985, R.V.R & J.C College of Engineering is an autonomous institution affiliated to Acharya Nagarjuna University. The college is accredited with NAAC 'A+' Grade and is recognized as one of the premier engineering institutions in Andhra Pradesh.
          </p>
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
          <div key={s.label} className="ios-card p-3 text-center">
            <s.icon className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-sm font-bold text-card-foreground">{s.value}</p>
            <p className="text-[10px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* About Library */}
      <div className="ios-card p-5 space-y-3">
        <h3 className="text-sm font-semibold text-card-foreground">Central Library</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          The Central Library of RVR & JC College houses over 50,000 volumes covering all branches of engineering, science, and humanities. It provides access to national and international journals, e-resources through DELNET, IEEE, Springer, and other digital repositories. The library features a spacious reading hall, a digital library section, and a well-maintained book bank for economically weaker students.
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          With facilities like OPAC (Online Public Access Catalogue), reprographic services, and an internet browsing center, the library serves as the intellectual hub of the campus.
        </p>
      </div>

      {/* Website Link */}
      <a
        href="https://www.rvrjcce.ac.in"
        target="_blank"
        rel="noopener noreferrer"
        className="ios-card p-4 flex items-center gap-3 card-hover group"
      >
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
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
