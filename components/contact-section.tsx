"use client"

import type React from "react"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [messageSent, setMessageSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setMessageData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))
    setMessageSent(true)
    setIsSubmitting(false)

    setTimeout(() => {
      setMessageSent(false)
      setMessageData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal mb-4">Get In Touch</h2>
          <p className="text-lg text-brand-charcoal/70">We'd love to hear from you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="glass p-6 rounded-xl group relative overflow-hidden hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/0 to-brand-rose/0 group-hover:from-brand-rose/5 group-hover:to-brand-rose/10 transition-all duration-300" />
              <div className="flex gap-4 relative z-10">
                <MapPin className="w-6 h-6 text-brand-rose flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-brand-charcoal mb-2">Address</h3>
                  <p className="text-brand-charcoal/70">
                    2300 W. Victory Blvd #G
                    <br />
                    Burbank, CA 91506
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass p-6 rounded-xl group relative overflow-hidden hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/0 to-brand-rose/0 group-hover:from-brand-rose/5 group-hover:to-brand-rose/10 transition-all duration-300" />
              <div className="flex gap-4 relative z-10">
                <Phone className="w-6 h-6 text-brand-rose flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-brand-charcoal mb-2">Phone</h3>
                  <a
                    href="tel:(818)359-1660"
                    className="text-brand-rose hover:text-brand-gold font-semibold transition-colors"
                  >
                    (818) 359-1660
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass p-6 rounded-xl group relative overflow-hidden hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/0 to-brand-rose/0 group-hover:from-brand-rose/5 group-hover:to-brand-rose/10 transition-all duration-300" />
              <div className="flex gap-4 relative z-10">
                <Clock className="w-6 h-6 text-brand-rose flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-brand-charcoal mb-2">Hours</h3>
                  <p className="text-brand-charcoal/70 text-sm space-y-1">
                    <div>Tue - Fri: 10:00 AM - 6:00 PM</div>
                    <div>Sat: 10:00 AM - 5:00 PM</div>
                    <div>Sun - Mon: Closed</div>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-xl group relative overflow-hidden hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/0 to-brand-rose/0 group-hover:from-brand-rose/5 group-hover:to-brand-rose/10 transition-all duration-300" />
              <h3 className="font-semibold text-brand-charcoal mb-4 relative z-10">Follow Us</h3>
              <div className="flex gap-4 relative z-10">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-rose hover:bg-brand-rose hover:text-brand-cream transition-all hover:shadow-lg hover:shadow-brand-rose/50"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-rose hover:bg-brand-rose hover:text-brand-cream transition-all hover:shadow-lg hover:shadow-brand-rose/50"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-xl group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/0 to-brand-rose/0 group-hover:from-brand-rose/5 group-hover:to-brand-rose/10 transition-all duration-300" />

            {messageSent ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8 relative z-10">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">Message Sent!</h3>
                <p className="text-brand-charcoal/70">Thank you for reaching out. We'll get back to you soon!</p>
              </motion.div>
            ) : (
              <>
                <div className="mb-4 relative z-10">
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={messageData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg glass text-brand-charcoal placeholder-brand-charcoal/50 focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all hover:shadow-md"
                  />
                </div>

                <div className="mb-4 relative z-10">
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={messageData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg glass text-brand-charcoal placeholder-brand-charcoal/50 focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all hover:shadow-md"
                  />
                </div>

                <div className="mb-4 relative z-10">
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={messageData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Message subject"
                    className="w-full px-4 py-2 rounded-lg glass text-brand-charcoal placeholder-brand-charcoal/50 focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all hover:shadow-md"
                  />
                </div>

                <div className="mb-6 relative z-10">
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={messageData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg glass text-brand-charcoal placeholder-brand-charcoal/50 focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all hover:shadow-md resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-charcoal text-brand-cream py-2 rounded-lg font-semibold hover:bg-brand-rose transition-all duration-300 disabled:opacity-70 relative z-10 overflow-hidden"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
