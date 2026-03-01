import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Trash2, Plus, CheckCircle2 } from "lucide-react";

const AdminManageUpdates = () => {
  const [notices, setNotices] = useState([
    "Library timings extended to 10 PM during exams (March 1–15).",
    "New e-resources section added — access IEEE & Springer journals online.",
    "Book donation drive on March 20 — contribute old textbooks!",
  ]);
  const [newNotice, setNewNotice] = useState("");
  const [saved, setSaved] = useState(false);

  const addNotice = () => {
    if (newNotice.trim()) {
      setNotices([newNotice.trim(), ...notices]);
      setNewNotice("");
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    }
  };

  const removeNotice = (i: number) => {
    setNotices(notices.filter((_, idx) => idx !== i));
  };

  return (
    <div className="space-y-5 animate-fade-in max-w-3xl mx-auto w-full">
      <h2 className="text-xl font-bold text-foreground font-heading">Manage Updates & Notices</h2>

      {/* Add new notice */}
      <div className="ios-card p-4 space-y-3">
        <h3 className="text-sm font-semibold text-card-foreground flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" /> Add Notice
        </h3>
        <div className="flex gap-2">
          <Input
            value={newNotice}
            onChange={(e) => setNewNotice(e.target.value)}
            placeholder="Type a new notice..."
            className="h-9 rounded-sm text-sm flex-1"
          />
          <Button onClick={addNotice} size="sm" className="rounded-sm gap-1 h-9">
            <Plus className="w-3.5 h-3.5" /> Add
          </Button>
        </div>
        {saved && (
          <p className="text-xs text-primary flex items-center gap-1 animate-fade-in">
            <CheckCircle2 className="w-3.5 h-3.5" /> Notice added!
          </p>
        )}
      </div>

      {/* Current notices */}
      <div className="ios-card p-4 space-y-3">
        <h3 className="text-sm font-semibold text-card-foreground">Current Notices</h3>
        <ul className="space-y-2">
          {notices.map((n, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span className="flex-1">{n}</span>
              <button onClick={() => removeNotice(i)} className="shrink-0 p-1 rounded-sm hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminManageUpdates;
