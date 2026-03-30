import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/foto_base.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="inici" className="relative min-h-screen flex items-end pb-20 pt-16">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-5">
              Mà{" "}
              <span className="text-gradient">Girònica</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Som un equip d'estudiants d'enginyeria de la Universitat de Girona desenvolupant un braç robòtic per a participar a la <em>"II COMPETICIÓN UNIVERSITARIA DE MANOS PROTÉSICAS"</em>.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Button size="lg" onClick={() => scrollTo("#projecte")}>
                Veure projecte
              </Button>
              <Button size="lg" variant="outline" className="bg-background/60 backdrop-blur-sm" onClick={() => scrollTo("#sponsors")}>
                <Heart className="w-4 h-4 mr-2" />
                Col·labora amb nosaltres
              </Button>
            </div>
          </motion.div>

          {/* Bottom right caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-0 right-4 sm:right-8 text-xs text-muted-foreground/70 text-right"
          >
            Escola Politècnica Superior – Universitat de Girona
            <br />
            <span className="italic">"On tot va nèixer"</span>
          </motion.p>
        </div>
      </section>

      {/* Credibility line */}
      <div className="border-b bg-muted/50">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          Projecte desenvolupat a la Universitat de Girona amb la col·laboració de la ONCE
        </div>
      </div>
    </>
  );
};

export default HeroSection;
