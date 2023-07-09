"use client"

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Reveal({ children, width = "fit-content" }) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        mainControls.start(isInView ? "visible" : "hidden");
        slideControls.start(isInView ? "visible" : "hidden");
    }, [isInView]);

    return (
        <div ref={ref} style={{ position: "relative;", width }}>
            <motion.div
                variants={{
                    hidden: { 
                        opacity: 0, 
                        y: 75,
                        transition: {
                            duration: 0,
                        }
                    },
                    visible: { 
                        opacity: 1, 
                        y: 0, 
                        transition: {
                            duration: 0.5,
                            delay: 0.25,
                        } 
                    },
                }}
                initial="hidden"
                animate= {mainControls}

            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate= {slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "#aebd00",
                    zIndex: 20,
                }}
            >
            </motion.div>
        </div>
    )
}