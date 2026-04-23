import CoreValueSection from '@/components/company-section/about/CoreValueSection'
import HeroSectionCompany from '@/components/company-section/about/HeroSection'
import MeetTheTeam from '@/components/company-section/about/MeetTeamSection'
import TwoCards from '@/components/company-section/about/TwoCards'
import FooterSection from '@/components/product-section/home/FooterSection'
import React from 'react'

function page() {
    return (
        <div>
            <HeroSectionCompany />
            <div className='md:absolute top-110 left-33'>
                <TwoCards />
                <CoreValueSection />
                <MeetTheTeam />
            </div>
            <div className='md:mt-600'>
                <FooterSection />
            </div>
        </div>
    )
}

export default page
