import { motion } from "framer-motion";
import { ArrowDown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inici" className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient orb */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-hero-gradient opacity-[0.07] blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-hero-gradient opacity-[0.05] blur-3xl pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Universitat de Girona
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Mà{" "}
            <span className="text-gradient">Girònica</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Desenvolupem una pròtesi robòtica per millorar la qualitat de vida de les persones. 
            Som estudiants d'enginyeria que participem en la competició nacional de mans protèsiques a València.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Button size="lg" onClick={() => scrollTo("#projecte")}>
              Veure projecte
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#contacte")}>
              <Heart className="w-4 h-4 mr-2" />
              Col·labora amb nosaltres
            </Button>
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs font-bold">
              ONCE
            </div>
            <span>Amb la col·laboració de la ONCE</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <button onClick={() => scrollTo("#projecte")} className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
