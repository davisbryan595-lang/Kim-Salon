"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-brand-charcoal text-brand-cream py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-serif font-bold mb-4">Kim's Salon</h3>
            <p className="text-brand-cream/70 text-sm leading-relaxed">
              Premium hair and beauty services for the whole family in Burbank, CA.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-brand-cream/70">
              <li>
                <a href="#services" className="hover:text-brand-rose transition-colors">
                  Hair Cuts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-rose transition-colors">
                  Coloring
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-rose transition-colors">
                  Styling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-rose transition-colors">
                  Spa Services
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Info</h4>
            <ul className="space-y-3 text-sm text-brand-cream/70">
              <li className="flex items-start gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5 text-brand-rose" />
                <a href="tel:(818)359-1660" className="hover:text-brand-rose transition-colors">
                  (818) 359-1660
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-brand-rose" />
                <span>
                  2300 W. Victory Blvd #G
                  <br />
                  Burbank, CA 91506
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-brand-rose hover:bg-brand-gold transition-colors flex items-center justify-center"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-brand-rose hover:bg-brand-gold transition-colors flex items-center justify-center"
              >
                <Instagram size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-brand-cream/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-brand-cream/60">© {currentYear} Kim's Salon. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-brand-cream/60">
              <a href="#" className="hover:text-brand-rose transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-brand-rose transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
