import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Eye, HeartHandshake, Lightbulb, DollarSign, Package, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const slides = [
  {
    icon: Eye,
    title: "Visibilitat",
    desc: "Els sponsors obtenen visibilitat com a entitats compromeses amb la innovació tecnològica i l'impacte social.",
  },
  {
    icon: Lightbulb,
    title: "Projecte real",
    desc: "Formeu part d'un projecte universitari real amb objectius clars i resultats tangibles en el desenvolupament de pròtesis robòtiques.",
  },
  {
    icon: HeartHandshake,
    title: "Impacte social",
    desc: "Col·laborar significa contribuir a millorar l'autonomia i qualitat de vida de persones com la Carina i moltes altres en situacions similars.",
  },
];

const how = [
  { icon: DollarSign, title: "Aportació econòmica", desc: "Finançament per materials, viatges i inscripció a la competició." },
  { icon: Package, title: "Subministrament de materials", desc: "Components electrònics, materials d'impressió 3D o eines." },
  { icon: Wrench, title: "Suport tècnic o assessorament", desc: "Coneixement especialitzat en mecànica, electrònica o biomèdica." },
];

const SponsorsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];
  const Icon = slide.icon;

  return (
    <section id="sponsors" className="py-28">
      <div className="container">
        <motion.div {...fadeUp} className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Sponsors</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Busquem col·laboradors
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div {...fadeUp} className="mb-16">
          <h3 className="font-display font-semibold text-lg mb-6">Per què col·laborar?</h3>
          <div className="relative bg-card rounded-xl border shadow-card overflow-hidden">
            <div className="flex items-center">
              <button
                onClick={prev}
                className="flex-shrink-0 p-3 sm:p-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex-1 py-10 px-2 sm:px-6 text-center min-h-[180px] flex flex-col items-center justify-center">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-xl mb-2">{slide.title}</h4>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">{slide.desc}</p>
                </motion.div>
              </div>

              <button
                onClick={next}
                className="flex-shrink-0 p-3 sm:p-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Següent"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 pb-5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Diapositiva ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Com col·laborar */}
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
};

export default SponsorsSection;
