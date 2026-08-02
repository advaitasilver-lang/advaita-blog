"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";

const QUOTES = [
  "Some books are read. Some poems are felt.",
  "Welcome, traveller. Tonight the library has a poem waiting for you.",
  "Every page remembers a heartbeat.",
  "The quietest words echo the longest.",
];

export default function Home() {
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
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-text-secondary drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          ADVAITA<br/>SILVER
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary font-body italic mb-12">
          "Where every poem is a borrowed heartbeat."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/poems">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 bg-accent text-bg-dark rounded-full font-ui uppercase tracking-wider text-sm font-semibold hover:shadow-[0_0_20px_var(--color-accent)] transition-shadow duration-300"
            >
              <BookOpen size={18} />
              Explore Poems
            </motion.button>
          </Link>
          
          <Link href="/collections">
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
