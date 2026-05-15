import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    icon: 'https://pesindustrial.com.au/assets/images/services/design.png',
    title: 'E-Blueprint',
    description: 'Our design solutions integrate cutting-edge technology and energy efficiency, delivering sleek and functional systems for your electrical needs.',
    href: '/services/design',
  },
  {
    icon: 'https://pesindustrial.com.au/assets/images/services/manufacturing.png',
    title: 'AUS Empower Manufacturing Unit',
    description: 'Empowering industries with precision-driven manufacturing solutions that combine innovation, efficiency, and quality at every step.',
    href: '/services/manufacturing',
  },
  {
    icon: 'https://pesindustrial.com.au/assets/images/services/pngtre.png',
    title: 'Quotations',
    description: 'A free online tool where you can submit, manage and redeem quotes online at any time.',
    href: '/contact',
  },
  {
    icon: 'https://pesindustrial.com.au/assets/images/services/maintenance.png',
    title: 'Service & solutions',
    description: 'Delivering reliable service and maintenance solutions to ensure your electrical systems perform seamlessly and efficiently, every time.',
    href: '/services/maintenance',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-pes-green font-semibold text-sm tracking-widest uppercase mb-3">HIGH QUALITY SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-pes-dark">Not just a supplier</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex gap-6 p-6 rounded-2xl hover:bg-green-50 transition-all duration-300 hover:shadow-md"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-pes-dark mb-3 group-hover:text-pes-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-pes-green font-semibold text-sm hover:gap-3 transition-all"
                >
                  <span className="w-8 h-8 rounded-full border-2 border-pes-green flex items-center justify-center group-hover:bg-pes-green group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </span>
                  Readmore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
