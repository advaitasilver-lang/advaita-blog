import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import poemsData from "@/data/poems.json";
import { WPPost, extractReadingTime } from "@/utils/utils";

export function PoemDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const poems = poemsData as WPPost[];
  const poem = poems.find(p => p.slug === slug);



  if (!poem) {
    return (
      <main className="min-h-screen pt-32 pb-32 px-6 flex justify-center w-full text-text-secondary font-ui">
        Poem not found.
      </main>
    );
  }

  const readingTime = extractReadingTime(poem.content.rendered);
  const formattedDate = new Date(poem.date).toLocaleDateString("en-US", { month: 'long', year: 'numeric' });

  return (
    <main className="min-h-screen pt-32 pb-32 px-6 flex justify-center w-full">
      <article className="w-full max-w-[720px]">
        <Link 
          to="/poems" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors font-ui uppercase text-xs tracking-widest mb-16"
        >
          <ArrowLeft size={16} />
          Back to Library
        </Link>
        
        <header className="mb-16 text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading mb-8 leading-tight text-text-primary"
            dangerouslySetInnerHTML={{ __html: poem.title.rendered }}
          />
          
          <div className="flex items-center justify-center gap-6 font-ui text-xs uppercase tracking-widest text-text-secondary">
            <span className="flex items-center gap-2"><Calendar size={14} /> {formattedDate}</span>
            <span className="flex items-center gap-2"><Clock size={14} /> {readingTime}</span>
          </div>
        </header>
        
        <div 
          className="poem-content"
          dangerouslySetInnerHTML={{ __html: poem.content.rendered }}
        />
        
        <hr className="my-16 border-white/10" />
        
        <footer className="text-center">
          <p className="font-ui text-sm text-text-secondary tracking-widest uppercase mb-8">
            Enjoyed this piece?
          </p>
          <button className="px-8 py-3 rounded-full border border-white/20 text-text-primary font-ui uppercase tracking-widest text-xs hover:border-accent hover:text-accent transition-colors">
            Share Poem
          </button>
        </footer>
      </article>
    </main>
  );
}
