import { motion } from "framer-motion";
import { Truck, ShoppingCart, Wrench, Package, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Truck,
    title: "Renta de Montacargas",
    description: "Equipos disponibles por día, semana, mes o proyecto. Eléctricos, combustión, apiladores y patines.",
    benefits: ["Disponibilidad inmediata", "Sin inversión inicial", "Mantenimiento incluido", "Equipos certificados"],
    cta: "Cotizar renta",
    accent: "from-blue-600 to-blue-800",
  },
  {
    icon: ShoppingCart,
    title: "Venta de Montacargas",
    description: "Nuevos, seminuevos y reacondicionados. Asesoría personalizada y opciones de financiamiento.",
    benefits: ["Nuevos y seminuevos", "Asesoría especializada", "Cotización personalizada", "Financiamiento disponible"],
    cta: "Cotizar equipo",
    accent: "from-orange-500 to-orange-700",
  },
  {
    icon: Wrench,
    title: "Servicio Técnico",
    description: "Mantenimiento preventivo y correctivo, diagnóstico de fallas y servicio en sitio.",
    benefits: ["Mantenimiento preventivo", "Reparación en sitio", "Diagnóstico especializado", "Respuesta rápida"],
    cta: "Solicitar servicio",
    accent: "from-blue-600 to-blue-800",
  },
  {
    icon: Package,
    title: "Refacciones",
    description: "Amplio inventario: llantas, baterías, cargadores, horquillas, filtros, sistemas hidráulicos.",
    benefits: ["Llantas y baterías", "Horquillas y filtros", "Sistemas hidráulicos", "Partes eléctricas"],
    cta: "Cotizar refacciones",
    accent: "from-orange-500 to-orange-700",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

const ServicesSection = () => (
  <section id="servicios" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-accent" />
          <span className="text-accent font-display font-bold text-sm tracking-[0.2em] uppercase">Nuestros servicios</span>
        </div>
        <h2 className="font-display text-5xl md:text-6xl font-black text-foreground uppercase leading-none">
          Soluciones integrales<br />
          <span className="text-gradient-brand">en montacargas</span>
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="group bg-card rounded-lg border border-border p-8 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Top accent line */}
            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />

            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <s.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-black text-foreground uppercase">{s.title}</h3>
                <p className="text-muted-foreground mt-1 leading-relaxed text-sm">{s.description}</p>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-2 mb-6">
              {s.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                  <ChevronRight className="w-4 h-4 text-accent flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors font-display font-bold tracking-wide">
              <a href="#contacto">
                {s.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
