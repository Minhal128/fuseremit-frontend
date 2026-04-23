import Benefits from '@/components/company-section/careers/BenefitsSection'
import CareersHero from '@/components/company-section/careers/CareersHeroSection'
import FusremitCardsSection from '@/components/company-section/careers/FusremitCardsSection'
import OpenPositions from '@/components/company-section/careers/OpenPositionsSection'
import FooterSection from '@/components/product-section/home/FooterSection'
import React from 'react'

function page() {
  return (
    <div>
      <CareersHero/>
      <FusremitCardsSection/>
      <Benefits/>
      <OpenPositions/>
      <FooterSection/>
    </div>
  )
}

export default page
