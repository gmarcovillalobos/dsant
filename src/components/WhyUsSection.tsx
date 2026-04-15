import { motion } from "framer-motion";
import { Clock, Users, ShieldCheck, Headphones, Award, Building2 } from "lucide-react";

const reasons = [
  { icon: Clock,       title: "Respuesta en 24h",           desc: "Tu operación no puede esperar. Respondemos rápido." },
  { icon: Users,       title: "Soluciones personalizadas",   desc: "Analizamos tu operación y te ofrecemos el equipo ideal." },
  { icon: ShieldCheck, title: "Equipos certificados",        desc: "Revisados, garantizados y listos para operar desde el día uno." },
  { icon: Headphones,  title: "Soporte técnico",             desc: "Técnicos especializados disponibles para tu empresa." },
  { icon: Award,       title: "Distribuidores oficiales",    desc: "Representantes autorizados Lonking en México." },
  { icon: Building2,   title: "Enfoque empresarial",         desc: "Diseñado para las necesidades reales de tu negocio." },
];

const WhyUsSection = () => (
  <section id="nosotros" className="py-24 md:py-32 bg-secondary/40">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent font-display font-bold text-sm tracking-[0.2em] uppercase">¿Por qué elegirnos?</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-foreground uppercase leading-none mb-6">
            Tu operación merece<br />
            <span className="text-gradient-brand">un socio confiable</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            En DSANT combinamos experiencia en el sector industrial con el respaldo de Lonking — una de las 50 empresas de maquinaria más importantes del mundo, cotizada en la Bolsa de Hong Kong.
          </p>
          <div className="mt-8 flex gap-8">
            {[{ n: "50+", l: "Países Lonking" }, { n: "1993", l: "Desde" }, { n: "1,000+", l: "Modelos" }].map(s => (
              <div key={s.l}>
                <div className="font-display text-3xl font-black text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex gap-4 p-5 bg-card rounded-lg border border-border hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-black text-foreground uppercase mb-1">{r.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
