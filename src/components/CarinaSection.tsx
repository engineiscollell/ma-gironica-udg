import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const CarinaSection = () => (
  <section id="carina" className="py-28 bg-section-alt">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-10">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Impacte Real</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Un projecte amb impacte real
          </h2>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card rounded-xl p-8 shadow-card border space-y-4"
        >
          <p className="text-muted-foreground leading-relaxed">
            Aquest projecte neix amb un objectiu clar: desenvolupar una pròtesi funcional per a la Carina, que sigui eficaç, accessible i adaptada a les seves necessitats reals.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            La Carina va perdre la mà l'any 2011 mentre manipulava maquinària industrial. Durant un temps va disposar d'una pròtesi robòtica, però els alts costos de les bateries i les limitacions de funcionalitat d'aquells models la van obligar a tornar a viure amb una sola mà funcional. Tot i haver aconseguit adaptar-se, això continua suposant una limitació significativa per a moltes activitats diàries i tasques laborals.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Un dels grans pilars del nostre projecte és desenvolupar una solució que li permeti recuperar autonomia i qualitat de vida, així com oferir ajuda a moltes altres persones en situacions similars.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CarinaSection;
