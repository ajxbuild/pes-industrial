import Link from 'next/link'

export default function WorkTogether() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://pesindustrial.com.au/assets/images/cta/01.jpg')" }}
    >
      <div className="absolute inset-0 bg-pes-dark/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-pes-green-btn font-semibold text-sm tracking-widest uppercase mb-2">
              Let's discuss about how we can help you
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Lets Work Together
            </h2>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-pes-green-btn hover:bg-green-600 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
