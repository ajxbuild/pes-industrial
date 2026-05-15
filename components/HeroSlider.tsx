'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    bg: 'https://pesindustrial.com.au/assets/images/banner/banner-5.webp',
    tag: 'WELCOME! TURN POSSIBILITIES INTO PROGRESS TODAY',
    title: 'Spark Your',
    titleHighlight: 'Business',
    titleEnd: 'Growth with Dedicated Technical Support and Innovative Electrical Designs',
    subtitle: 'We handle Everything: Electrical, Electronics and Engineering',
    cta: 'Request a Quote',
    ctaLink: '/contact',
    globe: true,
  },
  {
    id: 2,
    bg: 'https://pesindustrial.com.au/assets/images/banner/banner-4.webp',
    tag: 'WELCOME! TURN POSSIBILITIES INTO PROGRESS TODAY',
    title: 'Powering the Future with',
    titleHighlight: 'Advanced Switchboard',
    titleEnd: 'Manufacturing',
    subtitle: 'Harness cutting-edge technology for smarter, efficient, and optimized electrical systems. Redefining production, energy management, and automation for a sustainable future.',
    cta: 'Get Solution',
    ctaLink: '/services',
    globe: false,
  },
  {
    id: 3,
    bg: 'https://pesindustrial.com.au/assets/images/business-goal/102.jpg',
    tag: 'WELCOME! TURN POSSIBILITIES INTO PROGRESS TODAY',
    title: 'Innovating the Future with',
    titleHighlight: 'PES',
    titleEnd: '',
    subtitle: 'Empowering a Sustainable Future with Smart Energy & Automation Solutions',
    cta: 'Get Solution',
    ctaLink: '/services',
    globe: false,
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index: number) => {
    if (animating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 600)
  }, [animating])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={s.bg}
            alt={`slide ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <p className="text-pes-green-btn font-semibold text-sm tracking-widest uppercase mb-4">
            <span className="text-pes-green-btn">{slide.tag.split('!')[0]}!</span>
            {slide.tag.split('!')[1]}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {slide.title}{' '}
            <span className="italic text-pes-green-btn">{slide.titleHighlight}</span>{' '}
            {slide.titleEnd}
          </h1>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl leading-relaxed">
            {slide.subtitle}
          </p>
          <Link
            href={slide.ctaLink}
            className="inline-block bg-pes-green-btn hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            {slide.cta}
          </Link>
        </div>

        {/* Globe animation for slide 1 */}
        {slide.globe && (
          <div className="absolute right-16 bottom-16 w-48 h-48 opacity-80 hidden lg:block">
            <div className="w-full h-full rounded-full border-2 border-teal-400/50 animate-spin" style={{animationDuration: '20s'}}>
              <div className="absolute inset-4 rounded-full border border-teal-400/30" />
              <div className="absolute inset-8 rounded-full border border-teal-400/20" />
              <div className="absolute inset-0 rounded-full bg-teal-500/10" />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'bg-pes-green-btn w-8 h-3'
                : 'bg-white/50 hover:bg-white/80 w-3 h-3'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
    }
