"use client";
import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AILoader() {

    const SIZE = 192; // 12rem = 192px
    const RADIUS_WHITE = 50; // base radius for green ring
    const RADIUS_GREEN = RADIUS_WHITE - 4;
    const RADIUS_ORANGE = RADIUS_GREEN - 6;
    const CIRCUM_GREEN = 2 * Math.PI * RADIUS_GREEN;
    const CIRCUM_ORANGE = 2 * Math.PI * RADIUS_ORANGE;

    const ripples = [...Array(10)];

    //Simulated progress states
    const [start, setStart] = useState(false);
    const [fetchProgress, setFetchProgress] = useState(0);
    const[analyseProgress, setAnalyseProgress] = useState(0);

    useEffect(() => {

        if (!start) return;

        const interval = setInterval(() => {
            setFetchProgress((p) => (p < 100 ? p + 1 : 100));
            setAnalyseProgress((p) => (p < 100 ? p + 0.5 : 100));
        }, 50);
        return () => clearInterval(interval);

    }, [start]);

    const circleRadius = 50 ;
    const circleCircumference = 2 * Math.PI * circleRadius;
    
    return (
        <div className="fixed inset-0 z-0 flex items-center justify-center bg-[#0a0f1c]">
            {ripples.map((_, i) => (
                <motion.div
                key={i}
                className="fixed left-1/2 top-1/2 rounded-full border border-sky-400/30"
                style={{
                    width: SIZE,
                    height: SIZE,
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 18px rgba(125, 211, 252, 0.15)",
                }}
                animate={{
                    scale: [0, 4],
                    opacity: [0.2, 0],
                }}
                transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    repeatDelay: 0.6,
                    ease: "easeOut",
                    delay: i * 0.6,
                }}
                />
            ))}

            <motion.div
                className="fixed left-1/2 top-1/2 rounded-full border-4 border-white"
                style={{
                width: SIZE,
                height: SIZE,
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

            {start && (
                <motion.div
                className="fixed left-1/2 top-1/2"
                style={{
                    width: SIZE,
                    height: SIZE,
                    transform: "translate(-50%, -50%)",
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
                >
                <svg
                    className="w-full h-full"
                    viewBox="0 0 120 120"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                    transform: "rotate(-90deg)",
                    }}
                >
                    <motion.circle
                    cx="60"
                    cy="60"
                    r={RADIUS_GREEN}
                    fill="transparent"
                    stroke="rgb(74, 222, 128)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    style={{
                        filter: "drop-shadow(0 0 8px rgba(74,222,128,0.5))",
                    }}
                    strokeDasharray={CIRCUM_GREEN}
                    strokeDashoffset={
                        CIRCUM_GREEN - (fetchProgress / 100) * CIRCUM_GREEN
                    }
                    />
                    <motion.circle
                    cx="60"
                    cy="60"
                    r={RADIUS_ORANGE}
                    fill="transparent"
                    stroke="rgb(251, 191, 36)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    style={{
                        filter: "drop-shadow(0 0 8px rgba(251,191,36,0.5))",
                    }}
                    strokeDasharray={CIRCUM_ORANGE}
                    strokeDashoffset={
                        CIRCUM_ORANGE - (analyseProgress / 100) * CIRCUM_ORANGE
                    }
                    />
                </svg>
                </motion.div>
            )}

            {!start && (
                <motion.div
                className="fixed left-1/2 top-1/2 flex items-center justify-center"
                style={{
                    width: SIZE,
                    height: SIZE,
                    transform: "translate(-50%, -50%)",
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
                >
                <button
                    onClick={() => setStart(true)}
                    className="fixed w-[72px] h-[72px] rounded-full"
                    style={{
                    background: "linear-gradient(135deg, rgb(74, 222, 128), rgb(251, 191, 36))",
                    boxShadow: "0 0 18px rgba(255,255,255,0.3)",
                    padding: 0,
                    lineHeight: 1,
                    }}
                >
                    Run Analysis
                </button>
                </motion.div>
            )}
            </div>

    )
}