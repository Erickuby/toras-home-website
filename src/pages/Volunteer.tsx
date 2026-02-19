import { motion } from "framer-motion";
import {
    Calendar,
    Mail,
    Phone,
    User,
    Users,
    Heart,
    Briefcase,
    FileText,
    CheckSquare,
    AlertCircle,
    PenTool
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Volunteer = () => {
    const [formData, setFormData] = useState({
        name: "",
        contactNumber: "",
        email: "",
        availability: "",
        interests: "",
        whyVolunteer: "",
        previousExperience: "no",
        previousExperienceDetails: "",
        emergencyContact: "",
        reference: "",
        backgroundCheck: "no",
        healthConditions: "",
        preferredActivities: "",
        signature: "",
        date: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Volunteer Application Submitted:", formData);
        toast.success("Application submitted successfully! We will contact you soon.");
        // Reset form or redirect
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/src/assets/gallery/gallery-05.jpg')",
                        backgroundPosition: "center 20%"
                    }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground text-sm font-medium tracking-wider uppercase mb-4">
                            Join Our Mission
                        </span>
                        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            Become the Change <br />
                            <span className="text-primary-foreground/90">You Want to See</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                            Your time and skills can make a world of difference in a child's life. Join our community of dedicated volunteers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Volunteer Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Why Volunteer With Us?</h2>
                        <p className="text-muted-foreground text-lg">
                            Volunteering at Toras Home is more than just giving time; it's about building connections, nurturing hope, and being part of a family.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                icon: Heart,
                                title: "Impact Lives",
                                description: "Directly contribute to the well-being and happiness of vulnerable children."
                            },
                            {
                                icon: Users,
                                title: "Join a Community",
                                description: "Work alongside passionate individuals who share your commitment to service."
                            },
                            {
                                icon: Briefcase,
                                title: "Gain Experience",
                                description: "Develop new skills and gain valuable experience in social work and child care."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow text-center"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-primary">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Application Form */}
                    <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-3xl shadow-lg overflow-hidden">
                        <div className="bg-primary/5 p-8 sm:p-10 border-b border-border/50 text-center">
                            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Volunteer Application Form</h2>
                            <p className="text-muted-foreground">Please fill out the details below to start your journey with us.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-8">

                            {/* Personal Details */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
                                    <User className="w-5 h-5" /> Personal Information
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Contact Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                                            <input
                                                type="tel"
                                                name="contactNumber"
                                                required
                                                value={formData.contactNumber}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                                placeholder="+234..."
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-border/50" />

                            {/* Availability & Interests */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
                                    <Calendar className="w-5 h-5" /> Availability & Interests
                                </h3>
                                <div className="grid gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Availability (Days/Time)</label>
                                        <input
                                            type="text"
                                            name="availability"
                                            required
                                            value={formData.availability}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                            placeholder="e.g., Weekends 10am-2pm, Mondays"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Interests/Skills</label>
                                        <textarea
                                            name="interests"
                                            rows={3}
                                            value={formData.interests}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                                            placeholder="e.g., After school teaching, arts & crafts, sports, cleaning..."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Preferred Activities</label>
                                        <input
                                            type="text"
                                            name="preferredActivities"
                                            value={formData.preferredActivities}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                            placeholder="e.g., playing with kids, admin tasks"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-border/50" />

                            {/* Motivation & Experience */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
                                    <FileText className="w-5 h-5" /> Motivation & Experience
                                </h3>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Why do you want to volunteer with us?</label>
                                        <textarea
                                            name="whyVolunteer"
                                            required
                                            rows={4}
                                            value={formData.whyVolunteer}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                                            placeholder="Share your motivation..."
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-medium block">Previous volunteer experience?</label>
                                        <div className="flex gap-6">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="previousExperience"
                                                    value="yes"
                                                    checked={formData.previousExperience === "yes"}
                                                    onChange={handleChange}
                                                    className="text-primary focus:ring-primary"
                                                />
                                                <span>Yes</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="previousExperience"
                                                    value="no"
                                                    checked={formData.previousExperience === "no"}
                                                    onChange={handleChange}
                                                    className="text-primary focus:ring-primary"
                                                />
                                                <span>No</span>
                                            </label>
                                        </div>
                                        {formData.previousExperience === "yes" && (
                                            <textarea
                                                name="previousExperienceDetails"
                                                rows={3}
                                                value={formData.previousExperienceDetails}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none mt-2"
                                                placeholder="Please describe your experience..."
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-border/50" />

                            {/* Additional Information */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
                                    <AlertCircle className="w-5 h-5" /> Additional Details
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Emergency Contact</label>
                                        <input
                                            type="text"
                                            name="emergencyContact"
                                            required
                                            value={formData.emergencyContact}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                            placeholder="Name & Number"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Reference</label>
                                        <input
                                            type="text"
                                            name="reference"
                                            required
                                            value={formData.reference}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                            placeholder="Name & Contact"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium">Health Conditions/Medications</label>
                                        <input
                                            type="text"
                                            name="healthConditions"
                                            value={formData.healthConditions}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                            placeholder="Any we should know about?"
                                        />
                                    </div>
                                    <div className="space-y-4 md:col-span-2">
                                        <label className="text-sm font-medium block">Background Check</label>
                                        <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                                            <div className="flex gap-6">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="backgroundCheck"
                                                        value="yes"
                                                        required
                                                        checked={formData.backgroundCheck === "yes"}
                                                        onChange={handleChange}
                                                        className="text-primary focus:ring-primary"
                                                    />
                                                    <span>I consent to a background check</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="backgroundCheck"
                                                        value="no"
                                                        checked={formData.backgroundCheck === "no"}
                                                        onChange={handleChange}
                                                        className="text-primary focus:ring-primary"
                                                    />
                                                    <span>No</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-border/50" />

                            {/* Declaration */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
                                    <PenTool className="w-5 h-5" /> Declaration
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Signature (Type Name)</label>
                                        <input
                                            type="text"
                                            name="signature"
                                            required
                                            value={formData.signature}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-handwriting text-lg"
                                            placeholder="Sign here"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="w-full btn btn-primary py-4 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all"
                                >
                                    Submit Application
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Volunteer;
