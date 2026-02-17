import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">Blog</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">Stories & Updates</h1>
          <p className="text-muted-foreground text-lg">
            Blog posts coming soon. Stay tuned for stories of impact, updates, and news from Toras Home.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
