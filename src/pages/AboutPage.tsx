import { motion } from "framer-motion";

export function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-8 md:px-16 max-w-4xl mx-auto w-full flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full text-center"
      >
        <h1 className="text-5xl md:text-7xl font-heading mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-text-secondary drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          About Advaita
        </h1>

        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-12 rounded-full overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(207,175,103,0.15)] group">
          <img 
            src="/advaita.png" 
            alt="Advaita Silver" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 to-accent/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="poem-content max-w-2xl mx-auto space-y-6 text-text-secondary text-lg md:text-xl leading-relaxed italic">
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
      </motion.div>
    </main>
  );
}
