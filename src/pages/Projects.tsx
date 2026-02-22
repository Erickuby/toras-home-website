import { motion } from "framer-motion";
import { Cpu, Building2, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">Our Projects</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">Empowering Through Innovation</h1>
          <p className="text-muted-foreground text-lg">
            Discover our upcoming and ongoing projects designed to equip vulnerable children with future-ready skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Building Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link to="/projects/building" className="block h-full group">
              <div className="bg-card rounded-3xl border border-border overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary/50 relative">
                <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 top-8 right-8 absolute">
                    <Building2 className="w-7 h-7 text-green-500" />
                  </div>

                  <div className="mt-14 mb-4">
                    <span className="px-3 py-1 bg-green-500/15 text-green-600 dark:text-green-400 text-[10px] font-heading font-semibold rounded-full uppercase tracking-wider mb-4 inline-block">
                      Infrastructure
                    </span>
                    <h2 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Building Phases
                    </h2>
                  </div>

                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    Creating safe, modern spaces for our community. Explore Phase 1 (Completed Property Acquisition) and Phase 2 (Facility Renovation).
                  </p>

                  <div className="mt-8 flex items-center text-primary font-medium text-sm group-hover:underline">
                    View Project <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Tech IT Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Link to="/projects/tech-it" className="block h-full group">
              <div className="bg-card rounded-3xl border border-border overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary/50 relative">
                <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 top-8 right-8 absolute">
                    <Cpu className="w-7 h-7 text-primary" />
                  </div>

                  <div className="mt-14 mb-4">
                    <span className="px-3 py-1 bg-primary/15 text-primary text-[10px] font-heading font-semibold rounded-full uppercase tracking-wider mb-4 inline-block">
                      Current Project
                    </span>
                    <h2 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Tech & IT
                    </h2>
                  </div>

                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    Digital Literacy Program designed to teach our children about computers, technology, and artificial intelligence.
                  </p>

                  <div className="mt-8 flex items-center text-primary font-medium text-sm group-hover:underline">
                    View Project <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link to="/projects/other" className="block h-full group">
              <div className="bg-card rounded-3xl border border-border overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary/50 relative">
                <div className="bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 top-8 right-8 absolute">
                    <Rocket className="w-7 h-7 text-indigo-500" />
                  </div>

                  <div className="mt-14 mb-4">
                    <span className="px-3 py-1 bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 text-[10px] font-heading font-semibold rounded-full uppercase tracking-wider mb-4 inline-block">
                      Miscellaneous
                    </span>
                    <h2 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Other Initiatives
                    </h2>
                  </div>

                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    Exploring new avenues to support and develop our community. Check back for more announcements on additional programs.
                  </p>

                  <div className="mt-8 flex items-center text-primary font-medium text-sm group-hover:underline">
                    View Project <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
