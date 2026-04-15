import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FuelType = "TODOS" | "ELÉCTRICO" | "GAS/GASOLINA" | "DIESEL";

const equipment = [
  // ELÉCTRICOS
  { model: "LG20BE", type: "ELÉCTRICO", subtitle: "Triciclo Eléctrico", motor: "5.4×2 KW", cap: "2,000", height: "4.80", badge: "Triciclo", img: "https://grnagroindustrial.com/wp-content/uploads/2025/01/20TRI.png" },
  { model: "LG20B",  type: "ELÉCTRICO", subtitle: "Eléctrico",          motor: "10 KW",    cap: "2,000", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/20-e.png" },
  { model: "LG25B",  type: "ELÉCTRICO", subtitle: "Eléctrico",          motor: "10 KW",    cap: "2,500", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/25e.png" },
  { model: "LG30B",  type: "ELÉCTRICO", subtitle: "Eléctrico",          motor: "10 KW",    cap: "3,000", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/30e.png" },
  { model: "LG35B",  type: "ELÉCTRICO", subtitle: "Eléctrico",          motor: "10 KW",    cap: "3,500", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/35e.png" },
  { model: "LG50B",  type: "ELÉCTRICO", subtitle: "Doble Rodado",       motor: "18 KW",    cap: "5,000", height: "4.00", badge: "Doble Rodado", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/n50e.png" },
  // GAS/GASOLINA
  { model: "LG15GLT", type: "GAS/GASOLINA", subtitle: "Gas/Gasolina", motor: "Nissan K20", cap: "1,500", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/15gas.png" },
  { model: "LG20GLT", type: "GAS/GASOLINA", subtitle: "Gas/Gasolina", motor: "Nissan K20", cap: "2,000", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/20gas.png" },
  { model: "LG25GLT", type: "GAS/GASOLINA", subtitle: "Gas/Gasolina", motor: "Nissan K20", cap: "2,500", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/25gas.png" },
  { model: "LG30GLT", type: "GAS/GASOLINA", subtitle: "Gas/Gasolina", motor: "Nissan K25", cap: "3,000", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/30gas.png" },
  { model: "LG35GLT", type: "GAS/GASOLINA", subtitle: "Gas/Gasolina", motor: "Nissan K25", cap: "3,500", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/35gas.png" },
  // DIESEL
  { model: "LG25DT",  type: "DIESEL", subtitle: "Mitsubishi 4 Cil.", motor: "Mitsubishi 4C", cap: "2,500", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/25-diesel.png" },
  { model: "LG30DT",  type: "DIESEL", subtitle: "Mitsubishi 4 Cil.", motor: "Mitsubishi 4C", cap: "3,000", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/30-diesel.png" },
  { model: "LG35DT",  type: "DIESEL", subtitle: "Mitsubishi 4 Cil.", motor: "Mitsubishi 4C", cap: "3,500", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/35-diesel.png" },
  { model: "LG35DT",  type: "DIESEL", subtitle: "Xinchai 4 Cil.",    motor: "Xinchai 4C",    cap: "3,500", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/35-diesel.png" },
  { model: "FD30T",   type: "DIESEL", subtitle: "Isuzu 4 Cil.",      motor: "Isuzu 4C",      cap: "3,000", height: "4.80", badge: "Económico", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/fd30diesel.png" },
  { model: "FD30T",   type: "DIESEL", subtitle: "Xinchai 4 Cil.",    motor: "Xinchai 4C",    cap: "3,000", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/fd30diesel.png" },
  { model: "CPCD35",  type: "DIESEL", subtitle: "4×4 Xinchai",       motor: "Xinchai 4C",    cap: "3,500", height: "4.80", badge: "4×4", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/4x4-diesel.png" },
  { model: "LG40DT",  type: "DIESEL", subtitle: "Mitsubishi 6 Cil.", motor: "Mitsubishi 6C", cap: "4,000", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/40-diesle.png" },
  { model: "LG50DT",  type: "DIESEL", subtitle: "Mitsubishi 6 Cil.", motor: "Mitsubishi 6C", cap: "5,000", height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/50-diesel.png" },
  { model: "LG60DT",  type: "DIESEL", subtitle: "Cummins 4 Cil.",    motor: "Cummins 4C",    cap: "6,000", height: "4.80", badge: "C/S Cabina", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/60-diesel.png" },
  { model: "LG75DT",  type: "DIESEL", subtitle: "Cummins 4 Cil.",    motor: "Cummins 4C",    cap: "7,500", height: "4.80", badge: "C/S Cabina", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/75-diesel.png" },
  { model: "LG100DT", type: "DIESEL", subtitle: "Cummins 4 Cil.",    motor: "Cummins 4C",    cap: "10,000",height: "4.80", img: "https://grnagroindustrial.com/wp-content/uploads/2025/02/100-diesel.png" },
];

const typeColor: Record<string, { accent: string; badge: string; dot: string }> = {
  "ELÉCTRICO":   { accent: "#00d4ff", badge: "rgba(0,212,255,.15)", dot: "#00d4ff" },
  "GAS/GASOLINA":{ accent: "#7ed321", badge: "rgba(126,211,33,.15)", dot: "#7ed321" },
  "DIESEL":      { accent: "#f5a20a", badge: "rgba(245,162,10,.15)", dot: "#f5a20a" },
};

const filters: FuelType[] = ["TODOS", "ELÉCTRICO", "GAS/GASOLINA", "DIESEL"];

const EquipmentSection = () => {
  const [active, setActive] = useState<FuelType>("TODOS");
  const visible = active === "TODOS" ? equipment : equipment.filter(e => e.type === active);

  return (
    <section id="equipos" className="py-24 md:py-32" style={{ background: "hsl(218 72% 14%)" }}>
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5" style={{ background: "#f5a20a" }} />
            <span className="font-display font-bold text-sm tracking-[0.2em] uppercase" style={{ color: "#f5a20a" }}>
              Catálogo Lonking · Distribuidores Oficiales
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white uppercase leading-none mb-2">
            Gama completa de<br />
            <span style={{ color: "#f5a20a" }}>montacargas</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl text-sm">
            22 modelos disponibles · Capacidades de 1.5 a 10 toneladas · Garantía 3 años o 2,400 hrs
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="font-display font-bold text-sm tracking-wide uppercase px-5 py-2 rounded-sm border transition-all duration-200"
              style={active === f ? {
                background: f === "TODOS" ? "#f5a20a" : typeColor[f]?.accent,
                color: "#000",
                borderColor: f === "TODOS" ? "#f5a20a" : typeColor[f]?.accent,
              } : {
                background: "transparent",
                color: "rgba(255,255,255,.5)",
                borderColor: "rgba(255,255,255,.15)",
              }}
            >
              {f === "ELÉCTRICO" && "⚡ "}
              {f === "GAS/GASOLINA" && "⛽ "}
              {f === "DIESEL" && "🛢 "}
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          <AnimatePresence>
            {visible.map((eq, i) => {
              const c = typeColor[eq.type];
              return (
                <motion.div
                  key={`${eq.model}-${eq.subtitle}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                  className="relative rounded-sm border p-4 flex flex-col group cursor-pointer transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,.04)",
                    borderColor: "rgba(255,255,255,.08)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = c.accent;
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.07)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.04)";
                  }}
                >
                  {/* Left accent bar on hover */}
                  <div className="absolute top-0 left-0 w-0.5 h-0 group-hover:h-full transition-all duration-300 rounded-l-sm" style={{ background: c.accent }} />

                  {/* Badge */}
                  {eq.badge && (
                    <span className="absolute top-2 right-2 text-[9px] font-display font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm" style={{ background: c.badge, color: c.accent }}>
                      {eq.badge}
                    </span>
                  )}

                  {/* Type dot */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: c.dot }} />
                    <span className="text-[10px] font-display font-bold tracking-widest uppercase" style={{ color: c.accent, opacity: 0.8 }}>
                      {eq.type}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="flex items-center justify-center h-28 mb-3">
                    <img
                      src={eq.img}
                      alt={eq.model}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,.7))" }}
                      onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  </div>

                  {/* Model */}
                  <div className="font-display text-xl font-black text-white uppercase leading-none mb-1">{eq.model}</div>
                  <div className="text-[11px] text-white/40 uppercase tracking-wide mb-3">{eq.subtitle}</div>

                  {/* Specs */}
                  <div className="mt-auto space-y-1.5 border-t pt-3" style={{ borderColor: "rgba(255,255,255,.08)" }}>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-white/40">Capacidad</span>
                      <span className="font-display text-base font-bold" style={{ color: c.accent }}>{eq.cap} kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-white/40">Motor</span>
                      <span className="text-[11px] font-semibold text-white/70">{eq.motor}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider text-white/40">Levante</span>
                      <span className="text-[11px] font-semibold text-white/70">{eq.height} m</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    className="mt-3 block text-center font-display font-bold text-xs tracking-widest uppercase py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-200"
                    style={{ background: c.accent, color: "#000" }}
                  >
                    Cotizar
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Footer note */}
        <div className="mt-10 text-center text-white/30 text-xs uppercase tracking-widest font-display">
          Garantía oficial · 3 años o 2,400 horas · DSANT — Distribuidores Lonking
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
