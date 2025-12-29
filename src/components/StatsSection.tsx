import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { GraduationCap, Users, Briefcase, Award } from "lucide-react";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ from, to, duration = 2, suffix = "" }: CounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration });
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, to, duration, rounded]);

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const stats = [
  {
    icon: GraduationCap,
    value: 25847,
    suffix: "+",
    label: "Graduates",
    description: "Successfully completed courses",
  },
  {
    icon: Users,
    value: 156,
    suffix: "",
    label: "Expert Mentors",
    description: "Industry professionals",
  },
  {
    icon: Briefcase,
    value: 89,
    suffix: "%",
    label: "Job Placement",
    description: "Within 3 months of graduation",
  },
  {
    icon: Award,
    value: 4.9,
    suffix: "/5",
    label: "Student Rating",
    description: "Based on 10K+ reviews",
  },
];

const StatsSection = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <section id="stats" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
            By The Numbers
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-6">
            OUR <span className="text-primary">IMPACT</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-center p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/30 mb-6">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-2">
                    {isInView && (
                      <Counter
                        from={0}
                        to={stat.value}
                        duration={2.5}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>

                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-4 left-1/2 w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                style={{ translateX: "-50%" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
