import CreatorCTA from '@/components/community-section/creator/CreatorCTA'
import CreatorForm from '@/components/community-section/creator/CreatorFormSection'
import CreatorHeroSection from '@/components/community-section/creator/CreatorHeroSection'
import CreatorReviewSection from '@/components/community-section/creator/CreatorReviewSection'
import FooterSection from '@/components/product-section/home/FooterSection'

function page() {
  return (
    <div>
      <CreatorHeroSection/>
      <CreatorCTA/>
      <CreatorForm/>
      <CreatorReviewSection/>
      <FooterSection/>
    </div>
  )
}

export default page
