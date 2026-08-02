import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BookCard } from "@/components/ui/BookCard";
import poemsData from "@/data/poems.json";
import { WPPost } from "@/utils/utils";

export function CollectionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const poems = poemsData as WPPost[];

  // Find all poems that have a category matching the slug
  const collectionPoems = poems.filter((poem) => {
    const categories = poem._embedded?.["wp:term"]?.[0] || [];
    return categories.some((term) => term.taxonomy === "category" && term.slug === slug);
  });

  // Get the display name of the collection from the first matching poem
  let collectionName = "Collection";
  if (collectionPoems.length > 0) {
    const categories = collectionPoems[0]._embedded?.["wp:term"]?.[0] || [];
    const matchingCategory = categories.find((term) => term.taxonomy === "category" && term.slug === slug);
    if (matchingCategory) {
      collectionName = matchingCategory.name;
    }
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-8 md:px-16 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <Link 
          to="/collections" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors font-ui uppercase text-xs tracking-widest mb-8"
        >
          <ArrowLeft size={16} />
          Back to Collections
        </Link>
        <h1 className="text-4xl md:text-6xl font-heading mb-4 text-text-primary">
          {collectionName}
        </h1>
        <p className="font-ui text-text-secondary tracking-widest uppercase text-sm">
          {collectionPoems.length} {collectionPoems.length === 1 ? "Piece" : "Pieces"}
        </p>
      </div>

      {collectionPoems.length === 0 ? (
        <p className="text-center text-text-secondary font-ui uppercase tracking-widest text-sm mt-32">
          This collection is empty or does not exist.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20 perspective-1000">
          {collectionPoems.map((poem) => (
            <BookCard key={poem.id} post={poem} />
          ))}
        </div>
      )}
    </main>
  );
}
