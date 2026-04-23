import FooterSection from '@/components/product-section/home/FooterSection'
import ComparisonTable from '@/components/product-section/money-transfer/ComparisonTable'
import HeroSection from '@/components/product-section/money-transfer/HeroSection'
import MoveMoney from '@/components/product-section/money-transfer/MoveMoneySection'
import RatesSection from '@/components/product-section/money-transfer/RatesSection'
import ReviewSection from '@/components/product-section/money-transfer/ReviewsSection'


function page() {
  return (
    <div>
      <HeroSection/>
      <MoveMoney/>
      <RatesSection/>
      <ComparisonTable/>
      <ReviewSection/>
      <FooterSection/>
    </div>
  )
}

export default page
