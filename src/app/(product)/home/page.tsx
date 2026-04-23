import Hero from '@/components/product-section/home/HeroSection'
import RequestMoney from '@/components/product-section/home/RequestMoney'
import FastMoney from '@/components/product-section/home/FastMoney'
import AIInsights from '@/components/product-section/home/HowAiHelps'
import Testimonials from '@/components/product-section/home/Testimonials'
import FAQ from '@/components/product-section/home/FAQSection'
import FooterSection from '@/components/product-section/home/FooterSection'
function page() {
    return (
        <>
            <div>
                <Hero />
                <RequestMoney />
                <FastMoney />
                <AIInsights />
                <Testimonials />
                <FAQ />
                <FooterSection/>
            </div>
        </>
    )
}

export default page
