import { useState } from "react";
import { User, Mail, BookOpen, GraduationCap, Hash, Building, Pencil, Camera, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const ProfileSection = () => {
  const [editing, setEditing] = useState(false);
  const [student, setStudent] = useState({
    id: "Y23CD001",
    name: "Ravi Kumar",
    branch: "Computer Science & Engineering",
    year: "2nd Year",
    email: "y23cd001@rvrjc.ac.in",
    phone: "+91 98765 43210",
    booksIssued: 4,
    finesDue: 45,
  });
  const [editData, setEditData] = useState(student);

  const startEdit = () => {
    setEditData(student);
    setEditing(true);
  };

  const saveEdit = () => {
    setStudent(editData);
    setEditing(false);
  };

  const cancelEdit = () => {
    setEditing(false);
  };

  return (
    <div className="space-y-5 animate-fade-in max-w-3xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground font-heading">My Profile</h2>
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

      {/* Avatar & Name */}
      <div className="ios-card p-6 flex items-center gap-5">
        <div className="relative">
          <div className="w-20 h-20 rounded-sm bg-primary/10 flex items-center justify-center">
            <User className="w-10 h-10 text-primary" />
          </div>
          {editing && (
            <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-sm bg-primary text-primary-foreground flex items-center justify-center shadow-md">
              <Camera className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        <div className="flex-1">
          {editing ? (
            <Input value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} className="h-8 text-sm font-bold rounded-sm" />
          ) : (
            <h3 className="text-lg font-bold text-card-foreground">{student.name}</h3>
          )}
          <p className="text-sm text-muted-foreground mt-1">{student.branch}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{student.email}</p>
        </div>
      </div>

      {/* Details */}
      <div className="ios-card divide-y divide-border">
        {[
          { icon: Hash, label: "Student ID", key: "id" as const, editable: true },
          { icon: GraduationCap, label: "Year", key: "year" as const, editable: false },
          { icon: Building, label: "Branch", key: "branch" as const, editable: true },
          { icon: Mail, label: "Email", key: "email" as const, editable: true },
          { icon: BookOpen, label: "Books Issued", key: "booksIssued" as const, editable: false },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-4 px-5 py-4">
            <div className="w-10 h-10 rounded-sm bg-muted flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
              {editing && item.editable ? (
                <Input
                  value={String(editData[item.key])}
                  onChange={(e) => setEditData({ ...editData, [item.key]: e.target.value })}
                  className="h-7 text-sm mt-0.5 rounded-sm"
                />
              ) : (
                <p className="text-sm font-medium text-card-foreground">{String(student[item.key])}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {student.finesDue > 0 && (
        <div className="ios-card p-5 border-destructive/30 bg-destructive/5">
          <p className="text-sm font-semibold text-destructive">Outstanding Fine: ₹{student.finesDue}</p>
          <p className="text-xs text-muted-foreground mt-1">Please clear your fines at the library counter.</p>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
