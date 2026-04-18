import { useState } from "react";
import { Send, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Renta de montacargas",
  "Compra de montacargas",
  "Servicio técnico",
  "Refacciones",
  "Otro",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "¡Solicitud enviada!", description: "Nos pondremos en contacto contigo pronto." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent font-display font-bold text-sm tracking-[0.2em] uppercase">Contacto</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-black text-foreground uppercase leading-none mb-6">
              Solicita tu<br />
              <span className="text-gradient-brand">cotización</span><br />
              inmediata
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Completa el formulario y recibe respuesta en menos de 24 horas. También puedes contactarnos directamente.
            </p>

            <div className="space-y-5">
              <a href="tel:+5213332558797" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-display font-bold">Teléfono</div>
                  <div className="font-display font-black text-foreground text-lg">(33) 3255-8797</div>
                </div>
              </a>
              <a href="mailto:contacto@dsant.com.mx" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-display font-bold">Email</div>
                  <div className="font-display font-black text-foreground text-lg">contacto@dsant.com.mx</div>
                </div>
              </a>
              <a href="https://wa.me/5213331481362" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-display font-bold">WhatsApp</div>
                  <div className="font-display font-black text-foreground text-lg">Escríbenos ahora</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-lg border border-border p-8 shadow-industrial space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-display font-bold uppercase tracking-wider text-foreground mb-2">Nombre *</label>
                <Input required placeholder="Tu nombre completo" />
              </div>
              <div>
                <label className="block text-xs font-display font-bold uppercase tracking-wider text-foreground mb-2">Empresa</label>
                <Input placeholder="Nombre de tu empresa" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-display font-bold uppercase tracking-wider text-foreground mb-2">Teléfono *</label>
              <Input required type="tel" placeholder="(33) 1234-5678" />
            </div>
            <div>
              <label className="block text-xs font-display font-bold uppercase tracking-wider text-foreground mb-2">Servicio que necesitas *</label>
              <select
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Selecciona un servicio</option>
                {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-display font-bold uppercase tracking-wider text-foreground mb-2">Mensaje</label>
              <Textarea placeholder="Cuéntanos más sobre lo que necesitas..." rows={4} />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full gradient-cta text-white border-0 hover:opacity-90 transition-opacity font-display font-black tracking-wide text-base"
              disabled={loading}
            >
              <Send className="w-4 h-4 mr-2" />
              {loading ? "Enviando..." : "Solicitar cotización inmediata"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
