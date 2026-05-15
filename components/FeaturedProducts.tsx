'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react'

const products = [
  {
    id: 1,
    title: 'Metal Enclosures',
    description: 'Versatile enclosures with IP20-IP66 ratings, various sizes, materials, and finishes',
    image: 'https://pesindustrial.com.au/0f3c50f1934a/uploads_portfolio/6805d63e8b93b.png',
    href: '/products/metal-enclosures',
  },
  {
    id: 2,
    title: 'Surge Protection Device - Hazardous Area SPD',
    description: 'Protection against transient overvoltages caused by lightning strikes, switching events, or faults',
    image: 'https://pesindustrial.com.au/0f3c50f1934a/uploads_portfolio/6806297b9098a.png',
    href: '/products/surge-protection',
  },
  {
    id: 3,
    title: 'Active Harmonic Filter (AHF)',
    description: 'Reduces harmonic distortion in electrical systems, improving power quality.',
    image: 'https://pesindustrial.com.au/0f3c50f1934a/uploads_portfolio/6805c362e0aa8.jpeg',
    href: '/products/harmonic-filter',
  },
  {
    id: 4,
    title: 'Universal Signal Converter - Configurable Input/Output',
    description: 'High-precision signal isolation, conversion, amplification, and transmission',
    image: 'https://pesindustrial.com.au/0f3c50f1934a/uploads_portfolio/6805cc9741d83.png',
    href: '/products/signal-converter',
  },
  {
    id: 5,
    title: 'Automatic Transfer Switch (ATS)',
    description: 'Uninterrupted power is provided by automatically switching between primary and backup power sources.',
    image: 'https://pesindustrial.com.au/0f3c50f1934a/uploads_portfolio/6806257fdbec5.png',
    href: '/products/transfer-switch',
  },
]

export default function FeaturedProducts() {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 2

  const next = () => {
    setStartIndex((prev) => (prev + 1) % products.length)
  }

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const visibleProducts = [
    products[startIndex % products.length],
    products[(startIndex + 1) % products.length],
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pes-dark">Our Featured Products</h2>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-pes-green text-pes-green hover:bg-pes-green hover:text-white transition-all flex items-center justify-center"
              aria-label="Previous products"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-pes-green text-pes-green hover:bg-pes-green hover:text-white transition-all flex items-center justify-center"
              aria-label="Next products"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative bg-gray-50 p-8 flex items-center justify-center h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-pes-dark mb-3 leading-tight">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 bg-pes-green-btn hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-md text-sm"
                >
                  <Eye size={16} />
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* All Products Link */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border-2 border-pes-green text-pes-green hover:bg-pes-green hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
    }
