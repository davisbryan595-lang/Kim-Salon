"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Martinez",
    role: "Bride",
    text: "Kim and her team made me feel absolutely beautiful on my wedding day. The updo was stunning and held perfectly all through the ceremony and reception. Highly recommend!",
    image: "/happy-woman-portrait.png",
    rating: 5,
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Regular Client",
    text: "Been coming here for years. The attention to detail and professional service is unmatched. Everyone at the salon is so friendly and welcoming. Best haircut place in Burbank!",
    image: "/thoughtful-man-portrait.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Johnson",
    role: "Color Services",
    text: "My highlights came out even better than I imagined! Kim is a true artist with color. She understood exactly what I wanted and delivered perfection.",
    image: "/diverse-woman-smiling.png",
    rating: 5,
  },
  {
    id: 4,
    name: "David Lee",
    role: "Family Client",
    text: "We bring our whole family here. From my son's first haircut to my wife's color sessions, everyone loves it. Great atmosphere and fair prices!",
    image: "/smiling-man-portrait.png",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const testimonial = testimonials[currentIndex]

  return (
    <section className="relative py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal mb-4">What Our Clients Say</h2>
          <p className="text-lg text-brand-charcoal/70">Real stories from our happy customers</p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="glass p-8 md:p-12 rounded-2xl group relative overflow-hidden glow-rose"
        >
          {/* Glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/0 to-brand-rose/0 group-hover:from-brand-rose/5 group-hover:to-brand-rose/10 transition-all duration-300" />

          <div className="flex items-start gap-4 mb-6 relative z-10">
            <img
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-brand-rose/30"
            />
            <div>
              <h3 className="font-semibold text-lg text-brand-charcoal">{testimonial.name}</h3>
              <p className="text-sm text-brand-rose">{testimonial.role}</p>
              <div className="flex gap-1 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
            </div>
          </div>

          <p className="text-lg text-brand-charcoal leading-relaxed mb-8 relative z-10">"{testimonial.text}"</p>

          {/* Navigation */}
          <div className="flex items-center justify-between relative z-10">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full glass hover:bg-brand-light-rose transition-all hover:shadow-lg group/btn"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-brand-charcoal group-hover/btn:text-brand-rose transition-colors" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-brand-rose w-8 shadow-lg shadow-brand-rose/50" : "bg-brand-charcoal/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full glass hover:bg-brand-light-rose transition-all hover:shadow-lg group/btn"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-brand-charcoal group-hover/btn:text-brand-rose transition-colors" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
