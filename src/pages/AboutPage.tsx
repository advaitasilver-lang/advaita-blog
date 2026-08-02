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

        <div className="poem-content has-dropcap max-w-2xl mx-auto space-y-6 text-text-secondary text-lg md:text-xl leading-relaxed italic">
          <p>Words have always felt like home.</p>
          
          <p>
            This space exists because writing does—softly, steadily, without asking for permission. It began as a place to gather thoughts that didn't fit neatly into conversations, moments that lingered longer than expected, and feelings that preferred ink over noise.
          </p>

          <p>
            I'm Advaita Silver—an aspiring author, a writer, and a poetess.<br/>
            Not published (yet), but deeply devoted to the craft.
          </p>

          <p>
            Writing is how time slows here. In free moments, words find their way onto the page—sometimes quietly, sometimes all at once. Poetry, especially, feels like a language of its own: a way to hold loneliness, wonder, longing, and hope without having to explain them away.
          </p>

          <p>
            But this space also holds stories—short ones, often tender or bittersweet—glimpses into imagined lives, fleeting scenes, and characters that arrive like constellations. Short stories feel like another kind of poetry: longer breaths, different worlds, the same heartbeat underneath.
          </p>

          <p>These pieces are not performances. They are pauses.</p>

          <p>
            They explore silence, growing up, becoming, and the strange beauty of being human. Some are soft. Some are heavy. All are written with intention.
          </p>

          <p>
            This space isn't about perfection or finished answers. It's about the process—learning, feeling, writing, and slowly shaping a voice. Publishing may come later. For now, the work itself matters.
          </p>

          <p>
            If something here makes you stop for a moment—<br/>
            If a line stays with you longer than expected—<br/>
            Then this space has done what it was meant to do.
          </p>

          <p>
            Welcome.<br/>
            Take your time.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
