import { motion } from "framer-motion";
import { Cog, Cpu, Code, Target, Map, Users } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const pillars = [
  {
    icon: Target,
    title: "Objectiu",
    desc: "Desenvolupar una pròtesi robòtica funcional adaptada a una necessitat real.",
  },
  {
    icon: Map,
    title: "Context",
    desc: "El projecte es desenvolupa en el marc d'una competició nacional de mans protèsiques a València.",
  },
  {
    icon: Users,
    title: "Enfocament",
    desc: "Equip multidisciplinari que combina enginyeria mecànica, electrònica i informàtica.",
  },
];

const tech = [
  {
    icon: Cog,
    title: "Mecànica",
    desc: "Disseny estructural, articulacions i mecanismes d'agafada. Prototipat amb impressió 3D.",
  },
  {
    icon: Cpu,
    title: "Electrònica",
    desc: "Circuits de control, sensors de força, disseny del PCB i gestió d'energia.",
  },
  {
    icon: Code,
    title: "Programació",
    desc: "Algorismes de control, processament de senyals EMG i interfície d'usuari.",
  },
];

const ProjectSection = () => (
  <section id="projecte" className="py-28 bg-section-alt">
    <div className="container">
      <motion.div {...fadeUp} className="max-w-2xl mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">El projecte</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">
          Una mà protèsica funcional
        </h2>
      </motion.div>

      {/* Pillars */}
      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            {...fadeUp}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex gap-4 items-start"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
              <p.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech cards */}
      <motion.div {...fadeUp}>
        <h3 className="font-display font-semibold text-lg mb-6 text-muted-foreground">Tecnologies</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {tech.map((t, i) => (
            <motion.div
              key={t.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <t.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">{t.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectSection;
