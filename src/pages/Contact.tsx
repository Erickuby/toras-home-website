import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">Contact</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">
            Reach out to us to learn more about our mission and support vulnerable children in our community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-border text-center card-hover"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-3">Phone</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>+234 708 160 8777</p>
              <p>+234 812 266 6406</p>
              <p>+44 778 279 5630</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border text-center card-hover"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-3">Email</h3>
            <p className="text-sm text-muted-foreground">torashome2016@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border text-center card-hover"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-3">Address</h3>
            <p className="text-sm text-muted-foreground">
              No 5B Close, White House Bus stop, off Akala Express, Liberty Academy Road, Ibadan, Nigeria
            </p>
          </motion.div>
        </div>

        {/* Google Map Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border/50"
        >
          <div className="w-full h-[500px] bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.884570649712!2d3.847585074762039!3d7.366838392642398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d79da93a025%3A0xe5492d245943285c!2sToras%20Orphanage!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Toras Orphanage Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </motion.div>

        {/* Get Directions Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="https://www.google.com/maps/dir//Toras+Orphanage+Ibadan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all bg-primary rounded-full hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 active:scale-95"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Get Directions
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
