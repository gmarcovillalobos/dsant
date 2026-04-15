import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/dsant-logo.png";

const Footer = () => (
  <footer style={{ background: "hsl(218 72% 10%)" }} className="py-14">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <img src={logo} alt="DSANT" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">
            Renta, venta y servicio de montacargas industriales en México. Distribuidores oficiales Lonking.
          </p>
          <div className="mt-5 flex gap-3">
            {["Renta", "Venta", "Servicio", "Refacciones"].map(tag => (
              <span key={tag} className="text-[10px] font-display font-bold uppercase tracking-wider px-2 py-1 rounded-sm" style={{ background: "rgba(245,162,10,.12)", color: "#f5a20a" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-black text-white uppercase tracking-wide mb-5 text-sm">Servicios</h4>
          <ul className="space-y-2.5 text-sm text-white/50">
            {["Renta de montacargas", "Venta de montacargas", "Servicio técnico", "Refacciones", "Montacargas Lonking"].map(s => (
              <li key={s} className="hover:text-white/80 transition-colors cursor-pointer">{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-black text-white uppercase tracking-wide mb-5 text-sm">Contacto</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li className="flex items-center gap-3 hover:text-white/80 transition-colors">
              <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#f5a20a" }} />
              (33) 3255-8797
            </li>
            <li className="flex items-center gap-3 hover:text-white/80 transition-colors">
              <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#f5a20a" }} />
              contacto@dsant.com.mx
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: "#f5a20a" }} />
              México
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30" style={{ borderColor: "rgba(255,255,255,.08)" }}>
        <span>© {new Date().getFullYear()} DSANT Montacargas · dsant.com.mx · Todos los derechos reservados.</span>
        <span className="font-display uppercase tracking-widest">Distribuidores Oficiales Lonking</span>
      </div>
    </div>
  </footer>
);

export default Footer;
