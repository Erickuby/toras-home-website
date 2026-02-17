import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FloatingDonateBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 100px
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-50 lg:hidden"
                >
                    <Link
                        to="/donate"
                        className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/40 hover:bg-terracotta-dark transition-colors active:scale-95"
                        aria-label="Donate Now"
                    >
                        <Heart className="w-6 h-6 fill-current" />
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingDonateBtn;
