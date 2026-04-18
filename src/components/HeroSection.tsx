import { motion } from "framer-motion";
import { MessageCircle, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-forklift.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Almacén industrial con montacargas" className="w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-grid" />
    </div>

    {/* Diagonal accent stripe */}
    <div className="absolute bottom-0 right-0 w-1/3 h-2 gradient-cta" />

    <div className="container relative z-10 py-40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-0.5 bg-accent" />
          <span className="text-accent font-display font-700 text-sm tracking-[0.2em] uppercase">
            Distribuidores Oficiales Lonking
          </span>
        </motion.div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8 uppercase">
          Montacargas<br />
          <span className="text-gradient-brand">industriales</span><br />
          a tu medida
        </h1>

        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl leading-relaxed font-body">
          Renta, venta y servicio técnico especializado. Equipos eléctricos, gas/gasolina y diesel disponibles de inmediato para tu operación.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="gradient-cta text-white border-0 text-base px-10 py-6 font-display font-bold tracking-wide text-lg hover:opacity-90 transition-opacity shadow-2xl"
            asChild
          >
            <a href="#contacto">
              <FileText className="w-5 h-5 mr-2" />
              Solicitar cotización
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white bg-white/10 hover:bg-white/20 text-base px-10 py-6 font-display font-bold tracking-wide text-lg backdrop-blur-sm"
            asChild
          >
            <a href="https://wa.me/5213331481362" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="absolute bottom-16 left-0 right-0 container"
      >
        <div className="flex gap-10 border-t border-white/10 pt-8">
          {[
            { num: "22+", label: "Modelos disponibles" },
            { num: "10T", label: "Capacidad máxima" },
            { num: "3 años", label: "Garantía Lonking" },
            { num: "24h", label: "Respuesta garantizada" },
          ].map((s) => (
            <div key={s.label} className="text-white/80">
              <div className="font-display text-3xl font-black text-white leading-none">{s.num}</div>
              <div className="text-xs tracking-widest uppercase text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Scroll cue */}
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <ChevronDown className="w-6 h-6" />
    </motion.div>
  </section>
);

export default HeroSection;
