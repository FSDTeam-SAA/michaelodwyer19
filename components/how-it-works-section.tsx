"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Download the Charger Direct App",

    icon: "/images/image1.png",
  },
  {
    number: "02",
    title: "",
    icon: "/images/image2.png",
  },
  {
    number: "03",
    title: "Find the nearest station on the map in the app",
    icon: "/images/image3.png",
  },
  {
    number: "04",
    title: "Scan the QR code and take the powerbank",
    icon: "/images/image4.jpg",
  },
  {
    number: "05",
    title: "Use it as long as you need",
    icon: "/images/image5.png",
  },
  {
    number: "06",
    title: "Return the powerbank to any PowerUP station",
    icon: "/images/image6.png",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-20 bg-secondary/10" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get started with our charging stations in three simple steps. Fast,
            secure, and designed for your busy lifestyle.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center overflow-x-hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            >
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                />
              )}

              <div className="relative z-10">
                {/* Step Card */}
                <motion.div
                  className={`rounded-2xl flex w-full flex-col ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  } p-8 h-full hover:border-primary/50 transition-colors duration-300 min-h-[450px]`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: `url(${step.icon})`,
                    backgroundSize:
                      index === 1 || index === 3 ? "contain" : "cover",
                    backgroundPosition: "center",
                    // backgroundRepeat: "no-repeat",
                  }}
                >
                  {" "}
                  {/* Step Number */}
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-white font-bold text-xl mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.number}
                  </motion.div>
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-balance dark:text-black">
                    {step.title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.p
            className="text-lg text-muted-foreground mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Ready to experience the future of charging?
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
