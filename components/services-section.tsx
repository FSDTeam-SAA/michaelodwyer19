"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Battery, Zap, Shield, Clock, Smartphone, Wifi } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Fast charging technology",
    description: "Advanced charging speeds up to 100W for rapid device charging",
  },
  {
    icon: Shield,
    title: "Always charged devices",
    description: "Keep your devices powered throughout the day with reliable stations",
  },
  {
    icon: Clock,
    title: "24/7 availability",
    description: "Access charging stations anytime, anywhere with round-the-clock service",
  },
  {
    icon: Battery,
    title: "Ease of use",
    description: "Simple one-tap activation with intuitive user interface",
  },
  {
    icon: Smartphone,
    title: "Sustainability (environmentally friendly solution)",
    description: "Eco-friendly charging solutions powered by renewable energy sources",
  },
  {
    icon: Wifi,
    title: "Return to any station",
    description: "Flexible return policy - drop off your device at any of our locations",
  },
  {
    icon: Shield,
    title: "24/7 availability",
    description: "Round-the-clock access to charging stations nationwide",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-secondary/5" ref={ref}>
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

              {/* Main charging stations */}
              <motion.div
                className="relative z-10 bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {/* Station 1 */}
                  <motion.div
                    className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-6 border border-primary/20"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-32 bg-gradient-to-b from-primary to-accent rounded-lg mb-4 flex items-center justify-center">
                      <Battery className="text-white" size={32} />
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Power Station Pro</h4>
                    <p className="text-xs text-muted-foreground">Fast charging up to 100W</p>
                  </motion.div>

                  {/* Station 2 */}
                  <motion.div
                    className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-6 border border-accent/20"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="w-full h-32 bg-gradient-to-b from-accent to-primary rounded-lg mb-4 flex items-center justify-center">
                      <Zap className="text-white" size={32} />
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Quick Charge Hub</h4>
                    <p className="text-xs text-muted-foreground">Rapid 65W charging</p>
                  </motion.div>
                </div>

                {/* Bottom station */}
                <motion.div
                  className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                      <Smartphone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Universal Compatibility</h4>
                      <p className="text-sm text-muted-foreground">Works with all devices</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Benefits List */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-6 text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our Services <span className="text-gradient">Benefits</span>
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Experience the advantages of our cutting-edge charging infrastructure designed for modern life.
              </motion.p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-card/50 transition-colors duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                    <benefit.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-balance">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.button
                className="gradient-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All Features
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
