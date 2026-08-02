import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import type { WPPost } from "@/utils/wordpress";
import { extractReadingTime } from "@/utils/wordpress";
import { cn } from "@/utils/utils";

interface BookCardProps {
  post: WPPost;
  className?: string;
}

export function BookCard({ post, className }: BookCardProps) {
  const category = post._embedded?.["wp:term"]?.[0]?.find((term) => term.taxonomy === "category")?.name || "Poetry";
  const readingTime = extractReadingTime(post.content.rendered);
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", { month: 'long', year: 'numeric' });

  return (
    <Link to={`/poems/${post.slug}`}>
      <motion.div
        className={cn(
          "relative w-full aspect-[2/3] perspective-1000",
          className
        )}
        whileHover="hover"
      >
        <motion.div
          className="w-full h-full preserve-3d cursor-pointer"
          variants={{
            hover: {
              rotateY: -15,
              rotateX: 5,
              z: 20,
              y: -10,
            }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Book Spine Simulation */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-card brightness-75 rounded-l-md shadow-inner origin-right transform -translate-x-full rotate-y-90 z-0" />
          
          {/* Book Cover */}
          <div className="absolute inset-0 bg-card rounded-r-md rounded-l-sm shadow-2xl border border-white/5 p-6 flex flex-col justify-between overflow-hidden z-10 group bg-[url('/noise.png')]">
            
            {/* Glow on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/0 to-accent/20 opacity-0 mix-blend-overlay"
              variants={{
                hover: { opacity: 1 }
              }}
            />
            
            <div className="relative z-10">
              <span className="font-ui text-xs uppercase tracking-widest text-accent mb-4 block">
                {category}
              </span>
              <h2 
                className="font-heading text-2xl md:text-3xl text-text-primary leading-tight mb-4"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div 
                className="font-body text-text-secondary text-sm line-clamp-3 italic opacity-80"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </div>

            <div className="relative z-10 flex items-center justify-between font-ui text-[10px] uppercase tracking-wider text-text-secondary border-t border-white/10 pt-4">
              <span>{formattedDate}</span>
              <span>{readingTime}</span>
            </div>
            
            {/* Pages edge effect */}
            <div className="absolute right-0 top-1 bottom-1 w-[3px] bg-gradient-to-b from-[#e0e0e0] via-[#f5f5f5] to-[#d0d0d0] rounded-r-sm shadow-inner opacity-20" />
          </div>
          
          {/* Golden glow drop shadow */}
          <motion.div
            className="absolute -inset-4 bg-accent/20 rounded-xl blur-2xl -z-10 opacity-0"
            variants={{ hover: { opacity: 0.5 } }}
          />
        </motion.div>
      </motion.div>
    </Link>
  );
}
