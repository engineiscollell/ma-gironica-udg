import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const CarinaSection = () => (
  <section id="carina" className="py-24 bg-section-alt">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-10">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Per la Carina</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Un projecte amb impacte real
          </h2>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card rounded-xl p-8 shadow-card border"
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            La Carina és treballadora de la ONCE i va perdre la mà el 2011 en un accident laboral. 
            Des d'aleshores, ha après a adaptar-se a la seva nova realitat, però moltes tasques 
            quotidianes segueixen sent un repte.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Aquest projecte neix amb l'objectiu concret d'ajudar-la. Desenvolupem una pròtesi 
            funcional que li permeti recuperar autonomia i millorar la seva qualitat de vida.
          </p>
          <p className="text-foreground font-medium">
            No és un exercici acadèmic: és un compromís real amb una persona real.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CarinaSection;
