import { motion } from "framer-motion";
import { Heart, School, Utensils, Home, ShoppingBag, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import partnersImg from "@/assets/partners.jpg";

const needsCategories = [
    {
        title: "Foodstuff",
        icon: Utensils,
        items: [
            "Rice, Beans, Garri, Yam Flour (Amala)",
            "Semovita, Yams, Spaghetti",
            "Cooking oil (Vegetable oil & Red oil)",
            "Indomie Noodles",
            "Curry, Thyme, Seasonings, Cooking Salt",
            "Tin Tomatoes",
            "Chicken, Meat, Fish, etc.",
            "Eggs, Plantain"
        ],
    },
    {
        title: "Personal Care & Hygiene",
        icon: Heart,
        items: [
            "Hair Cream, Body Cream",
            "Air-fresheners",
            "Medicated Soap, Powder",
            "Toothpastes, Tooth brushes",
            "Towels, Sponge",
            "Pants / Bra / Boxers Short",
            "Singlet / Vest / Camisole",
            "Toiletries, Toilet Rolls, Toilet Soaps",
            "Disinfectants",
            "Soaps / Sanitary Towels"
        ],
    },
    {
        title: "Bedroom Needs",
        icon: Home,
        items: [
            "Bed - Double bunk",
            "Bed sheets / Pillow Cases",
            "Mattresses Size 2½ and 3",
            "Rubber Slippers (Large/Medium) - For indoor use"
        ],
    },
    {
        title: "Cleaning & Household",
        icon: ShoppingBag,
        items: [
            "Detergents",
            "Powdered Milk / Liquid Milk",
            "Sugar",
            "Milo / Bournvita",
            "Corn Flakes / Custard / Goldmorn / Nutribom"
        ],
    },
    {
        title: "School Needs",
        icon: School,
        items: [
            "School Bus",
            "Black Shoes for Boys & Girls (various sizes)",
            "Socks",
            "Shelves, Chairs, Reading Tables",
            "Computers / Laptop",
            "Inspirational Books",
            "Stationery",
            "School Bags",
            "Lunch boxes",
            "Water bottles"
        ],
    },
    {
        title: "Kitchen Utensils",
        icon: Utensils,
        items: [
            "Stove (big size)",
            "Plastic Plates / Cups / Spoons",
            "Knives",
            "Cooking Pots / Frying Pans",
            "Large Spoons",
            "Charcoal / Cooking Gas",
            "Electric / Non-Electric Kettle"
        ],
    }
];

const DailyNeeds = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="py-20 lg:py-28 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.15em]">
                            Support Our Children
                        </p>
                        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
                            Daily <span className="text-gradient">Needs List</span>
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            We rely on the generosity of kind-hearted individuals like you to provide for the daily needs of the children in our care. Every item donated goes directly towards their well-being.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Needs Lists */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {needsCategories.map((category, idx) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <category.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-xl text-foreground">
                                        {category.title}
                                    </h3>
                                </div>
                                <ul className="space-y-3">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sponsor A Child / Back to School */}
            <section className="section-warm py-20 lg:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={partnersImg}
                                alt="Children in school settings"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <p className="text-white font-heading font-bold text-xl">Together, let’s invest in their future!</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-1 lg:order-2 space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                <School className="w-4 h-4" />
                                <span>Back-to-School Project</span>
                            </div>

                            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                                Sponsor A Child
                            </h2>

                            <div className="prose text-muted-foreground leading-relaxed">
                                <p>
                                    <strong>Support Toras Home's Back-to-School Project! 📚🎒</strong>
                                </p>
                                <p>
                                    Education is the foundation for a brighter future, and at Toras Home, we’re committed to equipping our children with the tools and resources they need to succeed academically. From school supplies to textbooks, lunch boxes, bags, uniforms, and digital learning resources, we are working hard to ensure they have everything required to thrive.
                                </p>
                            </div>

                            <div className="bg-card p-6 rounded-xl border border-border mt-6">
                                <h4 className="font-heading font-semibold text-foreground mb-2">Bank Details</h4>
                                <p className="text-muted-foreground text-sm mb-1">Tower of Refuge and Strength Outreach</p>
                                <p className="text-lg font-mono font-bold text-primary">GTBank: 0002633074</p>
                            </div>

                            <div className="pt-4">
                                <Link
                                    to="/donate"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-heading font-semibold hover:bg-terracotta-dark transition-colors shadow-lg shadow-primary/30"
                                >
                                    <Heart className="w-5 h-5" />
                                    Donate Online
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DailyNeeds;
