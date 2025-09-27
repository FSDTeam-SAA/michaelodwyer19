"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, Zap, Shield, Clock, Smartphone } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Link from "next/link";

const features = [
  "Fast charging",
  "Sustainability",
  "Customer Care Service",
  "Return to any station",
];

const specs = [
  { icon: Zap, label: "Power Output", value: "100W Max" },
  { icon: Shield, label: "Safety Rating", value: "IP65 Certified" },
  { icon: Clock, label: "Charging Speed", value: "0-80% in 30min" },
  { icon: Smartphone, label: "Compatibility", value: "Universal" },
];

export function ProductShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-20 bg-gradient-to-br from-secondary/5 to-background"
      ref={ref}
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Product Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              {/* Heading & Description */}
              <motion.div
                className="text-4xl lg:text-5xl font-bold mb-6 text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Badge>About Us</Badge>
              </motion.div>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-6 text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Charge Your Device&apos;s{" "}
                <span className="text-gradient">Portable Fast & Reliable</span>
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our advanced charging stations deliver unmatched performance
                with cutting-edge technology designed for the modern world.
                Experience the future of device charging.
              </motion.p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-white" size={14} />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  className="text-center p-4 bg-card/30 rounded-xl border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                    {spec.icon && (
                      <spec.icon className="text-white" size={20} />
                    )}
                  </div>
                  <div className="text-sm font-semibold mb-1">{spec.value}</div>
                  <div className="text-xs text-muted-foreground">
                    {spec.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Link href="#contact">
                <Button
                  size="lg"
                  className="gradient-primary text-white hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Request Installation
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Product Showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-20 scale-110"
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

              {/* Product Display */}
              <motion.div
                className="relative z-10 bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-12"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Main Product */}
                <Image
                  src="/images/about.png"
                  alt="Product Showcase"
                  width={600}
                  height={600}
                  className="w-full h-auto max-w-lg mx-auto rounded-3xl shadow-xl"
                  priority={true}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
