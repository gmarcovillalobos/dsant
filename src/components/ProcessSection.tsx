import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Solicitas información", desc: "Completa el formulario o escríbenos por WhatsApp." },
  { num: "02", title: "Recibes asesoría",      desc: "Nuestro equipo analiza tus necesidades operativas." },
  { num: "03", title: "Te enviamos cotización", desc: "Propuesta personalizada sin compromiso, en horas." },
  { num: "04", title: "Entrega rápida",         desc: "Equipo listo en tu ubicación en el menor tiempo." },
];

const ProcessSection = () => (
  <section className="py-24 md:py-32 gradient-hero bg-grid relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #f5a20a, transparent)" }} />

    <div className="container relative z-10">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-accent" />
          <span className="text-accent font-display font-bold text-sm tracking-[0.2em] uppercase">Proceso de trabajo</span>
          <div className="w-8 h-0.5 bg-accent" />
        </div>
        <h2 className="font-display text-5xl md:text-6xl font-black text-white uppercase leading-none">
          Así de fácil es<br />
          <span style={{ color: "#f5a20a" }}>trabajar con DSANT</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="p-8 bg-navy/60 hover:bg-navy/80 transition-colors"
          >
            <div className="font-display text-7xl font-black leading-none mb-4" style={{ color: "rgba(245,162,10,.15)" }}>
              {s.num}
            </div>
            <h3 className="font-display text-xl font-black text-white uppercase mb-3">{s.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
