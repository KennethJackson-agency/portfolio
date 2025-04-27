import { motion } from "framer-motion";

export default function AnimatedText({
    text,
    duration,
    delayPerWord = 0.1,
    startDelay = 0.5,
    className = "",
}) {
    return (
        <motion.div
            className={`flex flex-wrap justify-center text-center overflow-hidden ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }} // <== Updated
            variants={{
                visible: {
                    transition: {
                        staggerChildren: delayPerWord,
                        delayChildren: startDelay,
                    },
                },
                hidden: {},
            }}
        >
            {text.split(" ").map((word, i) => (
                <motion.div
                    key={i}
                    className="overflow-hidden"
                    variants={{
                        hidden: { y: "100%", scaleY: 0.8 },
                        visible: {
                            y: "0%",
                            scaleY: 1,
                            transition: {
                                duration: duration,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        },
                    }}
                >
                    <span className="inline-block">{word}&nbsp;</span>
                </motion.div>
            ))}
        </motion.div>
    );
}
