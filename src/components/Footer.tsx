import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logoFull from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <img src={logoFull} alt="Toras Home Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed">
              Tower of Refuge and Strength Outreach — providing refuge to the homeless and hope to vulnerable children in Ibadan, Nigeria.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.facebook.com/people/Toras-home-ibadan/61555568011599/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/toras_home/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Services", "Daily Needs", "Projects", "Gallery", "Blog", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Daily Needs" ? "/basic-needs" : `/${link.toLowerCase()}`}
                  className="text-background/60 hover:text-primary transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Contact</h4>
            <div className="space-y-3 text-sm text-background/60">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <div>
                  <p>+234 708 160 8777</p>
                  <p>+234 812 266 6406</p>
                  <p>+44 778 279 5630</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <p>torashome2016@gmail.com</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <p>No 5B Close, White House Bus stop, off Akala Express, Ibadan, Nigeria</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Support Us</h4>
            <p className="text-background/60 text-sm">
              Your support can transform lives. Join our mission today.
            </p>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-heading font-semibold text-sm hover:bg-terracotta-dark transition-colors"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-background/40 text-sm">
          <p>© {new Date().getFullYear()} Toras Home. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
