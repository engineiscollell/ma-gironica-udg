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
      {/* Hero block: 3D hand as background, text overlay */}
      <div className="relative rounded-2xl overflow-hidden mb-16 min-h-[550px] sm:min-h-[600px]">
        {/* 3D background */}
        <div className="absolute inset-0 opacity-25 pointer-events-auto">
          <Suspense fallback={null}>
            <RoboticHand3D />
          </Suspense>
        </div>

        {/* Text content on top */}
        <div className="relative z-10 px-6 sm:px-10 py-12 sm:py-16">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">El projecte</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
              Una mà protèsica funcional
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 max-w-2xl text-[0.95rem] leading-[1.75] text-muted-foreground"
          >
            <p>
              El desenvolupament d'un braç robòtic funcional requereix la integració coordinada de diverses disciplines d'enginyeria dins d'un únic sistema.
            </p>
            <p>
              El procés s'inicia amb la captació de senyals electromiogràfics (EMG) de l'usuari, que són condicionats i processats per extreure'n patrons d'activació muscular i inferir la intenció de moviment.
            </p>
            <p>
              Aquests senyals són interpretats mitjançant algorismes de control, que generen ordres precises per als actuadors, permetent un moviment controlat i coherent de la pròtesi.
            </p>
            <p>
              A nivell electrònic, el sistema incorpora el disseny de plaques de circuit imprès (PCB) específiques, així com la gestió de l'alimentació i la comunicació entre els diferents mòduls del dispositiu.
            </p>
            <p>
              Pel que fa al disseny mecànic, es defineixen l'arquitectura estructural, les articulacions i els mecanismes d'accionament, amb especial atenció a la funcionalitat, el pes i l'ergonomia. Els components es prototipen mitjançant tecnologies d'impressió 3D per tal d'optimitzar la iteració i l'adaptació a l'usuari final.
            </p>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xs text-muted-foreground/60 italic"
          >
            Arrossega el fons per rotar la mà 3D
          </motion.p>
        </div>
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
