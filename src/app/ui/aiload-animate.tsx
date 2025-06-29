"use client";
import { easeInOut, motion } from "framer-motion"

export default function AILoader() {
    const ripples = [...Array(10)]
    
    return (
        <div className="fixed inset-0 z-0 flex items-center justify-center bg-[#0a0f1c]">
            {ripples.map((_, i) => (
                <motion.div
                    key={i}
                    className="fixed left-1/2 top-1/2 rounded-full border border-sky-400/30 opacity-1"
                    style={{
                        width: "12vw",
                        height: "12vw",
                        transform: "translate(-50%, -50%",
                        boxShadow: "0 0 18px rgba(125, 211, 252, 0.15)"
                    }}
                    animate={{
                        scale: [0, 4],
                        opacity: [0.2, 0]
                    }}
                    transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        repeatDelay: 0.6,
                        ease: "easeOut",
                        delay: i * 0.6
                    }}
                />
            ))}

            <motion.div
                className="fixed left-1/2 top-1/2 rounded-full border-4 border-white"
                style={{
                    width: "12vw",
                    height: "12vw",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 30px rgba(255, 255, 255, 0.4)",
                }}
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.9, 1, 0.9],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />     
        </div>
    )
}           