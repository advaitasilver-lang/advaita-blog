import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const QUOTES = [
  "Some books are read. Some poems are felt.",
  "Welcome, traveller. Tonight the library has a poem waiting for you.",
  "Every page remembers a heartbeat.",
  "The quietest words echo the longest.",
];

export function HomePage() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-accent mb-6 font-ui tracking-[0.2em] uppercase text-sm"
        >
          {quote}
        </motion.p>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-text-secondary drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          ADVAITA<br/>SILVER
        </h1>

        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-10 rounded-full overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(207,175,103,0.15)] group">
          <img 
            src="/advaita.png" 
            alt="Advaita Silver" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 to-accent/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="poem-content text-lg md:text-xl text-text-secondary font-body italic mb-12 space-y-4 max-w-2xl mx-auto">
          <p>
            Hey, A place where thoughts drift like stardust through a quiet sky, where the moon listens, and silence gently watches.
          </p>
          <p>
            Each poem holds a secret, soft as a fading star, fragile as ten lives— or maybe just nine.
          </p>
          <p>
            I am Advaita Silver, drawn to the hush of night, to the quiet ache the sky leaves behind.
          </p>
          <p>
            Step softly. Stay beneath the stars.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/poems">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 bg-accent text-bg-dark rounded-full font-ui uppercase tracking-wider text-sm font-semibold hover:shadow-[0_0_20px_var(--color-accent)] transition-shadow duration-300"
            >
              <BookOpen size={18} />
              Explore Poems
            </motion.button>
          </Link>
          
          <Link to="/collections">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-surface border border-white/10 rounded-full font-ui uppercase tracking-wider text-sm hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Latest Collection
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
