import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import poemsData from "@/data/poems.json";
import { WPPost } from "@/utils/utils";

export function CollectionsPage() {
  const poems = poemsData as WPPost[];

  // Extract and count categories
  const categoryMap = new Map<string, { slug: string; count: number }>();

  poems.forEach((poem) => {
    const categories = poem._embedded?.["wp:term"]?.[0] || [];
    categories.forEach((term) => {
      if (term.taxonomy === "category" && term.name !== "Uncategorized") {
        if (!categoryMap.has(term.name)) {
          categoryMap.set(term.name, { slug: term.slug, count: 0 });
        }
        categoryMap.get(term.name)!.count++;
      }
    });
  });

  const collections = Array.from(categoryMap.entries()).map(([name, data]) => ({
    name,
    slug: data.slug,
    count: data.count,
  }));

  return (
    <main className="min-h-screen pt-32 pb-24 px-8 md:px-16 max-w-7xl mx-auto w-full">
      <div className="text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <h1 className="text-5xl md:text-7xl font-heading mb-6 tracking-wide text-text-primary">
          Collections
        </h1>
        <p className="font-ui text-text-secondary tracking-widest uppercase text-sm max-w-xl mx-auto leading-relaxed">
          Thematic shelves spanning from light to shadow.
        </p>
      </div>
      
      {collections.length === 0 ? (
        <p className="text-center text-text-secondary font-ui uppercase tracking-widest text-sm">No collections available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, i) => (
            <Link key={collection.slug} to={`/collections/${collection.slug}`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-surface/30 border border-white/5 p-12 rounded-2xl overflow-hidden shadow-lg hover:border-accent/30 transition-all duration-500 flex flex-col justify-between aspect-square"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h2 className="font-heading text-3xl md:text-4xl text-text-primary mb-4 group-hover:text-accent transition-colors duration-500">
                    {collection.name}
                  </h2>
                  <div className="w-12 h-px bg-white/20 group-hover:bg-accent/50 transition-colors duration-500" />
                </div>
                
                <div className="relative z-10 mt-auto flex items-end justify-between font-ui text-xs tracking-widest uppercase text-text-secondary">
                  <span>{collection.count} {collection.count === 1 ? "Piece" : "Pieces"}</span>
                  <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent">Explore &rarr;</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
