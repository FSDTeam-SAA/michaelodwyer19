"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Zap, Smartphone } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Find Nearest Power Up Station",
    description:
      "Locate the closest charging station using our mobile app or website. Our stations are strategically placed in high-traffic areas for your convenience.",
    icon: MapPin,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Scan Built Power Up Charger",
    description:
      "Simply scan the QR code on our charging station to start your charging session. Quick, secure, and hassle-free activation in seconds.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Charge & Go",
    description:
      "Connect your device and enjoy fast, reliable charging. Monitor your charging progress and receive notifications when complete.",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
  },
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            Get started with our charging stations in three simple steps. Fast, secure, and designed for your busy
            lifestyle.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
                  className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Number */}
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-white font-bold text-xl mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div className="mb-6" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} text-white`}
                    >
                      <step.icon size={24} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-balance">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
          <motion.p className="text-lg text-muted-foreground mb-6" whileHover={{ scale: 1.02 }}>
            Ready to experience the future of charging?
          </motion.p>
          <motion.button
            className="gradient-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Find Stations Near You
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
