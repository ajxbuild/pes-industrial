import HeroSlider from '@/components/HeroSlider'
import ServicesGrid from '@/components/ServicesGrid'
import WorkTogether from '@/components/WorkTogether'
import FeaturedProducts from '@/components/FeaturedProducts'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesGrid />
      <WorkTogether />
      <FeaturedProducts />
      <ContactSection />
    </>
  )
}
