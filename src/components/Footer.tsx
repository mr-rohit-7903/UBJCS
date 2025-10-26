import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import logo from "@/assets/ubjcs-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="UBJCS Logo" className="w-12 h-12" />
              <div>
                <h3 className="font-bold text-lg text-gradient">UBJCS</h3>
                <p className="text-sm text-muted-foreground">Cultural Society</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              UP Bihar Jharkhand Cultural Society - Promoting culture, unity, and
              traditional heritage of our communities.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@ubjcs.org"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@ubjcs.org
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Community Center, Cultural District</span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-cultural"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-cultural"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-cultural"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Copyright © 2025 UBJCS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
