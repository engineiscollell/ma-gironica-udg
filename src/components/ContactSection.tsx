import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const ContactSection = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Missatge enviat!", description: "Et respondrem el més aviat possible." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contacte" className="py-24 bg-section-alt">
      <div className="container">
        <div className="max-w-xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Contacte</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Posa't en contacte
            </h2>
          </motion.div>

          <motion.form
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-xl p-8 shadow-card border space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">Nom</label>
              <Input id="name" name="name" required placeholder="El teu nom" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
              <Input id="email" name="email" type="email" required placeholder="email@exemple.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">Missatge</label>
              <Textarea id="message" name="message" required placeholder="Com podem ajudar-te?" rows={4} />
            </div>
            <Button type="submit" className="w-full" disabled={sending}>
              {sending ? "Enviant..." : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar missatge
                </>
              )}
            </Button>
          </motion.form>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:magironica@udg.edu" className="hover:text-primary transition-colors underline underline-offset-2">
                magironica@udg.edu
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
