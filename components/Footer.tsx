import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Resources', href: '/newsletter' },
  { label: 'Our Company', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-pes-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src="https://pesindustrial.com.au/assets/images/logo/logo.webp"
                alt="PES Industrial Logo"
                width={140}
                height={55}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              PES INDUSTRIAL - Experience unparalleled electrical innovation with PES Industrial delivering cutting-edge solutions that redefine power, automation, and seamless communication.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-pes-green-btn hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-pes-green-btn" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-pes-green-btn transition-colors text-sm group"
                  >
                    <span className="w-1.5 h-1.5 bg-pes-green-btn rounded-full group-hover:scale-125 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-pes-green-btn" />
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-pes-green-btn mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+61370479431" className="text-gray-400 hover:text-white transition-colors text-sm block">
                    (03) 7047 9431
                  </a>
                  <a href="tel:+61411338252" className="text-gray-400 hover:text-white transition-colors text-sm block">
                    +61411338252
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-pes-green-btn mt-0.5 flex-shrink-0" />
                <a href="mailto:info@pesindustrial.com.au" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@pesindustrial.com.au
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-pes-green-btn mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">3/3 Hi-Tech Place,</p>
                  <p className="text-gray-400 text-sm">Rowville, VIC 3178</p>
                  <p className="text-gray-400 text-sm">Melbourne, Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            PES - Copyright 2026. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-gray-500 text-sm">Built with</span>
            <span className="text-pes-green-btn text-sm font-medium"> Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
