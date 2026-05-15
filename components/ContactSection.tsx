'use client'
import { useState } from 'react'
import { Phone, MapPin, Clock } from 'lucide-react'

const enquiryTypes = ['Design', 'Manufacturing', 'Maintenance', 'Existing Order', 'Product Information']

export default function ContactSection() {
  const [selected, setSelected] = useState('Design')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <div>
            <p className="text-pes-green font-semibold text-sm tracking-widest uppercase mb-3">Book Your Electrical Consultation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-pes-dark mb-8">Get a free Estimate</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Enquiry Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">What is your Enquiry relating to?</label>
                <div className="flex flex-wrap gap-3">
                  {enquiryTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelected(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                        selected === type
                          ? 'bg-pes-green-btn border-pes-green-btn text-white'
                          : 'border-gray-300 text-gray-600 hover:border-pes-green-btn hover:text-pes-green-btn'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pes-green focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pes-green focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pes-green focus:border-transparent transition-all"
                  placeholder="+61 XXX XXX XXX"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pes-green focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                  Thank you! Your message has been sent. We will get back to you shortly.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-pes-green-btn hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg text-lg"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-pes-dark mb-6">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pes-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-pes-green" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Customer support / Sales inquiries</p>
                    <a href="tel:+61370479431" className="text-pes-dark font-semibold hover:text-pes-green transition-colors">
                      (03) 7047 9431 / +61411338252
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pes-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-pes-green" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Assistance hours</p>
                    <p className="text-pes-dark font-semibold">Monday – Saturday</p>
                    <p className="text-gray-600 text-sm">8 am to 8 pm AEST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-pes-dark mb-6">Post Address</h3>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pes-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-pes-green" />
                </div>
                <div>
                  <p className="font-semibold text-pes-dark">Service Office</p>
                  <p className="text-gray-600 text-sm mt-1">3/3 Hi-Tech Place</p>
                  <p className="text-gray-600 text-sm">Rowville, VIC 3178</p>
                  <p className="font-semibold text-pes-dark mt-3">Head Office</p>
                  <p className="text-gray-600 text-sm mt-1">Melbourne, Australia</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-64 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.2!2d145.2!3d-37.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z37.9%2C145.2!5e0!3m2!1sen!2sau!4v1620000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="PES Industrial Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
                        }
