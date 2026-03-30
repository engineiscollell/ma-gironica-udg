import { motion } from "framer-motion";
import { Eye, HeartHandshake, Lightbulb, DollarSign, Package, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const why = [
  { icon: Eye, title: "Visibilitat", desc: "Visibilitat com a entitat compromesa amb la innovació." },
  { icon: Lightbulb, title: "Projecte real", desc: "Participació en un projecte universitari real amb aplicació directa." },
  { icon: HeartHandshake, title: "Impacte social", desc: "Impacte social directe en la vida d'una persona." },
];

const how = [
  { icon: DollarSign, title: "Aportació econòmica", desc: "Finançament per materials, viatges i inscripció a la competició." },
  { icon: Package, title: "Subministrament de materials", desc: "Components electrònics, materials d'impressió 3D o eines." },
  { icon: Wrench, title: "Assessorament tècnic", desc: "Coneixement especialitzat en mecànica, electrònica o biomèdica." },
];

const SponsorsSection = () => (
  <section id="sponsors" className="py-28">
    <div className="container">
      <motion.div {...fadeUp} className="max-w-2xl mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Sponsors</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Busquem qui ens acompanyi
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Actualment comptem amb el suport de la ONCE, i estem oberts a noves col·laboracions.
        </p>
      </motion.div>

      <motion.div {...fadeUp} className="mb-16">
        <h3 className="font-display font-semibold text-lg mb-6">Per què col·laborar?</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {why.map((w, i) => (
            <motion.div
              key={w.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border"
            >
              <w.icon className="w-5 h-5 text-primary mb-3" />
              <h4 className="font-display font-semibold mb-1">{w.title}</h4>
              <p className="text-sm text-muted-foreground">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div {...fadeUp}>
        <h3 className="font-display font-semibold text-lg mb-6">Com col·laborar?</h3>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {how.map((h, i) => (
            <motion.div
              key={h.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <h.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-sm mb-0.5">{h.title}</h4>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Button
          size="lg"
          onClick={() => document.querySelector("#contacte")?.scrollIntoView({ behavior: "smooth" })}
        >
          Contacta per col·laborar
        </Button>
      </motion.div>
    </div>
  </section>
);

export default SponsorsSection;
