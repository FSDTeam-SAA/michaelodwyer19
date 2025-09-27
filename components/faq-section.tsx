"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 7-day free trial for all new users. You can access all premium features during this period without any charges. No credit card required to start your trial.",
  },
  {
    question: "What devices are compatible with your charging stations?",
    answer:
      "Our charging stations are compatible with all major device types including smartphones, tablets, laptops, and other USB-powered devices. We support both USB-C and traditional USB charging ports.",
  },
  {
    question: "Where can I find your charging stations?",
    answer:
      "You can find our charging stations in shopping malls, airports, coffee shops, universities, and other high-traffic locations. Use our mobile app to locate the nearest station to your current location.",
  },
  {
    question: "Where are stations located?",
    answer:
      "Our charging stations are strategically placed in high-traffic areas including shopping centers, airports, universities, coffee shops, and business districts. Use our mobile app to find the nearest station.",
  },
  {
    question: "What pricing plans do you offer?",
    answer:
      "We offer flexible pricing plans including pay-per-use, daily passes, and monthly subscriptions. Pricing varies by location and usage duration. Check our app for current rates at your preferred station.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-secondary/5" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Header and Illustration */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-6 text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Frequently asked <span className="text-gradient">questions</span>
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Get answers to common questions about our charging stations, pricing, and services. Can&apos;t find what
                you&apos;re looking for? Contact our support team.
              </motion.p>
            </div>

            {/* FAQ Illustration */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-12 text-center">
                {/* Background glow */}
                <motion.div
                  className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-10 scale-110"
                  animate={{
                    scale: [1.1, 1.2, 1.1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Illustration */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <HelpCircle className="text-white" size={48} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Need More Help?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our support team is available 24/7 to assist you with any questions.
                  </p>
                  <motion.button
                    className="gradient-secondary text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Support
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - FAQ List */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ borderColor: "hsl(var(--primary))" }}
              >
                <motion.button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: "hsl(var(--primary) / 0.05)" }}
                >
                  <h3 className="font-semibold text-balance pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="text-primary" size={20} />
                    ) : (
                      <Plus className="text-muted-foreground" size={20} />
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <motion.p
                          className="text-muted-foreground leading-relaxed"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
