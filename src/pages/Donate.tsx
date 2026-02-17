import { motion } from "framer-motion";
import { Heart, CreditCard } from "lucide-react";
import torasChildren from "@/assets/toras-children.jpg";

const Donate = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">Donate</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Support Our <span className="text-gradient">Mission</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Your generous donation helps us provide shelter, nutrition, education, and love to vulnerable children. Every contribution makes a difference.
            </p>

            <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg">Bank Transfer</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Account Number</span>
                  <span className="font-semibold text-foreground">0002633074</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Bank</span>
                  <span className="font-semibold text-foreground">GT Bank</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Account Name</span>
                  <span className="font-semibold text-foreground">Tower of Refuge and Strength Outreach</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src={torasChildren} alt="Children at Toras Home" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
