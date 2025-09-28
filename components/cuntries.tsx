"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CoverageMapUK() {
  return (
    <section className="relative overflow-hidden lg:py-53 py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="text-center lg:text-left mb-10 lg:mb-0 px-5">
            <p className="text-purple-500 uppercase tracking-wide font-medium">
              Coverage Map
            </p>
            <h2 className="text-4xl font-bold mt-2">BRITAIN IS COVERED</h2>
          </div>
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
              src="/images/UK.png"
              alt="Services Image"
              width={600}
              height={600}
              className="relative rounded-3xl z-10 mx-auto"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
