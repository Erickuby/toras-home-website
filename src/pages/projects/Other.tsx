import { motion } from "framer-motion";
import { ArrowLeft, Rocket } from "lucide-react";
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

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="bg-card rounded-3xl border border-border overflow-hidden text-center py-20 px-4"
                    >
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Rocket className="w-10 h-10 text-primary" />
                        </div>
                        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                            More Announcements Coming
                        </h2>
                        <p className="text-muted-foreground max-w-md mx-auto">
                            We are constantly evaluating new ways to bring value. Check back later for updates on additional programs, outreach events, and specialized initiatives.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Other;
