import { motion } from "framer-motion";
import { ArrowLeft, Clock, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PhaseTwo = () => {
    return (
        <div className="py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <Button variant="ghost" asChild className="mb-8">
                        <Link to="/projects/building" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Building Phases
                        </Link>
                    </Button>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center space-y-4 mb-16"
                    >
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-primary/15 text-primary text-xs font-heading font-semibold rounded-full uppercase tracking-wider">
                                Phase 2
                            </span>
                            <span className="px-3 py-1 bg-background flex items-center gap-1 text-foreground text-xs font-heading font-semibold rounded-full uppercase tracking-wider border border-border">
                                <Clock className="w-3 h-3 text-amber-500" />
                                Coming Soon
                            </span>
                        </div>
                        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">Renovation & Upgrading Facility</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Complete internal and external remodeling of the acquired space. We will be equipping the facility with modern learning environments, safe recreational areas, and upgraded infrastructure to host the Tech for Kids program.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="bg-card rounded-3xl border border-border overflow-hidden text-center py-20 px-8"
                    >
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Hammer className="w-10 h-10 text-primary" />
                        </div>
                        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                            This Phase Is Coming Soon
                        </h2>
                        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                            We are preparing to begin renovation and upgrading of the facility. Stay tuned for progress updates, timelines, and how you can get involved!
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-full hover:opacity-90 transition-opacity"
                        >
                            Get Involved
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PhaseTwo;
