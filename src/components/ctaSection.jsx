import React from "react";
import "../styles/ctaCSS.css";
function CTASection() {
  return (
    <div>
      <div className="w-full h-[80vh] lg:h-[100vh] bg-[#151218]">
        <div className="flex justify-center items-center md:p-12 lg:pt-48 lg:p-36 pt-0 md:pt-36 h-full">
          <div className="rounded-3xl w-[80vw] h-[40vh] lg:h-[70vh] bg-white flex items-center justify-center overflow-hidden">
            <div
              className="rotating rounded-full scale-150 bg-gradient-to-tr from-[#ffa190] to-[#7330de]"
              style={{
                width: "200%",
                height: "200%",
                transformOrigin: "center",
                animation: "rotating 2s linear infinite",
              }}
            ></div>
          </div>
          <div className="absolute flex flex-col gap-5 justify-center items-center w-[80vw] h-[70vh] p-5 md:p-16 lg:p-48 text-center ">
            <div className="  text-white text-2xl md:text-3xl lg:text-4xl font-bold">
              You can grow faster than you think!
            </div>
            <div className="text-xs md:text-xl lg:text-xl text-white">
              Plan with Clever Books to fulfil your demand today, and dreams
              tomorrow. We bring the methods and technologies of large global
              companies to help brands of all sizes scale.
            </div>
            <div className=" text-xs md:text-lg lg:text-lg cursor-pointer active:scale-95 transition-all ease-linear bg-black text-white py-3 px-5 rounded-[48px]">
              <div>Get Started With Clever Books</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
