"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri 9am-6pm EST",
    },
    {
      icon: Mail,
      title: "Email Address",
      value: "support@powerstation.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office Location",
      value: "123 Tech Street, San Francisco, CA 94105",
      description: "Visit our headquarters",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-secondary/10" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Fill form for <span className="text-gradient">station installation</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to bring charging stations to your location? Fill out our installation form and our team will contact
            you within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="Enter company name"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Installation Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                    placeholder="Tell us about your location, expected usage, and any specific requirements..."
                  />
                </motion.div>

                {/* Submit Status */}
                {submitStatus === "success" && (
                  <motion.div
                    className="flex items-center gap-2 text-green-500 bg-green-500/10 p-3 rounded-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle size={20} />
                    <span>Thank you! We'll contact you within 24 hours.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white hover:opacity-90 transition-opacity group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        Submit Installation Request
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Contact Info & Image */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Charging Station Image */}
            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="relative bg-card/30 backdrop-blur-sm border border-border rounded-3xl p-8 overflow-hidden">
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

                <div className="relative z-10 text-center">
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-6 flex items-center justify-center">
                    <div className="text-6xl">🔌</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Charge Your Phone</h3>
                  <p className="text-muted-foreground">
                    Professional installation and setup included with every station
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-card/30 transition-colors duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-foreground mb-1">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
