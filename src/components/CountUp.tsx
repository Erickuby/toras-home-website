import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
    end: number;
    duration?: number;
    className?: string;
}

const CountUp = ({ end, duration = 2, className }: CountUpProps) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const displayValue = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (inView) {
            spring.set(end);
        }
    }, [inView, end, spring]);

    return (
        <motion.span ref={ref} className={className}>
            {displayValue}
        </motion.span>
    );
};

export default CountUp;
