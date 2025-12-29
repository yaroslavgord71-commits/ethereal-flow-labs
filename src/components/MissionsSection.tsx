import { motion } from "framer-motion";
import { Orbit, Satellite, Moon, Stars, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const missions = [
  { icon: Orbit, title: "Project Orbit", description: "Building the first commercial space station with artificial gravity", status: "In Development", statusColor: "text-primary", progress: 67 },
  { icon: Moon, title: "Lunar Base Alpha", description: "Permanent human presence on the Moon. Resource mining and research", status: "Active", statusColor: "text-secondary", progress: 45 },
  { icon: Satellite, title: "Constellation Network", description: "Global satellite network for ultra-fast communication across the Solar System", status: "Launched", statusColor: "text-accent", progress: 89 },
  { icon: Stars, title: "Mars Expedition", description: "First crewed mission to the Red Planet. The beginning of a new era", status: "Planning", statusColor: "text-neon-cyan", progress: 23 },
];

const MissionsSection = () => {
  return (
    <section id="missions" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full glass-card border border-secondary/30 text-secondary text-sm font-body uppercase tracking-widest mb-4">Our Missions</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6"><span className="text-foreground">Pushing </span><span className="gradient-text">Boundaries</span></h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">Every mission is a step towards the stars. We create the future humanity has dreamed of</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {missions.map((mission, index) => (
            <motion.div key={mission.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }} whileHover={{ scale: 1.02, y: -5 }} className="group relative glass-card rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:box-glow-cyan transition-all duration-300"><mission.icon className="w-8 h-8 text-primary" /></div>
                  <span className={`text-sm font-body font-semibold ${mission.statusColor} uppercase tracking-wider`}>{mission.status}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{mission.title}</h3>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">{mission.description}</p>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2"><span className="text-muted-foreground font-body">Progress</span><span className="text-primary font-display font-bold">{mission.progress}%</span></div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${mission.progress}%` }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }} className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
                  </div>
                </div>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">Learn More<ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" /></Button>
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
