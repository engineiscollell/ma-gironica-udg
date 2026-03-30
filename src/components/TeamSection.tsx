import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import daniImg from "@/assets/dani.jpeg";
import lluisImg from "@/assets/lluis.jpeg";

interface Member {
  name: string;
  role: string;
  contribution?: string;
  image?: string;
}

const coordinators: Member[] = [
  { name: "Dani Trias", role: "Professor coordinador", contribution: "Supervisió tècnica i acadèmica", image: daniImg },
  { name: "Joan Andreu Mayugo", role: "Professor coordinador", contribution: "Coordinació general del projecte" },
];

const team: Member[] = [
  { name: "Eira", role: "Enginyeria Electrònica", contribution: "Disseny electrònic" },
  { name: "Eloi", role: "Enginyeria Biomèdica", contribution: "Senyals biomèdics" },
  { name: "Laia Moreno", role: "Enginyeria Mecànica", contribution: "Disseny mecànic" },
  { name: "Lluís Francesc Collell", role: "Enginyeria Biomèdica", contribution: "Integració biomèdica", image: lluisImg },
  { name: "Luis", role: "Enginyeria Industrial", contribution: "Processos industrials" },
  { name: "Miquel Coll", role: "Enginyeria Informàtica", contribution: "Desenvolupament software" },
  { name: "Noa Pararol", role: "Enginyeria Mecànica", contribution: "Prototipat 3D" },
  { name: "Pau Grabulosa", role: "Enginyeria Industrial", contribution: "Gestió tècnica" },
  { name: "Pol Verdaguer", role: "Enginyeria Industrial", contribution: "Anàlisi i producció" },
  { name: "Sònia Carrasco", role: "Enginyeria Biomèdica", contribution: "Recerca biomèdica" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const MemberCard = ({ member, delay = 0 }: { member: Member; delay?: number }) => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.4, delay }}
    className="flex flex-col items-center text-center"
  >
    <Avatar className="w-20 h-20 mb-3">
      {member.image ? (
        <AvatarImage src={member.image} alt={member.name} className="object-cover" />
      ) : null}
      <AvatarFallback className="bg-muted">
        <User className="w-8 h-8 text-muted-foreground/60" />
      </AvatarFallback>
    </Avatar>
    <p className="font-display font-semibold text-sm">{member.name}</p>
    <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
    {member.contribution && (
      <p className="text-xs text-muted-foreground/70 mt-1 italic">{member.contribution}</p>
    )}
  </motion.div>
);

const TeamSection = () => (
  <section id="equip" className="py-28">
    <div className="container">
      <motion.div {...fadeUp} className="max-w-2xl mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">L'equip</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Qui som</h2>
        <p className="text-muted-foreground leading-relaxed">
          Un equip multidisciplinari d'estudiants de la Universitat de Girona, guiats per professors amb experiència en enginyeria i recerca.
        </p>
      </motion.div>

      {/* Coordinadors */}
      <motion.div {...fadeUp} className="mb-14">
        <h3 className="font-display font-semibold text-lg mb-8 text-muted-foreground">Coordinadors</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {coordinators.map((m, i) => (
            <MemberCard key={m.name} member={m} delay={i * 0.05} />
          ))}
        </div>
      </motion.div>

      {/* Equip */}
      <motion.div {...fadeUp}>
        <h3 className="font-display font-semibold text-lg mb-8 text-muted-foreground">Equip</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          {team.map((m, i) => (
            <MemberCard key={m.name} member={m} delay={i * 0.03} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TeamSection;
