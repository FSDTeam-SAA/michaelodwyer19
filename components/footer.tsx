"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "How it Works", href: "#how-it-works" },
      { name: "Services", href: "#services" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "#contact" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-card border-t border-border" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Company Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-2xl font-bold text-foreground">Power</span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Revolutionizing the way you charge your devices with fast, reliable, and accessible charging stations
                everywhere you go.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="text-primary" size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="text-primary" size={16} />
                  <span>support@powerstation.com</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="text-primary mt-0.5" size={16} />
                  <span>123 Tech Street, San Francisco, CA 94105</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-secondary hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <social.icon className="text-muted-foreground group-hover:text-white" size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              >
                <h3 className="font-semibold text-foreground">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="py-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Power Station. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
