import CommunityHeroSection from '@/components/community-section/community/CommunityHeroSection'
import HowYouEarn from '@/components/community-section/community/HowToEarnSection'
import ReviewSection from '@/components/community-section/community/ReviewSection'
import FooterSection from '@/components/product-section/home/FooterSection'


function page() {
  return (
    <div>
      <CommunityHeroSection/>
      <HowYouEarn/>
      <ReviewSection/>
      <FooterSection/>
    </div>
  )
}

export default page
