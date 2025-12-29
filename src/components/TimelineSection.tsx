import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock, ArrowRight } from "lucide-react";

const timelineEvents = [
  {
    year: "Week 1-4",
    title: "Foundations",
    description: "HTML, CSS, JavaScript basics. Build your first interactive websites.",
    status: "completed",
  },
  {
    year: "Week 5-8",
    title: "Frontend Mastery",
    description: "React, TypeScript, state management. Create dynamic web applications.",
    status: "completed",
  },
  {
    year: "Week 9-12",
    title: "Backend Development",
    description: "Node.js, databases, REST APIs. Build complete server-side systems.",
    status: "current",
  },
  {
    year: "Week 13-16",
    title: "Advanced Topics",
    description: "Testing, DevOps, deployment. Prepare for production environments.",
    status: "upcoming",
  },
  {
    year: "Week 17-20",
    title: "Career Launch",
    description: "Portfolio projects, interview prep, job placement support.",
    status: "upcoming",
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
            Your Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-6">
            LEARNING <span className="text-primary">ROADMAP</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="inline-block p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-2xl font-heading font-bold text-primary">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">{event.description}</p>
                    
                    <div className={`flex items-center gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {event.status === "completed" && (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-green-400">Completed</span>
                        </>
                      )}
                      {event.status === "current" && (
                        <>
                          <motion.div
                            className="w-3 h-3 bg-yellow-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                          <span className="text-sm text-yellow-400">In Progress</span>
                        </>
                      )}
                      {event.status === "upcoming" && (
                        <>
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Upcoming</span>
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary relative z-10">
                  <motion.div
                    className={`w-4 h-4 rounded-full ${
                      event.status === "completed"
                        ? "bg-green-400"
                        : event.status === "current"
                        ? "bg-yellow-400"
                        : "bg-muted"
                    }`}
                    animate={event.status === "current" ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.div
            className="flex items-center gap-2 text-primary"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium tracking-wider">YOUR TECH CAREER AWAITS</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
