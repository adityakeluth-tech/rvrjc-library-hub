import cover1 from "@/assets/covers/cover-1.jpg";
import cover2 from "@/assets/covers/cover-2.jpg";
import cover3 from "@/assets/covers/cover-3.jpg";
import cover4 from "@/assets/covers/cover-4.jpg";
import cover5 from "@/assets/covers/cover-5.jpg";

export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  publisher: string;
  isbn: string;
  price: number;
  description: string;
  available: boolean;
  coverColor: string;
  coverImage?: string;
}

const categories = ["Computer Science", "Mathematics", "Physics", "Literature", "Engineering", "Economics", "History", "Chemistry"];

const authors = [
  "Thomas H. Cormen", "James Stewart", "Robert C. Martin", "Martin Fowler",
  "Andrew S. Tanenbaum", "Halliday & Resnick", "Kenneth Rosen", "William Stallings",
  "Abraham Silberschatz", "Dennis Ritchie", "Bjarne Stroustrup", "Joshua Bloch",
  "Herbert Schildt", "Eric Matthes", "Jon Kleinberg", "Sedgewick & Wayne",
  "Peter Norvig", "Sheldon Ross", "Gilbert Strang", "David Patterson",
  "Andrew Ng", "Christopher Bishop", "Ian Goodfellow", "Stuart Russell", "Douglas Hofstadter",
  "Behrouz Forouzan", "Ramez Elmasri", "B.C. Punmia", "R.K. Rajput", "S.S. Rattan",
  "Morris Mano", "Pressman", "Galvin", "Hamming", "Knuth",
  "Linus Torvalds", "Venugopal", "Balagurusamy", "Yashavant Kanetkar", "Schildt"
];

const titles = [
  "Introduction to Algorithms", "Calculus: Early Transcendentals", "Clean Code",
  "Refactoring", "Computer Networks", "Fundamentals of Physics", "Discrete Mathematics",
  "Operating Systems", "Database System Concepts", "The C Programming Language",
  "The C++ Programming Language", "Effective Java", "Java: Complete Reference",
  "Python Crash Course", "Algorithm Design", "Algorithms",
  "Artificial Intelligence", "Probability & Statistics", "Linear Algebra",
  "Computer Organization", "Machine Learning Yearning", "Pattern Recognition",
  "Deep Learning", "AI: A Modern Approach", "Gödel, Escher, Bach",
  "Data Communications & Networking", "Database Systems", "Strength of Materials",
  "Thermal Engineering", "Theory of Machines",
  "Digital Logic Design", "Software Engineering", "Operating System Concepts",
  "Coding Theory", "The Art of Programming",
  "Linux Kernel Development", "Data Structures with C", "Programming in ANSI C",
  "Let Us C", "Java: A Beginner's Guide"
];

const covers = [cover1, cover2, cover3, cover4, cover5];

const colors = [
  "from-primary/80 to-primary/40",
  "from-accent/80 to-accent/40",
  "from-primary/60 to-accent/50",
  "from-accent/60 to-primary/40",
  "from-primary/70 to-primary/30",
];

export const mockBooks: Book[] = titles.map((title, i) => ({
  id: i + 1,
  title,
  author: authors[i],
  category: categories[i % categories.length],
  publisher: ["Pearson", "McGraw-Hill", "O'Reilly", "Wiley", "Springer"][i % 5],
  isbn: `978-0-${String(Math.floor(Math.random() * 9000) + 1000)}-${String(Math.floor(Math.random() * 9000) + 1000)}-${i}`,
  price: Math.floor(Math.random() * 800) + 200,
  description: `A comprehensive guide to ${title.toLowerCase()} covering fundamental concepts, practical applications, and advanced topics. Widely used in universities and recommended for undergraduate and postgraduate students.`,
  available: Math.random() > 0.3,
  coverColor: colors[i % colors.length],
  coverImage: covers[i % covers.length],
}));
