import { motion } from "framer-motion";
import { Cpu, Monitor, BrainCircuit, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TechIT = () => {
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
                        <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">Tech & IT</p>
                        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">Digital Literacy Program</h1>
                        <p className="text-muted-foreground text-lg">
                            Equipping vulnerable children with future-ready skills.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="bg-card rounded-3xl border border-border overflow-hidden"
                    >
                        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-8 lg:p-12">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 bg-primary/15 text-primary text-xs font-heading font-semibold rounded-full uppercase tracking-wider">
                                    Current Project
                                </span>
                                <span className="px-3 py-1 bg-accent/15 text-accent-foreground text-xs font-heading font-semibold rounded-full uppercase tracking-wider">
                                    In Progress
                                </span>
                            </div>
                            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                                Tech for Kids
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
                                A comprehensive technology education initiative designed to teach our children about computers, technology, and artificial intelligence. We believe every child deserves access to digital skills that will empower their future.
                            </p>

                            <div className="grid sm:grid-cols-3 gap-6 mb-8">
                                {[
                                    { icon: Monitor, title: "Computer Skills", desc: "Basic to intermediate computer literacy, typing, and software usage." },
                                    { icon: Cpu, title: "Technology", desc: "Understanding hardware, internet safety, and digital tools." },
                                    { icon: BrainCircuit, title: "AI & Future Tech", desc: "Introduction to artificial intelligence and emerging technologies." },
                                ].map((item) => (
                                    <div key={item.title} className="bg-background/60 rounded-xl p-5 border border-border/50">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h4 className="font-heading font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                                        <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-background/60 rounded-full text-sm text-muted-foreground border border-border/50">🎯 Goal: 50+ children trained</span>
                                <span className="px-4 py-2 bg-background/60 rounded-full text-sm text-muted-foreground border border-border/50">📅 Starting Soon</span>
                                <span className="px-4 py-2 bg-background/60 rounded-full text-sm text-muted-foreground border border-border/50">📍 Ibadan, Nigeria</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default TechIT;
