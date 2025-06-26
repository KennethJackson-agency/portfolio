import { motion } from "framer-motion";

export default function AnimatedText({
    text,
    duration = 0.6,
    delayPerWord = 0.1,
    startDelay = 0.25,
    className = "",
}) {
    return (
        <motion.div
            className={`flex flex-wrap justify-center text-center overflow-hidden ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
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
                        hidden: { y: "100%", scaleY: 0.8, opacity: 0 }, // <-- tambah opacity: 0 biar ga kelihatan
                        visible: {
                            y: "0%",
                            scaleY: 1,
                            opacity: 1,
                            transition: {
                                duration: duration,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        },
                    }}
                    style={{ transformOrigin: "top" }} // supaya scale dari atas, lebih natural
                >
                    <span className="inline-block">{word}&nbsp;</span>
                </motion.div>
            ))}
        </motion.div>
    );
}
