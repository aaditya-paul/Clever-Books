"use client";

import React, {useState, useEffect} from "react";
import Marquee from "react-fast-marquee";
import Logo1 from "../../public/assets/logo1.svg";
import Logo2 from "../../public/assets/logo2.svg";
import Logo3 from "../../public/assets/logo3.svg";
import Logo4 from "../../public/assets/logo4.svg";
import Logo5 from "../../public/assets/logo5.svg";
import Logo6 from "../../public/assets/logo6.svg";
import Logo7 from "../../public/assets/logo7.svg";
import Logo8 from "../../public/assets/logo8.svg";
import Samosa from "../../public/assets/samosa.webp";
import PFP1 from "../../public/assets/pfp1.webp";
import PFP2 from "../../public/assets/pfp2.jpg";
import SamosaLogo from "../../public/assets/samosa.svg";
import ArrowLeft from "../../public/assets/left_arrow.svg";
import ArrowRight from "../../public/assets/right_arrow.svg";
import PTALLOGO from "../../public/assets/utensils.svg";
import Utensils from "../../public/assets/utensils.webp";
import Image from "next/image";
import Text from "./ui/text";

function ReviewSections() {
  const [currentReview, setCurrentReview] = useState(0);
  const [fade, setFade] = useState(true);

  const reviews = [
    {
      text: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that’s the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
      name: "Diksha Pande",
      title: "Co-founder, Samosa Party",
      pfp: PFP1,
      logo: SamosaLogo,
      image: Samosa,
    },
    {
      text: "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked. While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
      name: "Kirti Goel",
      title: "Co-founder, P-TAL",
      pfp: PFP2,
      logo: PTALLOGO,
      image: Utensils,
    },
  ];

  useEffect(() => {
    setFade(true);
  }, [currentReview]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
      setFade(true);
    }, 300);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
      setFade(true);
    }, 300);
  };

  return (
    <div>
      {/* marquee */}
      <div>
        <Marquee speed={150} loop={0} pauseOnHover gradientWidth={50}>
          {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8].map(
            (logo, index) => (
              <div key={index}>
                <div className="relative w-48 h-24 mx-5">
                  <Image fill src={logo} alt={`logo${index + 1}`} />
                </div>
              </div>
            )
          )}
        </Marquee>
      </div>
      {/* reviews */}
      <div className="md:px-12 lg:px-36 px-6 md:my-24 lg:my-24 my-12">
        <div className="flex items-center justify-center flex-col-reverse md:flex-col-reverse lg:flex-row gap-8 md:gap-16 lg:gap-32">
          <div
            className={`flex flex-col gap-16 transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="font-primary text-lg">
              {reviews[currentReview].text}
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <div className="flex items-center gap-5">
                  <div className="relative w-16 h-16">
                    <Image
                      fill
                      className="rounded-full"
                      src={reviews[currentReview].pfp}
                      alt="profile"
                    />
                  </div>
                  <div>
                    <div className="font-primary font-semibold text-2xl">
                      {reviews[currentReview].name}
                    </div>
                    <div className="font-primary text-lg">
                      {reviews[currentReview].title}
                    </div>
                  </div>
                </div>
                <div className="hidden md:hidden lg:flex">
                  <div className="relative md:w-16 md:h-16 lg:w-24 lg:h-24">
                    <Image
                      fill
                      className="object-contain"
                      src={reviews[currentReview].logo}
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-col md:flex-col-reverse flex-col-reverse items-end md:items-end lg:items-start gap-16">
                <div className="flex items-center gap-5">
                  <div
                    onClick={handlePrev}
                    className="relative lg:w-8 lg:h-8 md:w-12 md:h-12 w-12 h-12 cursor-pointer rotate-180"
                  >
                    <Image fill src={ArrowRight} alt="arrow" />
                  </div>
                  <div
                    onClick={handleNext}
                    className="relative lg:w-8 lg:h-8 md:w-12 md:h-12 w-12 h-12 cursor-pointer"
                  >
                    <Image fill src={ArrowLeft} alt="arrow" />
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                  {currentReview === 0 ? (
                    <>
                      <div className="min-h-[100px] items-center justify-center p-5 flex flex-col gap-3 text-center bg-lavender rounded-2xl basis-1/3">
                        <span className="text-4xl font-primary">
                          <Text bold>upto 95%</Text>
                        </span>
                        <div className="font-primary text-slate-800">
                          Demand Fulfilment
                        </div>
                      </div>
                      <div className="min-h-[100px] items-center justify-center p-5 flex flex-col gap-3 text-center bg-lavender rounded-2xl basis-1/3">
                        <span className="text-4xl font-primary">
                          <Text bold>&lt; 3%</Text>
                        </span>
                        <div className="font-primary text-slate-800">
                          Daily Stock-out
                        </div>
                      </div>
                      <div className="min-h-[100px] basis-1/3 cursor-pointer hover:saturate-200 transition-all ease-linear">
                        <div className="p-1 h-full rounded-2xl bg-gradient-to-tr from-[#fc907e] to-[#9f6eed]">
                          <div className="bg-white h-full rounded-2xl text-center flex flex-col justify-center items-center text-xl">
                            <Text>Read Story</Text>
                            <Text>&#8594;</Text>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="min-h-[100px] items-center justify-center p-5 flex flex-col gap-3 text-center bg-lavender rounded-2xl basis-1/3">
                        <span className="text-xl font-primary">
                          <Text bold>Automated Invoice Reconciliation</Text>
                        </span>
                      </div>
                      <div className="min-h-[100px] items-center justify-center p-5 flex flex-col gap-3 text-center bg-lavender rounded-2xl basis-1/3">
                        <span className="text-xl font-primary">
                          <Text bold>Channel wise Sales Classification</Text>
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`relative w-[90vw] h-[300px] md:w-[90vw] md:h-[500px] lg:w-[180vw] lg:h-[80vh] transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              fill
              className="border-2 border-[#d8c3ff] rounded-2xl object-contain md:object-cover object-center md:object-center lg:object-cover lg:object-right-top"
              src={reviews[currentReview].image}
              alt="samosa"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSections;
