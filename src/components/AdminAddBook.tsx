import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2, PlusCircle } from "lucide-react";

const categories = ["Computer Science", "Mathematics", "Physics", "Engineering", "Literature", "Economics", "Chemistry", "History"];

const AdminAddBook = () => {
  const [added, setAdded] = useState(false);
  const [form, setForm] = useState({
    title: "", author: "", category: categories[0], publisher: "", isbn: "", price: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setForm({ title: "", author: "", category: categories[0], publisher: "", isbn: "", price: "" });
    }, 2000);
  };

  return (
    <div className="space-y-5 animate-fade-in max-w-3xl mx-auto w-full">
      <h2 className="text-xl font-bold text-foreground font-heading">Add New Book</h2>

      {added ? (
        <div className="ios-card p-10 flex flex-col items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-14 h-14 text-primary" />
          <p className="text-sm font-bold text-primary">Book Added Successfully!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="ios-card p-5 space-y-4">
          {[
            { label: "Title", key: "title", placeholder: "e.g. Introduction to Algorithms" },
            { label: "Author", key: "author", placeholder: "e.g. Thomas H. Cormen" },
            { label: "Publisher", key: "publisher", placeholder: "e.g. Pearson" },
            { label: "ISBN", key: "isbn", placeholder: "e.g. 978-0-262-03384-8" },
            { label: "Price (₹)", key: "price", placeholder: "e.g. 650" },
          ].map((field) => (
            <div key={field.key} className="space-y-1.5">
              <label className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">{field.label}</label>
              <Input
                value={form[field.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                placeholder={field.placeholder}
                className="h-9 rounded-sm text-sm"
                required
              />
            </div>
          ))}

          <div className="space-y-1.5">
            <label className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full h-9 rounded-sm text-sm bg-background border border-input px-3"
            >
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <Button type="submit" className="w-full rounded-sm h-10 text-xs gap-2">
            <PlusCircle className="w-4 h-4" /> Add Book
          </Button>
        </form>
      )}
    </div>
  );
};

export default AdminAddBook;
