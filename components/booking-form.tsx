"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

const services = [
  "Haircut",
  "Coloring & Highlights",
  "Blowdry",
  "Up-do & Styling",
  "Waxing",
  "Threading",
  "Perms",
  "Spa Services",
]

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Here you would send to your API
    console.log("Booking submitted:", formData)
    setSubmitted(true)
    setIsSubmitting(false)

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        notes: "",
      })
    }, 3000)
  }

  return (
    <section id="booking" className="relative py-20 md:py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal mb-4">Book Your Appointment</h2>
          <p className="text-lg text-brand-charcoal/70">Schedule your visit in just a few clicks</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass p-8 rounded-2xl group relative overflow-hidden glow-rose"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/0 to-brand-rose/0 group-hover:from-brand-rose/5 group-hover:to-brand-rose/10 transition-all duration-300" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 relative z-10"
            >
              <div className="mb-4 text-5xl">✓</div>
              <h3 className="text-2xl font-bold text-brand-charcoal mb-2">Booking Confirmed!</h3>
              <p className="text-brand-charcoal/70 mb-4">
                We've received your booking request. We'll confirm your appointment shortly at the phone number
                provided.
              </p>
              <p className="text-sm text-brand-rose font-semibold">(818) 359-1660</p>
            </motion.div>
          ) : (
            <>
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4 mb-6 relative z-10">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Sarah Johnson"
                    className="w-full px-4 py-3 rounded-lg glass text-brand-charcoal placeholder-brand-charcoal/50 focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all hover:shadow-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="sarah@example.com"
                    className="w-full px-4 py-3 rounded-lg glass text-brand-charcoal placeholder-brand-charcoal/50 focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all hover:shadow-md"
                  />
                </div>
              </div>

              {/* Phone and Service */}
              <div className="grid md:grid-cols-2 gap-4 mb-6 relative z-10">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(818) 555-0000"
                    className="w-full px-4 py-3 rounded-lg glass text-brand-charcoal placeholder-brand-charcoal/50 focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all hover:shadow-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all hover:shadow-md"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-4 mb-6 relative z-10">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2 flex items-center gap-2">
                    <Calendar size={16} /> Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all hover:shadow-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2 flex items-center gap-2">
                    <Clock size={16} /> Preferred Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-rose transition-all hover:shadow-md"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="mb-6 relative z-10">
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requests or notes for your stylist..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg glass text-brand-charcoal placeholder-brand-charcoal/50 focus:outline-none focus:ring-2 focus:ring-brand-rose resize-none transition-all hover:shadow-md"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-charcoal text-brand-cream py-3 rounded-lg font-semibold hover:bg-brand-rose transition-all duration-300 disabled:opacity-70 relative z-10 overflow-hidden"
              >
                {isSubmitting ? "Booking..." : "Book Appointment"}
              </motion.button>

              <p className="text-xs text-brand-charcoal/60 text-center mt-4 relative z-10">
                We'll confirm your booking within 24 hours
              </p>
            </>
          )}
        </motion.form>
      </div>
    </section>
  )
}
