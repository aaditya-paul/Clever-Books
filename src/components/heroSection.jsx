import React from "react";
import "../styles/heroSection.css";
import Image from "next/image";
import Vector from "../../public/assets/vector.svg";
import Vector2 from "../../public/assets/vector2.svg";
import Button from "./ui/button";
import Text from "./ui/text";

function HeroSection() {
  return (
    <div className="  hero-class">
      <div className="md:p-12 lg:pt-48 lg:p-36 p-6  pt-36 md:pt-36 h-full">
        <div className="flex flex-col lg:flex-row items-center   md:gap-24 gap-12 lg:gap-12 h-full">
          <div className="flex  flex-col gap-5 md:gap-5  lg:gap-7">
            <div className=" lg:text-5xl font-semibold md:text-3xl text-3xl md:leading-[40px] lg:leading-[76px] text-white font-primary">
              Every Culinary Dream, <br></br> <Text bold> Realised.</Text>
            </div>
            <div className=" lg:text-lg md:text-xl text-sm lg:leading-8 md:leading-7 text-white font-primary">
              Eliminate the guesswork and unlock the full potential of your
              culinary and business ventures with Darsheel Savla. As the
              charismatic co-founder of PatilKaki, Darsheel brings a relentless
              passion for food, people, and brand building to everything he
              does.
            </div>
            <div className=" flex items-center gap-2">
              <div className=" ">
                <div className=" flex items-center  ">
                  <div className="group  cursor-pointer flex items-center justify-center">
                    <div
                      className={` group flex items-center justify-center bg-gradient-to-tr from-[#fc907e] to-[#9f6eed] w-[200px] md:w-[230px] lg:w-[310px] h-[50px] lg:h-[60px] p-[3px] rounded-[48px]`}
                    >
                      <div
                        className={` px-5 py-3  bg-[#151218] rounded-[48px] transition-all ease-in-out duration-200 group-hover:-scale-0 w-[200px]  md:w-[230px] lg:w-[310px] h-[46px] lg:h-[56px]`}
                      ></div>
                    </div>
                    <div
                      className={` absolute left-[40px] md:left-[65px] lg:left-[155px]`}
                    >
                      <div className="text-[#fc907e] bg-gradient-to-br font-bold from-[#fc907e] to-[#9f6eed] bg-clip-text text-transparent transition-all  group-hover:text-white duration-300 ease-linear text-xs md:text-sm lg:text-xl ">
                        Get Started With Clever Books
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[100px] h-[90px] md:w-[200px] md:h-[100px] scale-90">
                <Image
                  className=" group-hover:scale-150 hover:scale-90 transition-all ease-linear"
                  fill
                  src={Vector2}
                  alt="vector"
                />
              </div>
            </div>
          </div>
          {/* vector */}
          <div className=" overflow-clip lg:overflow-visible ">
            <div className=" relative w-[90vw] h-[90vw] md:w-[90vw] md:h-[90vw] lg:w-[600px] lg:h-[600px] ">
              <Image fill src={Vector} alt="vector" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
