import { motion } from "framer-motion";
import { Rocket, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: ["О нас", "Карьера", "Новости", "Партнёры"],
    resources: ["Документация", "API", "Блог", "FAQ"],
    legal: ["Конфиденциальность", "Условия", "Cookies"],
  };

  const socials = [
    { icon: Twitter, href: "#" },
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer id="contact" className="relative border-t border-primary/10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Rocket className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 w-8 h-8 bg-primary/30 blur-xl rounded-full" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider">
                NEXUS<span className="text-secondary">.</span>SPACE
              </span>
            </motion.a>
            <p className="font-body text-muted-foreground mb-6 max-w-xs">
              Исследуем границы возможного. Создаём будущее, о котором мечтало человечество.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-lg glass-card border border-primary/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Компания</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Ресурсы</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Правовая информация</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} Nexus Space. Все права защищены.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-body text-sm text-muted-foreground">
              Все системы работают
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
