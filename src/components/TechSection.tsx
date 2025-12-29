import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Cpu, Shield, Wifi, Atom, Battery, Radio } from "lucide-react";

const technologies = [
  { icon: Cpu, title: "Quantum Computing", description: "Next-gen processors for deep space navigation" },
  { icon: Shield, title: "Nano Protection", description: "Self-healing materials for radiation shielding" },
  { icon: Wifi, title: "Laser Communication", description: "Instant data transmission across interplanetary distances" },
  { icon: Atom, title: "Fusion Engine", description: "Revolutionary thrust for interstellar travel" },
  { icon: Battery, title: "Antimatter Core", description: "Inexhaustible energy source for long missions" },
  { icon: Radio, title: "AI Piloting", description: "Autonomous spacecraft control systems" },
];

const TechCard = ({ tech, index }: { tech: typeof technologies[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} style={{ rotateX: isHovered ? rotateX : 0, rotateY: isHovered ? rotateY : 0, transformStyle: "preserve-3d" }} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { x.set(0); y.set(0); setIsHovered(false); }} className="relative group perspective-1000">
      <div className="glass-card rounded-2xl p-6 border border-primary/10 hover:border-primary/40 transition-all duration-300 h-full">
        <div className="relative mb-4 inline-block">
          <motion.div animate={{ boxShadow: isHovered ? "0 0 30px hsl(var(--primary) / 0.5)" : "0 0 0px hsl(var(--primary) / 0)" }} className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20">
            <tech.icon className="w-8 h-8 text-primary" />
          </motion.div>
        </div>
        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{tech.title}</h3>
        <p className="font-body text-muted-foreground text-sm leading-relaxed">{tech.description}</p>
      </div>
    </motion.div>
  );
};

const TechSection = () => {
  return (
    <section id="tech" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full glass-card border border-accent/30 text-accent text-sm font-body uppercase tracking-widest mb-4">Technology</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6"><span className="text-foreground">Beyond </span><span className="gradient-text">Possible</span></h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">Innovations that seemed like science fiction yesterday are becoming reality today</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (<TechCard key={tech.title} tech={tech} index={index} />))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
