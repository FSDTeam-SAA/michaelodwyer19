"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border py-10 md:py-16" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-primary/50 pb-6 md:pb-8 mb-8 gap-6">
          {/* Logo */}
          <motion.div
            className="flex justify-center md:justify-start"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="#home">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={180}
                height={60}
                className="dark:invert"
              />
            </Link>
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full md:w-auto"
            >
              <Button className="w-full md:w-auto gradient-primary text-white hover:opacity-90 transition-opacity cursor-pointer">
                Download App
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2"
            >
              <Link href="https://www.apps.apple.com/">
                <Button className="text-white hover:opacity-90 transition-opacity cursor-pointer">
                  <FaApple />
                </Button>
              </Link>
              <Link href="https://play.google.com/store/">
                <Button className="text-white hover:opacity-90 transition-opacity cursor-pointer">
                  <IoLogoGooglePlaystore />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Contact */}
        <motion.div>
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-primary/50 pb-6 md:pb-8 mb-8 gap-4 text-lg font-semibold text-primary/80 text-center md:text-left">
            <a href="mailto:contact@chargerdirect.com">
              contact@chargerdirect.com
            </a>
            <a href="tel:+1 (123) 456-7890">+1 (123) 456-7890</a>
          </div>
        </motion.div>

        {/* Footer Links */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-4 text-center md:text-left border-b border-primary/50 pb-6 md:pb-8">
          {footerLinks.map((link, linkIndex) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 0.4,
                delay: 0.4 + linkIndex * 0.05,
              }}
            >
              <Link
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-base font-medium"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-8">
            <p className="text-sm text-muted-foreground text-center">
              © 2025 Charger Direct. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
