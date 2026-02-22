import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PhaseOne = () => {
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
                            <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-heading font-semibold rounded-full uppercase tracking-wider">
                                Phase 1
                            </span>
                            <span className="px-3 py-1 bg-background flex items-center gap-1 text-foreground text-xs font-heading font-semibold rounded-full uppercase tracking-wider border border-border">
                                <CheckCircle2 className="w-3 h-3 text-green-500" />
                                Completed
                            </span>
                        </div>
                        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">Acquired Property</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Strategic acquisition of the main facility plot aimed at establishing our central hub. This milestone lays the permanent foundation for all our upcoming programs and community outreach efforts.
                        </p>
                    </motion.div>

                    {/* Gallery Section - placeholder for user-provided images/videos */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Project Gallery</h2>

                        <div className="bg-card rounded-3xl border border-border overflow-hidden text-center py-20 px-8">
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Building2 className="w-10 h-10 text-green-500" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                                Media Coming Soon
                            </h3>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                Images and videos of the completed property acquisition will be added here shortly. Check back soon!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PhaseOne;
