"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const galleryCategories = ["All", "Haircuts", "Color", "Bridal", "Spa"]

const galleryImages = [
  { id: 1, category: "Haircuts", title: "Modern Layered Cut", src: "/modern-layered-haircut.jpg" },
  { id: 2, category: "Color", title: "Balayage Highlights", src: "/balayage-highlights.jpg" },
  { id: 3, category: "Bridal", title: "Bridal Updo", src: "/bridal-wedding-updo.jpg" },
  { id: 4, category: "Haircuts", title: "Pixie Cut", src: "/pixie-cut-hairstyle.jpg" },
  { id: 5, category: "Color", title: "Ombre Color", src: "/ombre-hair-color.jpg" },
  { id: 6, category: "Spa", title: "Spa Treatment", src: "/salon-spa-facial-treatment.jpg" },
  { id: 7, category: "Bridal", title: "Event Styling", src: "/event-hair-styling.jpg" },
  { id: 8, category: "Haircuts", title: "Bob Style", src: "/bob-hairstyle-cut.jpg" },
]

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section id="gallery" className="relative py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal mb-4">Our Gallery</h2>
          <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
            See our latest transformations and professional work
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-brand-charcoal text-brand-cream"
                  : "glass text-brand-charcoal hover:bg-brand-light-rose"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl glass hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="font-semibold text-brand-cream">{image.title}</p>
                  <p className="text-brand-rose text-sm">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
