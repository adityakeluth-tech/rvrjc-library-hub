import { useState, useEffect } from "react";
import { Pencil, Check, X, ExternalLink, MapPin, Award, BookOpen, Users, GraduationCap, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import collegeLogo from "@/assets/college-logo.jpg";
import collegeCampus from "@/assets/college-campus.jpg";
import collegeLibrary from "@/assets/college-library.jpg";

const defaultAbout = {
  collegeName: "R.V.R & J.C College of Engineering",
  tagline: "(Autonomous) · Affiliated to Acharya Nagarjuna University",
  description: "Established in 1985, R.V.R & J.C College of Engineering is an autonomous institution sponsored by Nagarjuna Education Society. The college is accredited with NAAC 'A+' Grade and is recognized as one of the premier engineering institutions in Andhra Pradesh. EAPCET Code: RVJC.",
  libraryDesc: "The Central Library houses over 50,000 volumes covering all branches of engineering, science, and humanities. It provides access to national and international journals, e-resources through DELNET, IEEE, Springer, and other digital repositories.",
  libraryFacilities: "Facilities include OPAC (Online Public Access Catalogue), reprographic services, and an internet browsing center.",
  website: "https://www.rvrjcce.ac.in",
  books: "50,000+",
  students: "4,500+",
  location: "Guntur, AP",
};

const AdminEditAbout = () => {
  const [editing, setEditing] = useState(false);
  const [about, setAbout] = useState(defaultAbout);
  const [editData, setEditData] = useState(defaultAbout);

  useEffect(() => {
    const saved = localStorage.getItem("about_content");
    if (saved) setAbout(JSON.parse(saved));
  }, []);

  const startEdit = () => { setEditData(about); setEditing(true); };
  const saveEdit = () => {
    setAbout(editData);
    localStorage.setItem("about_content", JSON.stringify(editData));
    setEditing(false);
  };
  const cancelEdit = () => setEditing(false);

  return (
    <div className="space-y-4 animate-fade-in max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground font-heading">Edit About Section</h2>
        {!editing ? (
          <button onClick={startEdit} className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
            <Pencil className="w-3.5 h-3.5" /> Edit
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button onClick={saveEdit} className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
              <Check className="w-3.5 h-3.5" /> Save
            </button>
            <button onClick={cancelEdit} className="flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:underline">
              <X className="w-3.5 h-3.5" /> Cancel
            </button>
          </div>
        )}
      </div>

      {/* College Card */}
      <div className="ios-card-minimal p-6 flex items-start gap-5">
        <div className="w-20 h-20 rounded-sm overflow-hidden bg-white p-2 shadow shrink-0">
          <img src={collegeLogo} alt="RVR&JC Logo" className="w-full h-full object-contain rounded-sm" />
        </div>
        <div className="flex-1 space-y-2">
          {editing ? (
            <>
              <Input value={editData.collegeName} onChange={(e) => setEditData({ ...editData, collegeName: e.target.value })} className="h-8 text-sm font-bold rounded-sm" />
              <Input value={editData.tagline} onChange={(e) => setEditData({ ...editData, tagline: e.target.value })} className="h-7 text-xs rounded-sm" />
              <Textarea value={editData.description} onChange={(e) => setEditData({ ...editData, description: e.target.value })} className="text-sm rounded-sm min-h-[80px]" />
            </>
          ) : (
            <>
              <h3 className="text-lg font-bold text-card-foreground font-heading">{about.collegeName}</h3>
              <p className="text-xs text-muted-foreground font-medium">{about.tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{about.description}</p>
            </>
          )}
        </div>
      </div>

      {/* Accreditations */}
      <div className="ios-card-minimal p-6 space-y-4">
        <h3 className="text-sm font-semibold text-card-foreground flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-primary" /> Accreditations & Affiliations
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

      {/* Photos */}
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
        {editing ? (
          <>
            <div className="ios-card-minimal p-4 text-center space-y-1">
              <BookOpen className="w-6 h-6 text-primary mx-auto" />
              <Input value={editData.books} onChange={(e) => setEditData({ ...editData, books: e.target.value })} className="h-7 text-center text-sm rounded-sm" />
              <p className="text-xs text-muted-foreground">Books</p>
            </div>
            <div className="ios-card-minimal p-4 text-center space-y-1">
              <Users className="w-6 h-6 text-primary mx-auto" />
              <Input value={editData.students} onChange={(e) => setEditData({ ...editData, students: e.target.value })} className="h-7 text-center text-sm rounded-sm" />
              <p className="text-xs text-muted-foreground">Students</p>
            </div>
            <div className="ios-card-minimal p-4 text-center space-y-1">
              <Award className="w-6 h-6 text-primary mx-auto" />
              <p className="text-base font-bold text-card-foreground">NAAC A+</p>
              <p className="text-xs text-muted-foreground">Accreditation</p>
            </div>
            <div className="ios-card-minimal p-4 text-center space-y-1">
              <MapPin className="w-6 h-6 text-primary mx-auto" />
              <Input value={editData.location} onChange={(e) => setEditData({ ...editData, location: e.target.value })} className="h-7 text-center text-sm rounded-sm" />
              <p className="text-xs text-muted-foreground">Location</p>
            </div>
          </>
        ) : (
          [
            { icon: BookOpen, label: "Books", value: about.books },
            { icon: Users, label: "Students", value: about.students },
            { icon: Award, label: "Accreditation", value: "NAAC A+" },
            { icon: MapPin, label: "Location", value: about.location },
          ].map((s) => (
            <div key={s.label} className="ios-card-minimal p-4 text-center">
              <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-base font-bold text-card-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))
        )}
      </div>

      {/* Library description */}
      <div className="ios-card-minimal p-6 space-y-3">
        <h3 className="text-sm font-semibold text-card-foreground">Central Library</h3>
        {editing ? (
          <>
            <Textarea value={editData.libraryDesc} onChange={(e) => setEditData({ ...editData, libraryDesc: e.target.value })} className="text-sm rounded-sm min-h-[60px]" />
            <Textarea value={editData.libraryFacilities} onChange={(e) => setEditData({ ...editData, libraryFacilities: e.target.value })} className="text-sm rounded-sm min-h-[40px]" />
          </>
        ) : (
          <>
            <p className="text-sm text-muted-foreground leading-relaxed">{about.libraryDesc}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{about.libraryFacilities}</p>
          </>
        )}
      </div>

      {/* Website */}
      <div className="ios-card-minimal p-5 flex items-center gap-3">
        <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
          <ExternalLink className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          {editing ? (
            <Input value={editData.website} onChange={(e) => setEditData({ ...editData, website: e.target.value })} className="h-7 text-sm rounded-sm" />
          ) : (
            <a href={about.website} target="_blank" rel="noopener noreferrer" className="block">
              <p className="text-sm font-semibold text-card-foreground">Visit College Website</p>
              <p className="text-xs text-muted-foreground">{about.website.replace("https://www.", "")}</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminEditAbout;
