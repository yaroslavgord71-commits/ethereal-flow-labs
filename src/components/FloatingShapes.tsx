import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large glowing orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
        style={{ top: '10%', right: '5%' }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Magenta orb */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-3xl"
        style={{ bottom: '20%', left: '10%' }}
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple accent */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-accent/15 to-transparent blur-3xl"
        style={{ top: '50%', left: '50%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Geometric shapes */}
      <motion.div
        className="absolute w-20 h-20 border border-primary/30 rotate-45"
        style={{ top: '25%', left: '15%' }}
        animate={{
          rotate: [45, 90, 45],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-16 h-16 border border-secondary/30"
        style={{ top: '60%', right: '20%' }}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-12 h-12 border-2 border-accent/40 rounded-full"
        style={{ bottom: '30%', right: '35%' }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/60"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 12}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
};

export default FloatingShapes;
