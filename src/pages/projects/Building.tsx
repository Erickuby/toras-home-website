import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Building2, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Building = () => {
    return (
        <div className="py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 max-w-4xl mx-auto">
                    <Button variant="ghost" asChild className="mb-8">
                        <Link to="/projects" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Link>
                    </Button>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center space-y-4 mb-16"
                    >
                        <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">Infrastructure</p>
                        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">Building Project Phases</h1>
                        <p className="text-muted-foreground text-lg">
                            Creating safe, modern spaces for our community to thrive and learn.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {/* Phase 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <Link to="/projects/building/phase-1" className="block group">
                                <div className="bg-card rounded-3xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-green-500/50 cursor-pointer">
                                    <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent p-8 lg:p-12 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 opacity-10">
                                            <Building2 className="w-48 h-48" />
                                        </div>

                                        <div className="flex items-center gap-2 mb-6 relative z-10">
                                            <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-heading font-semibold rounded-full uppercase tracking-wider">
                                                Phase 1
                                            </span>
                                            <span className="px-3 py-1 bg-background/80 flex items-center gap-1 text-foreground text-xs font-heading font-semibold rounded-full uppercase tracking-wider border border-border/50">
                                                <CheckCircle2 className="w-3 h-3 text-green-500" />
                                                Completed
                                            </span>
                                        </div>

                                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 relative z-10 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                            Acquired Property
                                        </h2>
                                        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl relative z-10">
                                            Strategic acquisition of the main facility plot aimed at establishing our central hub. This milestone lays the permanent foundation for all our upcoming programs and community outreach efforts.
                                        </p>
                                        <div className="mt-6 flex items-center text-green-600 dark:text-green-400 font-medium text-sm relative z-10 group-hover:underline">
                                            View Completed Projects <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Phase 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <Link to="/projects/building/phase-2" className="block group">
                                <div className="bg-card rounded-3xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 cursor-pointer">
                                    <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-8 lg:p-12 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 opacity-10">
                                            <Hammer className="w-48 h-48" />
                                        </div>

                                        <div className="flex items-center gap-2 mb-6 relative z-10">
                                            <span className="px-3 py-1 bg-primary/15 text-primary text-xs font-heading font-semibold rounded-full uppercase tracking-wider">
                                                Phase 2
                                            </span>
                                            <span className="px-3 py-1 bg-background/80 flex items-center gap-1 text-foreground text-xs font-heading font-semibold rounded-full uppercase tracking-wider border border-border/50">
                                                <Clock className="w-3 h-3 text-amber-500" />
                                                Coming Soon
                                            </span>
                                        </div>

                                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 relative z-10 group-hover:text-primary transition-colors">
                                            Renovation & Upgrading Facility
                                        </h2>
                                        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl relative z-10">
                                            Complete internal and external remodeling of the acquired space. We will be equipping the facility with modern learning environments, safe recreational areas, and upgraded infrastructure to host the Tech for Kids program.
                                        </p>
                                        <div className="mt-6 flex items-center text-primary font-medium text-sm relative z-10 group-hover:underline">
                                            Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Building;
