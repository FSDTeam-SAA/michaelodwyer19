"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Battery, Zap, Shield, Clock, Smartphone, Wifi, LocateIcon } from "lucide-react";
import Image from "next/image";

const benefits = [

  {
    icon: Shield,
    title: "Always charged devices",
  },
  {
    icon: Clock,
    title: "24/7 availability",
  },
  {
    icon: LocateIcon,
    title: "Convenient locations",
  },
  {
    icon: Battery,
    title: "Ease of use",
  },
  {
    icon: Smartphone,
    title: "Sustainability (environmentally friendly solution)",
  },
  {
    icon: Wifi,
    title: "Return to any station",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-background to-secondary/5"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Product Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 gradient-secondary rounded-3xl blur-3xl opacity-20 scale-110"
                animate={{
                  scale: [1.1, 1.2, 1.1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <Image
                src="/images/benefits.png"
                alt="Services Image"
                width={600}
                height={600}
                className="relative rounded-3xl z-10 mx-auto"
                priority={true}
              />
            </div>
          </motion.div>

          {/* Right Side - Benefits List */}
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-6 text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our Services <span className="text-gradient">Benefits</span>
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Experience the advantages of our cutting-edge charging
                infrastructure designed for modern life.
              </motion.p>
            </div>

            {/* Benefits List */}
            <div className="">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 py-1 rounded-xl hover:bg-card/50 transition-colors duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                    <benefit.icon className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-balance">
                    {benefit.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
