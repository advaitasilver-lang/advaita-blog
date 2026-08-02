
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AmbientEffects() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate random particles for dust
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 3 + 1, // 1px to 4px
      duration: Math.random() * 20 + 10, // 10s to 30s
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Moonlight overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-moon)_0%,_transparent_50%)] opacity-10" />
      
      {/* Fog effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-bg-dark to-transparent opacity-80" />

      {/* Floating dust particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent opacity-30 shadow-[0_0_8px_2px_var(--color-accent)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
