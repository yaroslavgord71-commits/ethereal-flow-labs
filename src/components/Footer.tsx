import { motion } from "framer-motion";
import { Code2, Github, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const links = {
    courses: ["Frontend", "Backend", "Full Stack", "Mobile"],
    resources: ["Documentation", "Blog", "Tutorials", "FAQ"],
    company: ["About Us", "Careers", "Contact", "Partners"],
  };
  const socials = [{ icon: Twitter, href: "#" }, { icon: Github, href: "#" }, { icon: Linkedin, href: "#" }, { icon: Youtube, href: "#" }];

  return (
    <footer id="contact" className="relative border-t border-primary/10">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <motion.a href="#" className="flex items-center gap-3 mb-6" whileHover={{ scale: 1.02 }}>
              <div className="relative"><Code2 className="w-8 h-8 text-primary" /><div className="absolute inset-0 w-8 h-8 bg-primary/30 blur-xl rounded-full" /></div>
              <span className="font-display text-xl font-bold tracking-wider">CODE<span className="text-secondary">.</span>MASTER</span>
            </motion.a>
            <p className="font-body text-muted-foreground mb-6 max-w-xs">Transform your career with industry-leading programming courses. Learn from experts, build real projects.</p>
            <div className="flex gap-4">
              {socials.map((social, i) => (<motion.a key={i} href={social.href} whileHover={{ scale: 1.1, y: -2 }} className="p-2 rounded-lg glass-card border border-primary/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-colors"><social.icon className="w-5 h-5" /></motion.a>))}
            </div>
          </div>
          <div><h4 className="font-display font-bold text-foreground mb-4">Courses</h4><ul className="space-y-3">{links.courses.map((link) => (<li key={link}><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">{link}</a></li>))}</ul></div>
          <div><h4 className="font-display font-bold text-foreground mb-4">Resources</h4><ul className="space-y-3">{links.resources.map((link) => (<li key={link}><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">{link}</a></li>))}</ul></div>
          <div><h4 className="font-display font-bold text-foreground mb-4">Company</h4><ul className="space-y-3">{links.company.map((link) => (<li key={link}><a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">{link}</a></li>))}</ul></div>
        </div>
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted-foreground">© 2026 Code Master. All rights reserved.</p>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" /><span className="font-body text-sm text-muted-foreground">Accepting new students</span></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
