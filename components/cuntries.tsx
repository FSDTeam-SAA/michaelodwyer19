"use client";

import Image from "next/image";

export default function CoverageMapUK() {
  return (
    <section className="relative overflow-hidden lg:py-53">
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
          <div className="w-full">
            <Image
              src="/images/UK.png" // put the PNG file in your /public folder
              alt="UK Coverage Map"
              width={800}
              height={800}
              className="w-full aspect-square object-contain"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
