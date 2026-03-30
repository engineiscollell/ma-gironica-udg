import { motion } from "framer-motion";
import { Cog, Cpu, Code } from "lucide-react";
import { lazy, Suspense } from "react";

const RoboticHand3D = lazy(() => import("./RoboticHand3D"));

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

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
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Text */}
        <motion.div {...fadeUp}>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">El projecte</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Una mà protèsica funcional
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Construir un braç robòtic funcional implica integrar múltiples disciplines en un sol dispositiu. Tot comença amb la <strong className="text-foreground">lectura de senyals electromiogràfics (EMG)</strong> del cos de l'usuari, que es processen per interpretar la intenció de moviment.
            </p>
            <p>
              A partir d'aquí, els <strong className="text-foreground">algorismes de control</strong> tradueixen aquests senyals en ordres precises per als actuadors. El <strong className="text-foreground">disseny electrònic</strong> inclou la creació de PCBs personalitzats, gestió d'energia i comunicació entre components.
            </p>
            <p>
              Finalment, el <strong className="text-foreground">disseny mecànic</strong> defineix l'estructura, les articulacions i els mecanismes d'agafada, prototipats amb impressió 3D per aconseguir una mà lleugera, resistent i adaptada a l'usuari.
            </p>
          </div>
        </motion.div>

        {/* 3D Hand */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }}>
          <Suspense
            fallback={
              <div className="w-full h-[400px] sm:h-[450px] rounded-xl bg-muted/30 border flex items-center justify-center">
                <div className="text-sm text-muted-foreground animate-pulse">Carregant model 3D…</div>
              </div>
            }
          >
            <RoboticHand3D />
          </Suspense>
        </motion.div>
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
