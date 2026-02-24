import { mockBooks } from "@/data/mockBooks";
import {
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { BookOpen, Users, TrendingUp, BookMarked } from "lucide-react";

const COLORS = [
  "hsl(220, 55%, 28%)",
  "hsl(152, 28%, 42%)",
  "hsl(40, 45%, 55%)",
  "hsl(0, 72%, 51%)",
  "hsl(220, 40%, 50%)",
  "hsl(152, 35%, 55%)",
  "hsl(30, 60%, 50%)",
  "hsl(280, 30%, 45%)",
];

// Derived data
const categoryData = Object.entries(
  mockBooks.reduce<Record<string, number>>((acc, b) => {
    acc[b.category] = (acc[b.category] || 0) + 1;
    return acc;
  }, {})
).map(([name, value]) => ({ name, value }));

const topBooks = mockBooks.slice(0, 8).map((b) => ({
  name: b.title.length > 18 ? b.title.slice(0, 18) + "…" : b.title,
  issues: Math.floor(Math.random() * 50) + 10,
}));

const dailyTrends = Array.from({ length: 14 }, (_, i) => ({
  day: `Day ${i + 1}`,
  issues: Math.floor(Math.random() * 30) + 5,
}));

const stats = [
  { label: "Total Books", value: mockBooks.length, icon: BookOpen },
  { label: "Available", value: mockBooks.filter((b) => b.available).length, icon: BookMarked },
  { label: "Issued", value: mockBooks.filter((b) => !b.available).length, icon: TrendingUp },
  { label: "Students", value: 1240, icon: Users },
];

const AnalyticsDashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-heading font-bold text-foreground">Analytics Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border bg-card p-4 flex items-center gap-3 card-hover"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold font-body text-card-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground font-body">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="rounded-lg border bg-card p-4">
          <h3 className="text-sm font-semibold font-body mb-4 text-card-foreground">Most Issued Books</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={topBooks}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,20%,88%)" />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="issues" fill="hsl(220,55%,28%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="rounded-lg border bg-card p-4">
          <h3 className="text-sm font-semibold font-body mb-4 text-card-foreground">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label={({ name }) => name}
              >
                {categoryData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line Chart */}
      <div className="rounded-lg border bg-card p-4">
        <h3 className="text-sm font-semibold font-body mb-4 text-card-foreground">Daily Issue Trends</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={dailyTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,20%,88%)" />
            <XAxis dataKey="day" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="issues"
              stroke="hsl(152,28%,42%)"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
