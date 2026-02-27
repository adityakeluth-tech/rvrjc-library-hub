import { useMemo, useState } from "react";
import { mockBooks, Book } from "@/data/mockBooks";
import BookCard from "@/components/BookCard";
import BookDetailModal from "@/components/BookDetailModal";
import { ChevronDown, ChevronUp } from "lucide-react";

interface BooksGridProps {
  searchQuery: string;
  categoryFilter?: string;
}

const INITIAL_COUNT = 8;

const BooksGrid = ({ searchQuery, categoryFilter = "All" }: BooksGridProps) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredBooks = useMemo(() => {
    let books = mockBooks;
    if (categoryFilter !== "All") {
      books = books.filter((b) => b.category === categoryFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      books = books.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q)
      );
    }
    return books;
  }, [searchQuery, categoryFilter]);

  const displayedBooks = showAll ? filteredBooks : filteredBooks.slice(0, INITIAL_COUNT);
  const hasMore = filteredBooks.length > INITIAL_COUNT;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
        {displayedBooks.map((book, i) => (
          <BookCard key={book.id} book={book} onClick={setSelectedBook} index={i} />
        ))}
        {filteredBooks.length === 0 && (
          <div className="col-span-full py-20 text-center text-muted-foreground">
            No books found
          </div>
        )}
      </div>

      {hasMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline mt-3"
        >
          {showAll ? "Show Less" : `More (${filteredBooks.length - INITIAL_COUNT} more)`}
          {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      )}

      <BookDetailModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </>
  );
};

export default BooksGrid;
