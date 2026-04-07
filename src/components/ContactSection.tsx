import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !message) {
      toast.error("Si us plau, omple tots els camps.");
      setSending(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name, email, message },
      });

      if (error) throw error;

      toast.success("Missatge enviat correctament!", {
        description: "Et respondrem el més aviat possible.",
      });
      form.reset();
    } catch (err) {
      console.error("Error sending contact form:", err);
      toast.error("Error enviant el missatge. Torna-ho a intentar.");
    } finally {
      setSending(false);
    }
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

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
