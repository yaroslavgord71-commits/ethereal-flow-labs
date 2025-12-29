import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const courses = [
  { icon: Code, title: "Frontend Development", description: "Master React, TypeScript, and modern CSS. Build stunning user interfaces from scratch", status: "Bestseller", statusColor: "text-primary", progress: 85 },
  { icon: Database, title: "Backend Mastery", description: "Node.js, Python, databases, and APIs. Build scalable server-side applications", status: "Popular", statusColor: "text-secondary", progress: 72 },
  { icon: Smartphone, title: "Mobile Development", description: "React Native and Flutter. Create cross-platform mobile apps for iOS and Android", status: "New", statusColor: "text-accent", progress: 45 },
  { icon: Globe, title: "Full Stack Bootcamp", description: "Complete web development journey. From zero to professional developer in 6 months", status: "Advanced", statusColor: "text-neon-cyan", progress: 68 },
];

const MissionsSection = () => {
  return (
    <section id="courses" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full glass-card border border-secondary/30 text-secondary text-sm font-body uppercase tracking-widest mb-4">Our Courses</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6"><span className="text-foreground">Level Up </span><span className="gradient-text">Your Skills</span></h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">Industry-leading curriculum designed by experts. Learn by building real projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <motion.div key={course.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }} whileHover={{ scale: 1.02, y: -5 }} className="group relative glass-card rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:box-glow-cyan transition-all duration-300"><course.icon className="w-8 h-8 text-primary" /></div>
                  <span className={`text-sm font-body font-semibold ${course.statusColor} uppercase tracking-wider`}>{course.status}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">{course.description}</p>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2"><span className="text-muted-foreground font-body">Completion Rate</span><span className="text-primary font-display font-bold">{course.progress}%</span></div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${course.progress}%` }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }} className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
                  </div>
                </div>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">Explore Course<ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" /></Button>
              </div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;
