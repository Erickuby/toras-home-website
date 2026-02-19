import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-icon.png"; // Using the cropped icon for the navbar to save space, or full if preferred. Let's use the full logo as user likely wants the brand visible.
// Actually user gave both. The "cropped" one is usually the icon. The "retina" one is the full logo.
// Let's use the full logo for the navbar.
import logoFull from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Daily Needs", path: "/basic-needs" },
  { label: "Projects", path: "/projects" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Volunteer", path: "/volunteer" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/Toras-home-ibadan/61555568011599/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/toras_home/", label: "Instagram" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logoFull} alt="Toras Home Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Socials */}
            <div className="flex items-center gap-3 border-r border-border pr-6 mr-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Donate Button */}
            <div className="hidden lg:block">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-heading font-semibold text-sm hover:bg-terracotta-dark transition-colors duration-200"
              >
                <Heart className="w-4 h-4" />
                Donate
              </Link>
            </div>

          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {/* Socials */}
              <div className="flex items-center justify-center gap-8 py-6 border-t border-border/50 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="text-base font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-full font-heading font-semibold text-sm"
              >
                <Heart className="w-4 h-4" />
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
