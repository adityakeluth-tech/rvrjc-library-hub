import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, User, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import collegeLogo from "@/assets/college-logo.jpg";

const STUDENTS: Record<string, string> = {
  y23cd001: "y23cd001",
  y23cd002: "y23cd002",
  y23cd003: "y23cd003",
  y23cd004: "y23cd004",
  y23cd005: "y23cd005",
};

const ADMIN = { id: "admin", password: "admin123" };

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"student" | "admin">("student");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const uid = userId.toLowerCase().trim();
    const pwd = password.trim();

    if (role === "student") {
      if (STUDENTS[uid] && STUDENTS[uid] === pwd) {
        localStorage.setItem("user", JSON.stringify({ role: "student", id: uid }));
        navigate("/");
      } else {
        setError("Invalid College ID or Password");
      }
    } else {
      if (uid === ADMIN.id && pwd === ADMIN.password) {
        localStorage.setItem("user", JSON.stringify({ role: "admin", id: uid }));
        navigate("/");
      } else {
        setError("Invalid Admin credentials");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-sm overflow-hidden bg-card shadow-md p-1.5">
            <img src={collegeLogo} alt="RVR & JC" className="w-full h-full object-contain" />
          </div>
          <div className="text-center">
            <h1 className="text-lg font-bold text-foreground font-heading">Central Library</h1>
            <p className="text-xs text-muted-foreground">R.V.R &amp; J.C College of Engineering</p>
          </div>
        </div>

        {/* Role toggle */}
        <div className="flex rounded-sm overflow-hidden border border-border">
          <button
            onClick={() => { setRole("student"); setError(""); }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold transition-colors ${
              role === "student" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            <User className="w-3.5 h-3.5" /> Student
          </button>
          <button
            onClick={() => { setRole("admin"); setError(""); }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold transition-colors ${
              role === "admin" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            <Shield className="w-3.5 h-3.5" /> Admin
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="ios-card p-5 space-y-4">
          <div className="space-y-1.5">
            <label className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">
              {role === "student" ? "College ID" : "Admin ID"}
            </label>
            <Input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder={role === "student" ? "e.g. Y23CD001" : "admin"}
              className="h-9 rounded-sm text-sm"
              required
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={role === "student" ? "Same as College ID" : "Enter password"}
              className="h-9 rounded-sm text-sm"
              required
            />
          </div>

          {error && (
            <p className="text-xs text-destructive font-medium">{error}</p>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 h-10 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <LogIn className="w-4 h-4" /> Sign In
          </button>
        </form>

        <p className="text-center text-[10px] text-muted-foreground">
          Students: Use your College ID as both username &amp; password
        </p>
      </div>
    </div>
  );
};

export default Login;
