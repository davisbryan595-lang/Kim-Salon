"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            href="/"
            className="flex-shrink-0 text-xl md:text-2xl font-serif font-bold text-brand-charcoal hover:text-brand-rose transition-colors relative group"
          >
            Kim's Salon
            <span className="absolute inset-0 text-brand-rose opacity-0 group-hover:opacity-100 blur-md transition-opacity">
              Kim's Salon
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-brand-charcoal hover:text-brand-rose transition-all font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-rose to-brand-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-brand-charcoal hover:text-brand-rose transition-all font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-rose to-brand-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-brand-charcoal hover:text-brand-rose transition-all font-medium relative group"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-rose to-brand-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-brand-charcoal hover:text-brand-rose transition-all font-medium relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-rose to-brand-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-brand-charcoal hover:text-brand-rose transition-all font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-rose to-brand-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <a
              href="tel:(818)359-1660"
              className="flex items-center gap-2 bg-brand-charcoal text-black px-4 py-2 rounded-full hover:bg-brand-rose transition-all duration-300 relative overflow-hidden group glow-rose"
            >
              <Phone size={18} />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-charcoal hover:text-brand-rose transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 glass-dark rounded-b-lg">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left px-4 py-2 text-brand-charcoal hover:text-brand-rose transition-all relative group"
            >
              Home
              <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-gradient-to-r from-brand-rose to-brand-gold group-hover:w-12 transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-brand-charcoal hover:text-brand-rose transition-all relative group"
            >
              Services
              <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-gradient-to-r from-brand-rose to-brand-gold group-hover:w-12 transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left px-4 py-2 text-brand-charcoal hover:text-brand-rose transition-all relative group"
            >
              Gallery
              <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-gradient-to-r from-brand-rose to-brand-gold group-hover:w-12 transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-4 py-2 text-brand-charcoal hover:text-brand-rose transition-all relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-gradient-to-r from-brand-rose to-brand-gold group-hover:w-12 transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-brand-charcoal hover:text-brand-rose transition-all relative group"
            >
              Contact
              <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-gradient-to-r from-brand-rose to-brand-gold group-hover:w-12 transition-all duration-300"></span>
            </button>
            <a
              href="tel:(818)359-1660"
              className="block w-full text-center px-4 py-2 bg-brand-charcoal text-black rounded-full hover:bg-brand-rose transition-all duration-300 m-2 relative overflow-hidden glow-rose"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
