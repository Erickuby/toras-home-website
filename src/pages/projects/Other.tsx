import { motion } from "framer-motion";
import { ArrowLeft, Rocket, Bus, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Other = () => {
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
                        <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">Miscellaneous</p>
                        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">Other Projects</h1>
                        <p className="text-muted-foreground text-lg">
                            Exploring new avenues to support and develop our community.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {/* School Bus Acquisition */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="bg-card rounded-3xl border border-border overflow-hidden"
                        >
                            <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent p-8 lg:p-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Bus className="w-48 h-48" />
                                </div>

                                <div className="flex items-center gap-2 mb-6 relative z-10">
                                    <span className="px-3 py-1 bg-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-heading font-semibold rounded-full uppercase tracking-wider">
                                        Planned
                                    </span>
                                    <span className="px-3 py-1 bg-background/80 flex items-center gap-1 text-foreground text-xs font-heading font-semibold rounded-full uppercase tracking-wider border border-border/50">
                                        <Clock className="w-3 h-3 text-amber-500" />
                                        Coming Soon
                                    </span>
                                </div>

                                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 relative z-10">
                                    School Bus Acquisition
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl relative z-10">
                                    Securing reliable transportation to ensure safe and consistent access to our programs. A dedicated school bus will connect children from surrounding communities to our facility, removing one of the biggest barriers to education and opportunity.
                                </p>
                            </div>
                        </motion.div>

                        {/* More Announcements */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="bg-card rounded-3xl border border-border overflow-hidden text-center py-16 px-4"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                                <Rocket className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-3">
                                More Announcements Coming
                            </h2>
                            <p className="text-muted-foreground max-w-md mx-auto text-sm">
                                We are constantly evaluating new ways to bring value. Check back later for updates on additional programs, outreach events, and specialized initiatives.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Other;
