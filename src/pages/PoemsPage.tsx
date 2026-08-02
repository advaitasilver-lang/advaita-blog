import { useEffect, useState } from "react";
import { fetchPoems } from "@/utils/wordpress";
import { BookCard } from "@/components/ui/BookCard";

export function PoemsPage() {
  const [poems, setPoems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPoems() {
      try {
        const data = await fetchPoems();
        setPoems(data);
      } catch (error) {
        console.error("Failed to load poems:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPoems();
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-24 px-8 md:px-16 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-text-secondary drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          The Library
        </h1>
        <p className="text-text-secondary font-body italic text-lg md:text-xl max-w-2xl mx-auto">
          Choose a book to read its secrets.
        </p>
      </div>
      
      {loading ? (
        <p className="text-center text-text-secondary font-ui uppercase tracking-widest text-sm">Loading library...</p>
      ) : poems.length === 0 ? (
        <p className="text-center text-text-secondary font-ui uppercase tracking-widest text-sm">The library is empty at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20 perspective-1000">
          {poems.map((poem) => (
            <BookCard key={poem.id} post={poem} />
          ))}
        </div>
      )}
    </main>
  );
}
