import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    return (
        <div className="py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                            <p className="text-muted-foreground">
                                Toras Home ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or donate to our cause.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                            <p className="text-muted-foreground mb-2">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or modify your profile.</li>
                                <li><strong>Donation Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. Use of Your Information</h2>
                            <p className="text-muted-foreground mb-2">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Process your donation and send you a receipt.</li>
                                <li>Send you a newsletter (if you opted in).</li>
                                <li>Respond to your inquiries and support needs.</li>
                                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. GDPR Rights (For EU Users)</h2>
                            <p className="text-muted-foreground mb-2">We are committed to ensuring transparency in how we handle your data. If you are located in the European Economic Area (EEA), you have the following rights under the General Data Protection Regulation (GDPR):</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
                                <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                                <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                                <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                                <li><strong>Right to Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                            <p className="text-muted-foreground">
                                If you have questions or comments about this Privacy Policy, please contact us at: <br />
                                <strong className="text-foreground">torashome2016@gmail.com</strong>
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
