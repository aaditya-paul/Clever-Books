import Image from "next/image";
import React from "react";
import Icon1 from "../../public/assets/icon1.svg";
import Icon2 from "../../public/assets/icon2.svg";
import Icon3 from "../../public/assets/icon3.svg";
import Icon4 from "../../public/assets/icon4.svg";
function KeyProblemsSolved() {
  return (
    <div className="md:px-12  lg:px-36 px-6  md:my-24 lg:my-36 ">
      <div className="  flex flex-col gap-16 md:gap-24  lg:gap-24 justify-center items-center my-16 ">
        <div className=" font-primary text-center text-2xl md:text-4xl lg:text-4xl font-[700]">
          Four key questions answered by Clever Books
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto gap-4 ">
          <div className="bg-lavender w-full h-full  rounded-2xl break-words p-5 md:p-5 lg:p-7">
            <div className=" flex flex-col gap-5">
              <div className=" relative w-12 md:w-16 lg:w-16 h-12 md:h-16 lg:h-16">
                <Image fill src={Icon1} alt="icon1" />
              </div>
              <div className=" flex flex-col gap-5">
                <div className=" font-primary text-2xl font-semibold">
                  What to order
                </div>
                <div className=" font-primary text-lg leading-7 font-light">
                  Get accurate demand and days to stock out. Automate purchase
                  planning so you can always have what you need for your next
                  sales cycle
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lavender w-full h-full  rounded-2xl break-words p-5 md:p-5 lg:p-7">
            <div className=" flex flex-col gap-5">
              <div className=" relative w-12 md:w-16 lg:w-16 h-12 md:h-16 lg:h-16">
                <Image fill src={Icon2} alt="icon1" />
              </div>
              <div className=" flex flex-col gap-5">
                <div className=" font-primary text-2xl font-semibold">
                  When to order
                </div>
                <div className=" font-primary text-lg leading-7 font-light">
                  Get accurate demand and days to stock out. Automate purchase
                  planning so you can always have what you need for your next
                  sales cycle
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lavender w-full h-full  rounded-2xl break-words p-5 md:p-5 lg:p-7">
            <div className=" flex flex-col gap-5">
              <div className=" relative w-12 md:w-16 lg:w-16 h-12 md:h-16 lg:h-16">
                <Image fill src={Icon3} alt="icon1" />
              </div>
              <div className=" flex flex-col gap-5">
                <div className=" font-primary text-2xl font-semibold">
                  How much to stock
                </div>
                <div className=" font-primary text-lg leading-7 font-light">
                  Get accurate demand and days to stock out. Automate purchase
                  planning so you can always have what you need for your next
                  sales cycle
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lavender w-full h-full  rounded-2xl break-words p-5 md:p-5 lg:p-7">
            <div className=" flex flex-col gap-5">
              <div className=" relative w-12 md:w-16 lg:w-16 h-12 md:h-16 lg:h-16">
                <Image fill src={Icon4} alt="icon1" />
              </div>
              <div className=" flex flex-col gap-5">
                <div className=" font-primary text-2xl font-semibold">
                  Where to place
                </div>
                <div className=" font-primary text-lg leading-7 font-light">
                  Get accurate demand and days to stock out. Automate purchase
                  planning so you can always have what you need for your next
                  sales cycle
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyProblemsSolved;
