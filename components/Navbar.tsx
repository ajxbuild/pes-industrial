'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    dropdown: [
      { label: 'Power Distribution & Protection', href: '/products/power-distribution' },
      { label: 'Automation & Control', href: '/products/automation' },
      { label: 'Safety & Hazardous Area Equipment', href: '/products/safety' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Design', href: '/services/design' },
      { label: 'Manufacturing', href: '/services/manufacturing' },
      { label: 'Electrical Maintenance', href: '/services/maintenance' },
    ],
  },
  { label: 'News Letter', href: '/newsletter' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-pes-dark text-white text-sm py-2 px-4 hidden md:flex justify-between items-center">
        <span className="text-gray-300 text-xs">We handle Everything: Electrical, Electronics and Engineering</span>
        <div className="flex items-center gap-6">
          <a href="mailto:info@pesindustrial.com.au" className="flex items-center gap-1 hover:text-pes-green-btn transition-colors">
            <Mail size={14} />
            <span>info@pesindustrial.com.au</span>
          </a>
          <a href="tel:+61370479431" className="flex items-center gap-1 hover:text-pes-green-btn transition-colors">
            <Phone size={14} />
            <span>(03) 7047 9431 / +61411338252</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://pesindustrial.com.au/assets/images/logo/logo.webp"
                alt="PES Industrial Logo"
                width={120}
                height={50}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-pes-green transition-colors rounded-md"
                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                  </Link>
                  {link.dropdown && (
                    <div
                      className="absolute left-0 top-full mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-pes-green transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pes-green hover:bg-green-50 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-pes-green hover:bg-green-50 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <a href="tel:+61370479431" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600">
                  <Phone size={16} />
                  <span>(03) 7047 9431</span>
                </a>
                <a href="mailto:info@pesindustrial.com.au" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600">
                  <Mail size={16} />
                  <span>info@pesindustrial.com.au</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
  }
