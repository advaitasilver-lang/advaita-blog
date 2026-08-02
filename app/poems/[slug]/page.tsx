import { fetchPoemBySlug, fetchPoems } from "@/lib/wordpress";
import { extractReadingTime } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const poem = await fetchPoemBySlug(slug);
  return {
    title: poem ? `${poem.title.rendered} | Advaita Silver` : "Poem Not Found",
  };
}

export async function generateStaticParams() {
  const poems = await fetchPoems();
  return poems.map((poem) => ({
    slug: poem.slug,
  }));
}

export default async function PoemPage({ params }: Props) {
  const { slug } = await params;
  const poem = await fetchPoemBySlug(slug);

  if (!poem) {
    notFound();
  }

  const readingTime = extractReadingTime(poem.content.rendered);
  const formattedDate = new Date(poem.date).toLocaleDateString("en-US", { month: 'long', year: 'numeric' });

  return (
    <main className="min-h-screen pt-32 pb-32 px-6 flex justify-center w-full">
      <article className="w-full max-w-[720px]">
        <Link 
          href="/poems" 
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
