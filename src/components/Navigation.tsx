import { motion } from "framer-motion";
import { Rocket, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Missions", href: "#missions" },
    { name: "Technology", href: "#tech" },
    { name: "Timeline", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a href="#" className="flex items-center gap-3 group" whileHover={{ scale: 1.05 }}>
            <div className="relative">
              <Rocket className="w-8 h-8 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 w-8 h-8 bg-primary/30 blur-xl rounded-full" />
            </div>
            <span className="font-display text-xl font-bold tracking-wider text-glow-cyan">
              NEXUS<span className="text-secondary">.</span>SPACE
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                className="relative font-body text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="hidden md:block">
            <Button variant="neon" size="sm">Join Us</Button>
          </motion.div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="md:hidden mt-4 pb-4 border-t border-primary/20">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="font-body text-lg text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>{item.name}</a>
              ))}
              <Button variant="neon" size="sm" className="mt-2">Join Us</Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
