import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Home, Utensils, GraduationCap, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import torasGroup from "@/assets/toras-group.png";
import torasChildren from "@/assets/toras-children.jpg";
import torasHope from "@/assets/toras-hope.jpg";
import torasFamily from "@/assets/toras-family.jpg";
import CountUp from "@/components/CountUp";

const heroSlides = [
  { image: carousel1, heading: "Celebrating Our Own", subtitle: "Happy Birthday Daddy" },
  { image: carousel2, heading: "Toras Home", subtitle: "Providing Refuge to the Homeless" },
  { image: carousel3, heading: "A Place of Hope", subtitle: "Where Every Child Matters" },
  { image: carousel4, heading: "Building Futures", subtitle: "Together We Can Make a Difference" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt={slide.heading}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        <div className="absolute inset-0 hero-overlay" />

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary w-8" : "bg-primary-foreground/40"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary-foreground/80 font-heading text-sm uppercase tracking-[0.2em] mb-4">
                Tower of Refuge and Strength Outreach
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">
                {heroSlides[currentSlide].heading}
              </h1>
              <p className="mt-6 text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto font-body">
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-heading font-semibold text-base hover:bg-terracotta-dark transition-all duration-200 shadow-lg shadow-primary/30"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 rounded-full font-heading font-semibold text-base hover:bg-primary-foreground/20 backdrop-blur-sm transition-all duration-200"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <motion.p variants={fadeUp} custom={0} className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">
                About Toras Home
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                A Safe Haven for{" "}
                <span className="text-gradient">Vulnerable Children</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg leading-relaxed">
                TORAS HOME ORPHANAGE is a non-profit organization in Ibadan, Oyo State, Nigeria, committed to caring for vulnerable children and families. Our experienced team provides shelter, psychological support, and crisis intervention services tailored to individual needs.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed">
                Founded out of compassion, we aim to create a safe haven for children who have faced adversity, ensuring they receive the love and resources necessary for personal growth and development.
              </motion.p>
              <motion.div variants={fadeUp} custom={4}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:gap-3 transition-all duration-200"
                >
                  Read Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={torasGroup}
                  alt="Children of Toras Home Orphanage"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                <p className="font-heading text-3xl font-bold"><CountUp end={9} />+</p>
                <p className="text-sm font-medium opacity-80">Years of Impact</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-warm py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12 space-y-4"
          >
            <motion.p variants={fadeUp} custom={0} className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">
              Our Story
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              A Cry For Help
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg">
              Watch our story and see the impact of your support on the lives of vulnerable children.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl aspect-video"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Sqmf_bf7y_0"
              title="A Cry For Help - Toras Orphanage"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={torasChildren}
          alt="Children at Toras Home"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground">
              Join Us in Making a Difference
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/70 text-lg">
              Your support can transform lives. Join our mission to provide care and compassion to vulnerable children today.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-heading font-semibold hover:bg-terracotta-dark transition-colors shadow-lg shadow-primary/30"
              >
                <Heart className="w-5 h-5" />
                Donate Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <motion.p variants={fadeUp} custom={0} className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">
              What We Do
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Our Initiatives
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg">
              Explore the diverse programs and services we offer to uplift vulnerable children and families in our community.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Shelter",
                desc: "We provide a spacious facility with separate rooms for boys and girls, full-time caregivers, and a well-furnished garden.",
                path: "/services",
              },
              {
                icon: Utensils,
                title: "Nutrition",
                desc: "Proper nutrition is vital for growth. We ensure children receive balanced meals to support their health and development.",
                path: "/services",
              },
              {
                icon: GraduationCap,
                title: "Education",
                desc: "Every child has unique learning needs. We provide tailored learning environments for academic success.",
                path: "/services",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Link
                  to={item.path}
                  className="block bg-card rounded-2xl p-8 border border-border card-hover group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiring Stories */}
      <section className="section-warm py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <motion.p variants={fadeUp} custom={0} className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">
              Impact Stories
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Inspiring Transformations
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg">
              Read the incredible stories of change and resilience from the children and families we support.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                image: torasHope,
                title: "Hope Restored",
                desc: "One child's life was transformed after experiencing homelessness. With our shelter and support, they regained stability, found joy in learning, and thrived academically.",
              },
              {
                image: torasFamily,
                title: "A Family United",
                desc: "Through our community intervention programs, we helped reunite and strengthen families, creating lasting bonds and stable homes for children in need.",
              },
            ].map((story, i) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-card rounded-2xl overflow-hidden border border-border card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {story.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
