import AnnotationHeroSection from '@/components/community-section/mini-annotation/HeroSection'
import JobBoard from '@/components/community-section/mini-annotation/JobBoardSection'
import FooterSection from '@/components/product-section/home/FooterSection'

function page() {
    return (
        <div>
            <AnnotationHeroSection />
            <JobBoard />
            <FooterSection/>
        </div>
    )
}

export default page
