import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/+5213332558797"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
    style={{ background: "#25D366" }}
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-white fill-white" />
  </a>
);

export default WhatsAppButton;
