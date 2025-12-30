import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Courses", href: "#courses" },
    { name: "Technologies", href: "#tech" },
    { name: "Roadmap", href: "#timeline" },
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
              <svg className="w-8 h-8 text-primary animate-pulse-glow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 16.09V16.9c-1.4-.13-2.55-.6-3.54-1.39l1.12-1.61c.76.6 1.57.96 2.42 1.06V12.4c-1.69-.36-3.25-1.07-3.25-3.03 0-1.76 1.4-2.98 3.25-3.19V5.09h1.36v1.1c1.17.13 2.14.5 2.96 1.11l-1.04 1.56c-.63-.43-1.29-.72-1.92-.82v2.42c1.77.38 3.36 1.04 3.36 3.08 0 1.81-1.38 3.05-3.36 3.24v1.31h-1.36zm0-10.6c-.88.12-1.48.64-1.48 1.38 0 .68.48 1.13 1.48 1.44V7.49zm1.36 9.02c.93-.12 1.56-.64 1.56-1.44 0-.73-.51-1.21-1.56-1.52v2.96z"/>
              </svg>
              <div className="absolute inset-0 w-8 h-8 bg-primary/30 blur-xl rounded-full" />
            </div>
            <span className="font-display text-xl font-bold tracking-wider text-glow-cyan">
              Code<span className="text-secondary">Master</span>
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
            <Button variant="neon" size="sm">Start Learning</Button>
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
              <Button variant="neon" size="sm" className="mt-2">Start Learning</Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
