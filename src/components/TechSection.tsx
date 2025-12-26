import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Cpu, Shield, Wifi, Atom, Battery, Radio } from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    title: "Квантовые вычисления",
    description: "Процессоры нового поколения для навигации в глубоком космосе",
  },
  {
    icon: Shield,
    title: "Нано-защита",
    description: "Самовосстанавливающиеся материалы для защиты от радиации",
  },
  {
    icon: Wifi,
    title: "Лазерная связь",
    description: "Мгновенная передача данных на межпланетные расстояния",
  },
  {
    icon: Atom,
    title: "Термоядерный двигатель",
    description: "Революционная тяга для путешествий к звёздам",
  },
  {
    icon: Battery,
    title: "Антиматерия",
    description: "Неисчерпаемый источник энергии для длительных миссий",
  },
  {
    icon: Radio,
    title: "ИИ-пилотаж",
    description: "Автономные системы управления космическими аппаратами",
  },
];

interface TechCardProps {
  tech: typeof technologies[0];
  index: number;
}

const TechCard = ({ tech, index }: TechCardProps) => {
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
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group perspective-1000"
    >
      <div className="glass-card rounded-2xl p-6 border border-primary/10 hover:border-primary/40 transition-all duration-300 h-full">
        {/* Icon with glow */}
        <div className="relative mb-4 inline-block">
          <motion.div
            animate={{
              boxShadow: isHovered 
                ? "0 0 30px hsl(var(--primary) / 0.5)" 
                : "0 0 0px hsl(var(--primary) / 0)",
            }}
            className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20"
          >
            <tech.icon className="w-8 h-8 text-primary" />
          </motion.div>
        </div>

        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {tech.title}
        </h3>
        <p className="font-body text-muted-foreground text-sm leading-relaxed">
          {tech.description}
        </p>

        {/* Animated corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
        >
          <div className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-primary to-transparent" />
          <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const TechSection = () => {
  return (
    <section id="tech" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-secondary/5 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 rounded-full glass-card border border-accent/30 text-accent text-sm font-body uppercase tracking-widest mb-4">
            Технологии
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">За гранью </span>
            <span className="gradient-text">возможного</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Инновации, которые ещё вчера казались фантастикой, сегодня становятся реальностью
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={tech.title} tech={tech} index={index} />
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full glass-card border border-primary/20">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary"
                />
              ))}
            </div>
            <span className="font-body text-muted-foreground">
              <span className="text-primary font-bold">42</span> активных разработки
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
