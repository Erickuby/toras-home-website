import { motion } from "framer-motion";
import { Home, Utensils, GraduationCap, HeartPulse, Brain, Users, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Shelter
import shelter1 from "@/assets/services/shelter/1.jpg";

// Nutrition
import nutrition1 from "@/assets/services/nutrition/1.jpg";
import nutrition2 from "@/assets/services/nutrition/2.jpg";
import nutrition3 from "@/assets/services/nutrition/3.jpg";
import nutrition4 from "@/assets/services/nutrition/4.jpg";
import nutrition5 from "@/assets/services/nutrition/5.jpg";

// Health
import health1 from "@/assets/services/health/1.jpg";
import health2 from "@/assets/services/health/2.jpg";

// Education
import education1 from "@/assets/services/education/1.jpg";
import education2 from "@/assets/services/education/2.jpg";
import education3 from "@/assets/services/education/3.jpg";
import education4 from "@/assets/services/education/4.jpg";
import education5 from "@/assets/services/education/5.jpg";
import education6 from "@/assets/services/education/6.jpg";
import education7 from "@/assets/services/education/7.jpg";
import education8 from "@/assets/services/education/8.jpg";
import education9 from "@/assets/services/education/9.jpg";
import education10 from "@/assets/services/education/10.jpg";
import education11 from "@/assets/services/education/11.jpg";
import education12 from "@/assets/services/education/12.jpg";

// Protection
import protection1 from "@/assets/services/protection/1.jpg";

// Psycho-social
import psycho1 from "@/assets/services/psycho/1.jpg";
import psycho2 from "@/assets/services/psycho/2.jpg";
import psycho3 from "@/assets/services/psycho/3.jpg";
import psycho4 from "@/assets/services/psycho/4.jpg";
import psycho5 from "@/assets/services/psycho/5.jpg";
import psycho6 from "@/assets/services/psycho/6.jpg";
import psycho7 from "@/assets/services/psycho/7.jpg";

// Community
import community1 from "@/assets/services/community/1.jpg";
import community2 from "@/assets/services/community/2.jpg";

const services = [
  {
    title: "Shelter",
    icon: Home,
    images: [shelter1],
    desc: "We provided a well spacious facility which has 4 separate rooms for boys and girls, full-time caregivers; including boys’ quarters, and a well-furnished garden with relaxation equipment for the children to relax, have fun and exercise. The security and the safety of the children were taken into consideration hence the gate to the facility is always under lock and key.",
  },
  {
    title: "Nutrition",
    icon: Utensils,
    images: [nutrition1, nutrition2, nutrition3, nutrition4, nutrition5],
    desc: "Nutrition plays a pivotal role in growth and development of children, without proper nutrition, children are susceptible to a myriad of health issues, including stunted growth, weakened immune systems, and cognitive impairments. For orphaned children, the absence of regular, nutritious meals exacerbates their vulnerable situation. At Toras orphanage, services such as food provision, food security and nutritional education were provided. The children accessed adequate meals for each day. These meals which were distributed across three main periods of breakfast, lunch and dinner, were provided according to age categories, following the facility’s feeding schedule.",
  },
  {
    title: "Health",
    icon: HeartPulse,
    images: [health1, health2],
    desc: "Health is a critical aspect of any society as its lays the foundation for a healthy and prosperous future. Providing children with access to quality healthcare services that they grow up healthy, thrive in their development, and become productive members of society. Health services were provided on need-base. There is a provision of first aid box in the office for immediate help and care when needed. We monitor the first aid services and works closely with medical professionals, seeking their services when necessary.",
  },
  {
    title: "Education",
    icon: GraduationCap,
    images: [
      education1, education2, education3, education4, education5,
      education6, education7, education8, education9, education10,
      education11, education12
    ],
    desc: "Every child has unique learning needs, and finding the right learning environment is crucial to their success, homeschooling, online learning, or a unique blend of homeschooling and online learning like what we offer at Toras Orphanage. Education is crucial for a child’s personal and professional development, well being, and overall quality of life. As an organisation, it’s our job to help our children see the importance of education beyond just getting good grades in school.",
  },
  {
    title: "Protection",
    icon: Shield,
    images: [protection1],
    desc: "Protection encompasses arrange of measures to protect children from harm, including physical safety, emotional well-being, and protection from abuse and neglect we ensure that the facility gate is always locked. Visitors were not allowed to have access to the children unless permitted by the staffs. Also, taking photographs with them was with prior signing of an undertaking by the visitor[s]. The staffs were well notified of the rules and regulations as regards the right of every child, the different types of abuse and a clear warning to stay away from abuse/assault of any kind against any of the children. Also, harmful items are packed away from within their reach and some stubborn/wicked acts among them were curbe",
  },
  {
    title: "Psycho-social support",
    icon: Brain,
    images: [psycho1, psycho2, psycho3, psycho4, psycho5, psycho6, psycho7],
    desc: "Psycho-social support is a critical part of helping children recover from trauma, especially in crisis settings where children may experience violence, displacement, or neglect. These experiences can severely disrupt a child’s emotional well being and development. Its more than mental health care. It is a part of the nurturing care all children need. It provides love, safety, and support that strengthen a child’s mental, emotional, social, and spiritual well being.",
  },
  {
    title: "Community intervention",
    icon: Users,
    images: [community1, community2],
    desc: "Community intervention aims to improve quality of life, promote well being, and create positive social change by targeting problems, including health disparities, substance abuse, violence, poverty, and lack of access to resources. At Toras Orphanage, we reach out to widows and less privilege in the environs.",
  },
];

const Services = () => {
  return (
    <div className="py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">What We Do</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">Our Services</h1>
          <p className="text-muted-foreground text-lg">
            Explore the diverse programs and services we offer to uplift vulnerable children and families in our community.
          </p>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={cn(
                "flex flex-col gap-8 lg:gap-16 items-center",
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* Image / Carousel Section */}
              <div className="w-full lg:w-1/2 relative group">
                <div className={cn(
                  "absolute inset-0 bg-primary/5 rounded-3xl transform transition-transform duration-500",
                  i % 2 === 0 ? "-rotate-2 group-hover:-rotate-3" : "rotate-2 group-hover:rotate-3"
                )} />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background aspect-[4/3]">
                  {s.images.length > 1 ? (
                    <Carousel className="w-full h-full group/carousel" opts={{ loop: true }}>
                      <CarouselContent className="h-full ml-0">
                        {s.images.map((img, idx) => (
                          <CarouselItem key={idx} className="h-full pl-0">
                            <img
                              src={img}
                              alt={`${s.title} ${idx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4 bg-background/80 hover:bg-background border-none opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                      <CarouselNext className="right-4 bg-background/80 hover:bg-background border-none opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                    </Carousel>
                  ) : (
                    <img
                      src={s.images[0]}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                <div className={cn(
                  "inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-2",
                  "mx-auto lg:mx-0"
                )}>
                  <s.icon className="w-8 h-8" />
                </div>

                <h3 className="font-heading text-3xl font-bold text-foreground">
                  {s.title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
