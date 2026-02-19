import { motion } from "framer-motion";

const TermsOfService = () => {
    return (
        <div className="py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground">
                                By accessing and using the Toras Home website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. Use of the Site</h2>
                            <p className="text-muted-foreground">
                                The content of the pages of this website is for your general information and use only. It is subject to change without notice. You agree not to use the site for any unlawful purpose or any purpose prohibited under this clause.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. Donations</h2>
                            <p className="text-muted-foreground">
                                All donations made through the site are voluntary and non-refundable. We ensure that all funds are used for the stated purpose of supporting the children and operations of Toras Home.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                            <p className="text-muted-foreground">
                                This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
                            <p className="text-muted-foreground">
                                In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsOfService;
