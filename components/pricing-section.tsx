"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    name: "Kids Cuts",
    price: "$25",
    description: "Ages 10 and under",
    features: ["Simple cuts", "Wash & dry", "Friendly atmosphere"],
  },
  {
    name: "Women's Styling",
    price: "$45-$85",
    description: "Starting price for cuts",
    features: ["Professional cuts", "Styling included", "Color consultations", "Product recommendation"],
    featured: true,
  },
  {
    name: "Men's Cuts",
    price: "$30-$50",
    description: "Clean, classic styles",
    features: ["Precision cuts", "Beard trim available", "Quick service", "Friendly service"],
  },
  {
    name: "Color Services",
    price: "$75-$150",
    description: "Starting price for single process",
    features: ["Single color", "Highlights/lowlights", "Root touch-ups", "Color correction"],
  },
  {
    name: "Special Events",
    price: "$80-$200",
    description: "Bridal and special occasion",
    features: ["Bride packages", "Party groups", "Up-do styling", "Trial runs available"],
  },
  {
    name: "Spa Services",
    price: "$40-$120",
    description: "Relax and rejuvenate",
    features: ["Facial massage", "Scalp treatment", "Waxing", "Threading"],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal mb-4">Pricing & Packages</h2>
          <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
            Transparent pricing with no surprises. Custom quotes available for special requests.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass p-8 rounded-2xl transition-all duration-300 hover:scale-105 group relative overflow-hidden ${
                tier.featured ? "ring-2 ring-brand-rose lg:scale-105 glow-rose" : ""
              }`}
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/0 to-brand-rose/0 group-hover:from-brand-rose/5 group-hover:to-brand-rose/10 transition-all duration-300" />

              {tier.featured && (
                <div className="inline-block bg-brand-rose text-brand-cream px-4 py-1 rounded-full text-sm font-semibold mb-4 relative z-10">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold text-brand-charcoal mb-2 relative z-10">{tier.name}</h3>
              <p className="text-brand-charcoal/70 text-sm mb-4 relative z-10">{tier.description}</p>
              <div className="mb-6 relative z-10">
                <span className="text-4xl font-bold text-brand-gold">{tier.price}</span>
              </div>
              <ul className="space-y-3 mb-8 relative z-10">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                    <span className="text-brand-charcoal text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-semibold transition-all relative z-10 ${
                  tier.featured
                    ? "bg-brand-charcoal text-brand-cream hover:bg-brand-rose hover:shadow-lg overflow-hidden"
                    : "glass text-brand-charcoal hover:bg-brand-light-rose"
                }`}
              >
                Book This
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl text-center mt-12 group relative overflow-hidden"
        >
          {/* Glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/0 to-brand-gold/0 group-hover:from-brand-gold/5 group-hover:to-brand-gold/10 transition-all duration-300" />

          <h3 className="text-2xl font-semibold text-brand-charcoal mb-2 relative z-10">Custom Packages Available</h3>
          <p className="text-brand-charcoal/70 mb-6 relative z-10">
            Need something special? We offer custom quotes for bridal parties, corporate events, and special requests.
          </p>
          <a
            href="tel:(818)359-1660"
            className="inline-block bg-brand-charcoal text-brand-cream px-8 py-3 rounded-full font-semibold hover:bg-brand-rose transition-all duration-300 relative z-10 overflow-hidden group/btn glow-gold"
          >
            Call for Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
