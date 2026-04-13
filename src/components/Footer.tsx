import { Instagram, Phone } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { siteData, whatsappDefaultUrl } from "@/lib/siteData";

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="container relative mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <BrandLogo
            iconClassName="h-7 w-auto"
            textSizeClassName="text-xl"
            subtextSizeClassName="text-[10px]"
          />

          <div className="text-center">
            <p className="text-sm text-foreground">
              {siteData.addressLine} • {siteData.city}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Audax Gym. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Abrir WhatsApp da Audax Gym"
            >
              <Phone size={20} />
            </a>
            <a
              href={siteData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Abrir Instagram da Audax Gym"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
