import { useState, useEffect } from "react";
import { User, Mail, BookOpen, GraduationCap, Hash, Building, Pencil, Camera, Check, X, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getStudentName, branchFullNames, getStudentYear } from "@/data/studentNames";

const ProfileSection = () => {
  const [editing, setEditing] = useState(false);

  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;
  const userId = user?.id || "y23cd001";

  // Parse student info from ID
  const joinYear = userId.substring(1, 3); // "23"
  const branchCode = userId.substring(3, 5); // "cd"
  const studentNum = parseInt(userId.substring(5)); // 1-50
  const branchName = branchFullNames[branchCode] || user?.branch || "Unknown";
  const year = getStudentYear(joinYear);
  const defaultName = getStudentName(studentNum);

  const [student, setStudent] = useState({
    id: userId.toUpperCase(),
    name: defaultName,
    branch: branchName,
    year,
    email: `${userId}@rvrjc.ac.in`,
    phone: "+91 98765 43210",
    booksIssued: 4,
  });
  const [editData, setEditData] = useState(student);

  useEffect(() => {
    const savedProfile = localStorage.getItem(`profile_${userId}`);
    if (savedProfile) {
      setStudent(JSON.parse(savedProfile));
    }
  }, [userId]);

  const startEdit = () => {
    setEditData(student);
    setEditing(true);
  };

  const saveEdit = () => {
    setStudent(editData);
    localStorage.setItem(`profile_${userId}`, JSON.stringify(editData));
    setEditing(false);
  };

  const cancelEdit = () => setEditing(false);

  return (
    <div className="space-y-5 animate-fade-in max-w-2xl mx-auto w-full">
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
          <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center">
            <User className="w-10 h-10 text-primary" />
          </div>
          {editing && (
            <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
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
          <p className="text-xs text-muted-foreground mt-0.5">{student.year}</p>
        </div>
      </div>

      {/* Details */}
      <div className="ios-card divide-y divide-border">
        {[
          { icon: Hash, label: "Student ID", key: "id" as const, editable: true },
          { icon: GraduationCap, label: "Year", key: "year" as const, editable: false },
          { icon: Building, label: "Branch", key: "branch" as const, editable: true },
          { icon: Mail, label: "Email", key: "email" as const, editable: true },
          { icon: Phone, label: "Phone", key: "phone" as const, editable: true },
          { icon: BookOpen, label: "Books Issued", key: "booksIssued" as const, editable: false },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-4 px-5 py-4">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
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
    </div>
  );
};

export default ProfileSection;
