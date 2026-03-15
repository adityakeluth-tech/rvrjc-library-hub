import { useState, useEffect } from "react";
import { Shield, Mail, Hash, Pencil, Check, X, Phone, User, Building } from "lucide-react";
import { Input } from "@/components/ui/input";

const AdminProfile = () => {
  const [editing, setEditing] = useState(false);

  const [admin, setAdmin] = useState({
    name: "Dr. K. Ramesh Babu",
    id: "admin@123",
    role: "Administrator",
    email: "admin@rvrjc.ac.in",
    phone: "+91 98765 00001",
    department: "Central Library",
    designation: "Chief Librarian",
  });
  const [editData, setEditData] = useState(admin);

  useEffect(() => {
    const saved = localStorage.getItem("admin_profile");
    if (saved) setAdmin(JSON.parse(saved));
  }, []);

  const startEdit = () => { setEditData(admin); setEditing(true); };
  const saveEdit = () => {
    setAdmin(editData);
    localStorage.setItem("admin_profile", JSON.stringify(editData));
    setEditing(false);
  };
  const cancelEdit = () => setEditing(false);

  return (
    <div className="space-y-5 animate-fade-in max-w-2xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground font-heading">Admin Profile</h2>
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
            <Shield className="w-10 h-10 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          {editing ? (
            <Input value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} className="h-8 text-sm font-bold rounded-sm" />
          ) : (
            <h3 className="text-lg font-bold text-card-foreground">{admin.name}</h3>
          )}
          <div className="flex items-center gap-2 mt-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-sm">
              <Shield className="w-3 h-3" /> {admin.role}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{admin.designation}</p>
        </div>
      </div>

      {/* Details */}
      <div className="ios-card divide-y divide-border">
        {[
          { icon: Hash, label: "Admin ID", key: "id" as const, editable: false },
          { icon: Shield, label: "Role", key: "role" as const, editable: false },
          { icon: Building, label: "Department", key: "department" as const, editable: true },
          { icon: User, label: "Designation", key: "designation" as const, editable: true },
          { icon: Mail, label: "Email", key: "email" as const, editable: true },
          { icon: Phone, label: "Phone", key: "phone" as const, editable: true },
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
                <p className="text-sm font-medium text-card-foreground">{String(admin[item.key])}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProfile;
