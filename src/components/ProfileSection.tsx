import { User, Mail, BookOpen, GraduationCap, Hash, Building } from "lucide-react";

const ProfileSection = () => {
  const student = {
    id: "Y23CD001",
    name: "Ravi Kumar",
    branch: "Computer Science & Engineering",
    year: "2nd Year",
    email: "y23cd001@rvrjc.ac.in",
    phone: "+91 98765 43210",
    booksIssued: 4,
    finesDue: 45,
  };

  return (
    <div className="space-y-5 animate-fade-in max-w-lg">
      <h2 className="text-xl font-bold text-foreground font-heading">My Profile</h2>

      {/* Avatar & Name */}
      <div className="ios-card p-5 flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
          <User className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-card-foreground">{student.name}</h3>
          <p className="text-xs text-muted-foreground">{student.branch}</p>
        </div>
      </div>

      {/* Details */}
      <div className="ios-card divide-y divide-border">
        {[
          { icon: Hash, label: "Student ID", value: student.id },
          { icon: GraduationCap, label: "Year", value: student.year },
          { icon: Building, label: "Branch", value: student.branch },
          { icon: Mail, label: "Email", value: student.email },
          { icon: BookOpen, label: "Books Issued", value: String(student.booksIssued) },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3 px-4 py-3">
            <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <item.icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
              <p className="text-sm font-medium text-card-foreground">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {student.finesDue > 0 && (
        <div className="ios-card p-4 border-destructive/30 bg-destructive/5">
          <p className="text-xs font-semibold text-destructive">Outstanding Fine: ₹{student.finesDue}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Please clear your fines at the library counter.</p>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
