import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Link as LinkIcon } from "lucide-react";
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
        
        {/* Author Bio */}
        <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-surface/30 p-8 rounded-2xl border border-white/5 mb-16">
          <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border border-white/10 shadow-[0_0_15px_rgba(207,175,103,0.1)]">
            <img src="/advaita.png" alt="Advaita Silver" className="w-full h-full object-cover" />
          </div>
          <div className="text-center sm:text-left text-text-secondary">
            <h3 className="font-heading text-2xl text-text-primary mb-2">Advaita Silver</h3>
            <p className="font-body italic text-base leading-relaxed mb-4 opacity-90">
              An aspiring author and poetess drawn to the hush of night. Writing is how time slows here—a space to hold loneliness, wonder, longing, and hope.
            </p>
            <Link to="/about" className="font-ui text-xs uppercase tracking-widest text-accent hover:text-white transition-colors">
              Read more about the author
            </Link>
          </div>
        </section>
        
        <footer className="text-center">
          <p className="font-ui text-sm text-text-secondary tracking-widest uppercase mb-6">
            Enjoyed this piece?
          </p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(poem.title.rendered)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 text-text-secondary hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-colors"
              title="Share on Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 text-text-secondary hover:border-[#1877F2] hover:text-[#1877F2] transition-colors"
              title="Share on Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <button 
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="p-3 rounded-full border border-white/20 text-text-secondary hover:border-accent hover:text-accent transition-colors"
              title="Copy link"
            >
              <LinkIcon size={18} />
            </button>
          </div>
        </footer>
      </article>
    </main>
  );
}
