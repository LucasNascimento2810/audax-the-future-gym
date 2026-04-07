import { MapPin, Instagram, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Contato</span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-3">
            VENHA NOS<br />
            <span className="text-gradient">CONHECER</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-lg mb-1">Localização</p>
                  <p className="text-muted-foreground">Rua Fortaleza, 2850</p>
                  <p className="text-muted-foreground">Cascavel — PR</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.instagram.com/audaxgymcascavel"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-lg mb-1">Instagram</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">@audaxgymcascavel</p>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/554599000171?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Audax%20Gym!"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-lg mb-1">WhatsApp</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">(45) 99000-0171</p>
                </div>
              </div>
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border h-full min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.5!2d-53.4551!3d-24.9575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d5a1b2c3d4e5%3A0x0!2sRua%20Fortaleza%2C%202850%20-%20Cascavel%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Audax Gym"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
