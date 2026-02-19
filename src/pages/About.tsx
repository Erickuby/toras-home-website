import { motion } from "framer-motion";
import { Heart, Users, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import torasHope from "@/assets/toras-hope.jpg";
import founderImage from "@/assets/founder.jpg";

const About = () => {
  return (
    <div>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">About Us</p>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                About <span className="text-gradient">TORAS HOME</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Tower of Refuge and Strength Outreach (TORAS) is a community and shelter-based organization that provides care and shelter for children within communities and over 3 years now. Its operating headquarters is based at Ibadan in Oyo State, Nigeria. We have a staff strength of professionals who are committed to community-based and family-focused programs with shelter and care services for vulnerable children. This is done via counseling and education support to more than 40 children and families.Programs for children and youth includes shelter and protection which is supervised by competent hands, crisis intervention, mental health assessment, homeless services, in-home counseling and family protection services.If you would like to learn more about how you can help the kids through a variety of volunteer opportunities, employment, becoming a foster parent, or making a charitable donation – please take some time to check out the rest of our site.We thank you for helping us fulfill our mission of giving children a childhood and future!
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Compassionate Care</h3>
                    <p className="text-sm text-muted-foreground mt-1">We prioritize the emotional and physical well-being of each child.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Community Focused</h3>
                    <p className="text-sm text-muted-foreground mt-1">Our programs strengthen families and empower communities.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={torasHope} alt="About Toras Home" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-warm py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 lg:p-10 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-foreground font-semibold mb-2">
                Secured Child for Global development
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A healthy community where families and children come first.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-card rounded-2xl p-8 lg:p-10 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-foreground font-semibold mb-2">
                Providing loving, nurturing, Christ-centered homes for orphans and vulnerable Children.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Giving children a childhood and a future via protective, educative and holistic support as well as community capacity building to care for their children.
              </p>
            </motion.div>
          </div>

          {/* Core Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-8">Our Core Values</h3>
            <div className="flex flex-wrapjustify-center justify-center gap-4">
              {[
                "Integrity",
                "Collaboration",
                "Knowledge",
                "Diversity",
                "Commitment",
                "Quality",
                "Community Participation",
                "Sustainable Development Goals (SDGs)"
              ].map((value, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-primary/5 text-primary-dark font-medium rounded-full border border-primary/10 hover:bg-primary/10 transition-colors"
                >
                  {value}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet The Founder */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-12">
                Meet The Founder
              </h2>

              <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
                <img
                  src={founderImage}
                  alt="Elder Abraham Adegboyega Isaac"
                  className="w-full h-full object-cover rounded-full border-4 border-background shadow-xl relative z-10"
                />
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Elder Abraham Adegboyega Isaac
              </h3>
              <p className="text-primary font-heading font-medium mt-2 mb-8 uppercase tracking-wider text-sm">
                Meet the Founder
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg mx-auto text-muted-foreground leading-relaxed text-justify sm:text-center"
            >
              <p>
                Elder Abraham Adegboyega Isaac is the Founder and Executive Director of Tower of Refuge and Strength Outreach (Toras) Home in Ibadan, Oyo State, Nigeria, which was established September 2017. He is married to his darling wife Mrs Abraham - Adegboyega Abimbola and blessed with lovely children. His experience of over 15 years in Theology and nonprofit leadership has influence his God's given vision.
              </p>
              <p>
                He leverages his multidisciplinary expertise to champion the welfare of vulnerable children. Through his Home, He has significantly impacted child care, nutrition, protection, health, physco social and education, earning numerous accolades/recognition in Nigeria and abroad.
              </p>
              <p>
                Elder Isaac is an active member of several professional organizations such as The Association for orphans and Vulnerable children in Nigeria (AONN), Association of orphanages and Home Operators in Nigeria (ASOHON) dedicated to child protection and sustainable development, and remains steadfast in his mission to nurture hope and resilience in an underserved communities.
              </p>
            </motion.div>

            {/* Meet The Co-Founder / Wife */}
            <div className="mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
                  <img
                    src="https://www.torashome.org.ng/wp-content/uploads/2026/02/33.jpeg"
                    alt="Mrs Abimbola Abraham -Adegboyega"
                    className="w-full h-full object-cover rounded-full border-4 border-background shadow-xl relative z-10"
                  />
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                  Mrs Abimbola Abraham -Adegboyega
                </h3>
                <p className="text-primary font-heading font-medium mt-2 mb-8 uppercase tracking-wider text-sm">
                  Founder&apos;s Wife, COO & Administrative Coordinator
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg mx-auto text-muted-foreground leading-relaxed text-justify sm:text-center space-y-6"
              >
                <p>
                  My life’s work is shaped by a simple conviction: every child deserves safety, dignity, and a future. For the past eight years, I have served as the Administrator of Toras Orphanage Home, where I oversee operations and lead a small but dedicated team committed to protecting vulnerable children. Our facility provides shelter, healing, and educational pathways for children rescued from abuse, violence, abandonment, and poverty. Many arrive frightened and unsure of their place in the world; watching them regain confidence and hope has been the most meaningful experience of my life.
                </p>
                <p>
                  I provide leadership in program management, staff coordination, compliance with regulatory standards, and resource allocation—often under significant financial constraints. We manage up to 42 children at a time, each with unique emotional needs and backgrounds. Strengthening their sense of belonging requires patience, compassion, and strategic thinking. Beyond the orphanage walls.
                </p>
                <p>
                  Personal journey has shaped my commitment to this work. As a single mother raising three children, I understand the vulnerabilities families face—financial pressure, emotional strain, and the constant fight to protect one’s children from harm. This live experience has given me empathy, strength, and a deep desire to be a voice for children who cannot speak for themselves.
                </p>
                <p>
                  Yet despite our achievements, I constantly confront structural challenges: inadequate funding, resistance to innovation, weak child-protection policies, and limited cross-sector collaboration. Many plans remain only ideas because the resources to execute them are scarce.
                </p>
              </motion.div>
            </div>

            {/* Couple Image */}
            <div className="mt-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://www.torashome.org.ng/wp-content/uploads/2026/02/35.jpeg"
                  alt="Founder and Wife"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Support Our Mission</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Help us create a safe haven for children in need. Your contribution makes a meaningful difference.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-heading font-semibold hover:bg-terracotta-dark transition-colors shadow-lg shadow-primary/30"
          >
            <Heart className="w-5 h-5" />
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
