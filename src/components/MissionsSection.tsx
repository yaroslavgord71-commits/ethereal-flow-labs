import { motion } from "framer-motion";
import { Orbit, Satellite, Moon, Stars, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const missions = [
  {
    icon: Orbit,
    title: "Проект Орбита",
    description: "Создание первой коммерческой космической станции нового поколения с искусственной гравитацией",
    status: "В разработке",
    statusColor: "text-primary",
    progress: 67,
  },
  {
    icon: Moon,
    title: "Лунная База Альфа",
    description: "Постоянное присутствие человечества на Луне. Добыча ресурсов и научные исследования",
    status: "Активна",
    statusColor: "text-secondary",
    progress: 45,
  },
  {
    icon: Satellite,
    title: "Сеть Созвездие",
    description: "Глобальная спутниковая сеть для сверхскоростной связи в любой точке Солнечной системы",
    status: "Запущена",
    statusColor: "text-accent",
    progress: 89,
  },
  {
    icon: Stars,
    title: "Экспедиция Марс",
    description: "Первая пилотируемая миссия к Красной планете. Начало новой эры освоения космоса",
    status: "Планируется",
    statusColor: "text-neon-cyan",
    progress: 23,
  },
];

const MissionsSection = () => {
  return (
    <section id="missions" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 rounded-full glass-card border border-secondary/30 text-secondary text-sm font-body uppercase tracking-widest mb-4">
            Наши миссии
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Границы </span>
            <span className="gradient-text">расширяются</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждая миссия — это шаг к звёздам. Мы создаём будущее, о котором мечтало человечество
          </p>
        </motion.div>

        {/* Mission cards grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative glass-card rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:box-glow-cyan transition-all duration-300">
                    <mission.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className={`text-sm font-body font-semibold ${mission.statusColor} uppercase tracking-wider`}>
                    {mission.status}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {mission.title}
                </h3>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {mission.description}
                </p>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground font-body">Прогресс</span>
                    <span className="text-primary font-display font-bold">{mission.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${mission.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                    />
                  </div>
                </div>

                {/* Link */}
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                  Подробнее
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Corner decoration */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;
