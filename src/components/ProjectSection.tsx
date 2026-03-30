import { motion } from "framer-motion";
import { Cog, Cpu, Code } from "lucide-react";

const areas = [
  {
    icon: Cog,
    title: "Mecànica",
    desc: "Disseny estructural de la mà, articulacions i mecanismes d'agafada. Modelat 3D i prototipat amb impressió 3D.",
  },
  {
    icon: Cpu,
    title: "Electrònica",
    desc: "Circuits de control, sensors de força i integració de motors. Disseny del PCB i gestió d'energia.",
  },
  {
    icon: Code,
    title: "Programació",
    desc: "Algorismes de control, processament de senyals EMG i interfície d'usuari. Software per a moviments intuïtius.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const ProjectSection = () => (
  <section id="projecte" className="py-24 bg-section-alt">
    <div className="container">
      <motion.div {...fadeUp} className="max-w-2xl mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">El projecte</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Una mà protèsica funcional
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          L'objectiu és crear una pròtesi robòtica per a la Carina, una treballadora de la ONCE que va perdre 
          la mà el 2011. El projecte es presentarà a la competició nacional de pròtesis a València, on equips 
          de tot l'estat competeixen amb enfocament multidisciplinari.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6">
        {areas.map((a, i) => (
          <motion.div
            key={a.title}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card border"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <a.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{a.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectSection;
