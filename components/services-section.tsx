"use client"

import { motion } from "framer-motion"
import { Scissors, Palette, Wind, Sparkles, Droplets, Heart, Zap, Leaf } from "lucide-react"
import { useState } from "react"

const services = [
  {
    name: "Haircuts",
    description: "Professional cuts for all hair types and styles",
    icon: Scissors,
    color: "text-brand-rose",
  },
  {
    name: "Coloring & Highlights",
    description: "Vibrant color and beautiful highlights",
    icon: Palette,
    color: "text-brand-gold",
  },
  {
    name: "Blowdries",
    description: "Silky smooth blowouts for any occasion",
    icon: Wind,
    color: "text-brand-charcoal",
  },
  {
    name: "Up-dos & Styling",
    description: "Elegant updos for weddings and events",
    icon: Sparkles,
    color: "text-brand-rose",
  },
  {
    name: "Waxing",
    description: "Smooth, professional waxing services",
    icon: Droplets,
    color: "text-brand-gold",
  },
  {
    name: "Threading",
    description: "Precise eyebrow and facial threading",
    icon: Heart,
    color: "text-brand-charcoal",
  },
  {
    name: "Perms",
    description: "Beautiful waves and curls that last",
    icon: Zap,
    color: "text-brand-rose",
  },
  {
    name: "Masha Spa Services",
    description: "Relaxing spa treatments and massages",
    icon: Leaf,
    color: "text-brand-gold",
  },
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <section id="services" className="relative py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal mb-4">Our Services</h2>
          <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
            Comprehensive hair and beauty services for the entire family
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setSelectedService(service.name)}
                onMouseLeave={() => setSelectedService(null)}
                className="glass p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 group relative overflow-hidden"
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/0 to-brand-rose/0 group-hover:from-brand-rose/5 group-hover:to-brand-rose/10 transition-all duration-300" />

                <Icon
                  className={`${service.color} w-12 h-12 mb-4 group-hover:scale-110 transition-transform relative z-10`}
                />
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2 relative z-10">{service.name}</h3>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed relative z-10">{service.description}</p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: selectedService === service.name ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 pt-4 border-t border-brand-rose/30 relative z-10"
                >
                  <a
                    href="#booking"
                    className="text-brand-rose hover:text-brand-gold text-sm font-semibold transition-all relative inline-block group/link"
                  >
                    Book Service
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold group-hover/link:w-full transition-all duration-300"></span>
                    →
                  </a>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
