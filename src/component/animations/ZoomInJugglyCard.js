import { motion } from "framer-motion";

export default function ZoomInJugglyCard({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            className={`${className}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // <== Updated
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                    opacity: 1,
                    scale: [0.8, 1.05, 1],
                    transition: {
                        duration: 1.5,
                        delay: delay,
                        ease: [0.22, 1, 0.36, 1], // lebih halus dibanding easeInOut biasa
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
