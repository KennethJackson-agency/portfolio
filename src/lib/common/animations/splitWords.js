import { motion } from "framer-motion";

export const splitWords = (text, delay = 0.15) => {
    return text.split(" ").map((word, i) => (
        <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * delay, duration: 0.4 }}
        >
            {word}&nbsp;
        </motion.span>
    ));
};
