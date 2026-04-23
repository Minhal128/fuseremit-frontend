"use client";

import HeroSectionCompany from "@/components/company-section/blog/BlogHeroSection";
import BlogSection from "@/components/company-section/blog/LatestArticleSection";
import SingleCard from "@/components/company-section/blog/SingleCard";
import FooterSection from "@/components/product-section/home/FooterSection";
import BlogDetail from "@/components/company-section/blog/BlogDetailViewSection";
import React, { useState } from "react";

function Page() {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const handleBack = () => {
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        {selectedArticle ? (
          <>
            <BlogDetail article={selectedArticle} onBack={handleBack} />
            <FooterSection />
          </>
        ) : (
          <>
            <HeroSectionCompany />

            <div className="w-full md:absolute md:top-100">
              <SingleCard />
              <BlogSection
                onArticleClick={(article) => {
                  setSelectedArticle(article);
                  window.scrollTo(0, 0);
                }}
              />
            </div>

            <div className="w-full md:mt-430">
              <FooterSection />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Page;
