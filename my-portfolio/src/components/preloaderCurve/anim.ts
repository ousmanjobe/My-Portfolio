import { Variants } from "framer-motion";

export const opacity: Variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 0.75,
        transition: { duration: 0.8, delay: 0.0 },
    },
};

export const slideUp: Variants = {
    initial: {
        top: 0,
    },
    exit: {
        top: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
};