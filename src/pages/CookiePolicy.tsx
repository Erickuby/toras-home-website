import { motion } from "framer-motion";

const CookiePolicy = () => {
    return (
        <div className="py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
                            <p className="text-muted-foreground">
                                As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
                            <p className="text-muted-foreground">
                                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. The Cookies We Set</h2>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li><strong>Forms Related Cookies:</strong> When you submit data to through a form such as those found on contact pages or comment forms, cookies may be set to remember your user details for future correspondence.</li>
                                <li><strong>Analytics Cookies:</strong> This site may use Google Analytics or similar processing to help us understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. Disabling Cookies</h2>
                            <p className="text-muted-foreground">
                                You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore, it is recommended that you do not disable cookies.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CookiePolicy;
