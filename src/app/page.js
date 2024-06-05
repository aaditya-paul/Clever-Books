import CTASection from "@/components/ctaSection";
import FooterSection from "@/components/footerSection";
import HeroSection from "@/components/heroSection";
import KeyMetricsSections from "@/components/keyMetricsSections";
import KeyProblemsSolved from "@/components/keyProblemsSolved";
import NavBar from "@/components/navBar";
import ProblemTargetSection from "@/components/problemTargetSection";
import ReviewSections from "@/components/reviewSections";
import React from "react";

function page() {
  return (
    <div>
      <NavBar>
        <HeroSection />
        <KeyProblemsSolved />
        <KeyMetricsSections />
        <ReviewSections />
        <ProblemTargetSection />
        <div className=" bg-[#151218]">
          <CTASection />
          <FooterSection />
        </div>
      </NavBar>
    </div>
  );
}

export default page;
