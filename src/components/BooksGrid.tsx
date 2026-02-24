import { useMemo, useState } from "react";
import { mockBooks, Book } from "@/data/mockBooks";
import BookCard from "@/components/BookCard";
import BookDetailModal from "@/components/BookDetailModal";

interface BooksGridProps {
  searchQuery: string;
}

const BooksGrid = ({ searchQuery }: BooksGridProps) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return mockBooks;
    const q = searchQuery.toLowerCase();
    return mockBooks.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredBooks.map((book, i) => (
          <BookCard key={book.id} book={book} onClick={setSelectedBook} index={i} />
        ))}
        {filteredBooks.length === 0 && (
          <div className="col-span-full py-20 text-center text-muted-foreground font-body">
            No books found matching "{searchQuery}"
          </div>
        )}
      </div>

      <BookDetailModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </>
  );
};

export default BooksGrid;
