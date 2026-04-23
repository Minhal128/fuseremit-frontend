import HelpCategories from '@/components/help-section/HelpCards'
import ContactCTA from '@/components/help-section/HelpCTASection'
import HelpSearchHero from '@/components/help-section/HelpHeroSection'
import FooterSection from '@/components/product-section/home/FooterSection'

function page() {
    return (
        <div>
            <HelpSearchHero />
            <HelpCategories />
            <ContactCTA />
            <FooterSection />
        </div>
    )
}

export default page
