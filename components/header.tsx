"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="#home" className="flex">
              <Image
                src="images/logo.png"
                alt="Logo"
                width={120}
                height={48}
                className="dark:invert w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px]"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Now shows on md screens and up */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-xs md:text-sm lg:text-base whitespace-nowrap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Desktop Buttons Group - Now shows on md screens and up */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <ThemeToggle />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button className="gradient-primary text-white hover:opacity-90 transition-opacity cursor-pointer text-xs md:text-sm px-3 md:px-4 py-1 md:py-2">
                Download App
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex items-center gap-1"
            >
              <Link href="https://www.apps.apple.com/">
                <Button
                  size="sm"
                  className="text-white hover:opacity-90 transition-opacity cursor-pointer p-2"
                >
                  <FaApple size={16} />
                </Button>
              </Link>
              <Link href="https://play.google.com/store/">
                <Button
                  size="sm"
                  className="text-white hover:opacity-90 transition-opacity cursor-pointer p-2"
                >
                  <IoLogoGooglePlaystore size={16} />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Only shows on small screens (below md) */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground flex items-center justify-center w-8 h-8 min-w-[32px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Only shows on small screens (below md) */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-3 pb-3 border-t border-border pt-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 text-base border-b border-border/50 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <Button className="gradient-primary text-white hover:opacity-90 transition-opacity w-full py-2">
                  Download App
                </Button>
                <div className="flex justify-center gap-4">
                  <Link
                    href="https://www.apps.apple.com/"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button
                      size="sm"
                      className="text-white hover:opacity-90 transition-opacity cursor-pointer p-2"
                    >
                      <FaApple size={18} />
                      <span className="sr-only">App Store</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://play.google.com/store/"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button
                      size="sm"
                      className="text-white hover:opacity-90 transition-opacity cursor-pointer p-2"
                    >
                      <IoLogoGooglePlaystore size={18} />
                      <span className="sr-only">Google Play</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
