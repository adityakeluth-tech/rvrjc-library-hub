import { useState } from "react";
import { UserPlus, Users, Search, Trash2, Shield, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface UserEntry {
  id: string;
  name: string;
  role: "student" | "admin";
  branch?: string;
}

const initialUsers: UserEntry[] = [
  { id: "Y23CD001", name: "Ravi Kumar", role: "student", branch: "Data Science" },
  { id: "Y23CS010", name: "Rahul Verma", role: "student", branch: "CSE" },
  { id: "Y23AI003", name: "Aditya Reddy", role: "student", branch: "AIML" },
  { id: "Y23IO015", name: "Kavya Sharma", role: "student", branch: "IoT" },
  { id: "admin@123", name: "Library Admin", role: "admin" },
];

const AdminManageStudents = () => {
  const [users, setUsers] = useState<UserEntry[]>(initialUsers);
  const [search, setSearch] = useState("");
  const [adding, setAdding] = useState(false);
  const [newUser, setNewUser] = useState({ id: "", name: "", role: "student" as "student" | "admin", branch: "" });

  const filtered = users.filter(
    (u) => u.id.toLowerCase().includes(search.toLowerCase()) || u.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({ id: "", name: "", role: "student", branch: "" });
    setAdding(false);
  };

  const handleDelete = (id: string) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="space-y-5 animate-fade-in max-w-3xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground font-heading">Manage Users</h2>
        <div className="flex items-center gap-2">
          <div className="relative w-40">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 h-8 rounded-sm bg-muted/60 border-0 text-xs"
            />
          </div>
          <Button onClick={() => setAdding(!adding)} size="sm" className="h-8 text-xs gap-1 rounded-sm">
            <UserPlus className="w-3.5 h-3.5" /> Add User
          </Button>
        </div>
      </div>

      {adding && (
        <form onSubmit={handleAdd} className="ios-card p-5 space-y-3 animate-fade-in">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">User ID</label>
              <Input value={newUser.id} onChange={(e) => setNewUser({ ...newUser, id: e.target.value })} placeholder="e.g. Y23CD051" className="h-8 text-xs rounded-sm" required />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Name</label>
              <Input value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} placeholder="Full Name" className="h-8 text-xs rounded-sm" required />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Role</label>
              <select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value as "student" | "admin" })} className="w-full h-8 rounded-sm text-xs bg-background border border-input px-2">
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {newUser.role === "student" && (
              <div className="space-y-1">
                <label className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Branch</label>
                <Input value={newUser.branch} onChange={(e) => setNewUser({ ...newUser, branch: e.target.value })} placeholder="e.g. Data Science" className="h-8 text-xs rounded-sm" />
              </div>
            )}
          </div>
          <Button type="submit" size="sm" className="h-8 text-xs rounded-sm">Add</Button>
        </form>
      )}

      <div className="space-y-2">
        {filtered.map((user) => (
          <div key={user.id} className="ios-card p-4 flex items-center gap-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${user.role === "admin" ? "bg-accent/20" : "bg-primary/10"}`}>
              {user.role === "admin" ? <Shield className="w-5 h-5 text-accent-foreground" /> : <GraduationCap className="w-5 h-5 text-primary" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-card-foreground">{user.name}</h4>
                <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-sm ${user.role === "admin" ? "bg-accent/20 text-accent-foreground" : "bg-primary/10 text-primary"}`}>
                  {user.role}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground">{user.id}{user.branch ? ` • ${user.branch}` : ""}</p>
            </div>
            <button onClick={() => handleDelete(user.id)} className="p-2 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminManageStudents;
