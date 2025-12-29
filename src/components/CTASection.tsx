import { motion } from "framer-motion";
import { Rocket, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        {[...Array(20)].map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 bg-primary/60 rounded-full" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} animate={{ y: [0, -100, 0], opacity: [0, 1, 0], scale: [0, 1.5, 0] }} transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4, ease: "easeOut" }} />
        ))}
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative max-w-4xl mx-auto">
          <div className="relative glass-card rounded-3xl p-12 md:p-16 border border-primary/20 overflow-hidden">
            <motion.div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)", backgroundSize: "200% 100%" }} animate={{ backgroundPosition: ["-200% 0", "200% 0"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
            <div className="relative z-10 text-center">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }} className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 mb-8">
                <Rocket className="w-10 h-10 text-primary" />
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="font-display text-4xl md:text-5xl font-bold mb-6"><span className="text-foreground">Ready for </span><span className="gradient-text">Launch?</span></motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="font-body text-xl text-muted-foreground max-w-xl mx-auto mb-10">Join the next generation of space explorers. Your journey to the stars begins here.</motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cyber" size="lg" className="group"><Sparkles className="w-5 h-5 mr-2" />Get Started<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Button>
                <Button variant="outline" size="lg">Contact Us</Button>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="mt-12 pt-8 border-t border-primary/10">
                <p className="text-sm text-muted-foreground font-body mb-4">Trusted by leading organizations worldwide</p>
                <div className="flex justify-center items-center gap-8 opacity-50">
                  {["NASA", "ESA", "SpaceX", "Blue Origin"].map((name) => (<span key={name} className="font-display text-lg font-bold text-muted-foreground">{name}</span>))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
