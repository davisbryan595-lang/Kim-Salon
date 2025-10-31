"use client"

import { motion } from "framer-motion"

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/hero-salon-bg.jpg)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/80 via-brand-charcoal/60 to-brand-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="glass rounded-2xl backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 md:p-12 shadow-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-cream mb-4">Kim's Salon</h1>
            <p className="text-xl md:text-2xl text-brand-gold mb-2 font-semibold">Family Hair & Beauty in Burbank</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-cream max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Premium hair and beauty services for the whole family. From professional cuts and color to spa treatments,
            experience luxury styling in a welcoming atmosphere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={scrollToBooking}
              className="relative glass px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-lg bg-brand-rose/80 hover:bg-brand-rose transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl glow-rose border-brand-rose/50 text-black"
            >
              Book Now
            </button>
            <button
              onClick={scrollToServices}
              className="relative glass px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-lg text-brand-charcoal bg-brand-cream/90 hover:bg-brand-cream transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl border-brand-cream/50"
            >
              View Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-brand-gold rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-brand-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
