import React from "react";
import "../../styles/buttinUI.css";

const Button = ({children, width}) => {
  return (
    <div className=" flex items-center  ">
      <div className="group  cursor-pointer flex items-center justify-center">
        <div
          className={` group flex items-center justify-center bg-gradient-to-tr from-[#fc907e] to-[#9f6eed] w-[${width}px] lg:w-[${
            width + 150
          }px] h-[50px] p-[3px] rounded-[48px]`}
        >
          <div
            className={` px-5 py-3  bg-[#151218] rounded-[48px] transition-all ease-in-out duration-200 group-hover:-scale-0 w-[${width}px] lg:w-[${
              width + 150
            }px] h-[46px]`}
          ></div>
        </div>
        <div className={` absolute left-[${width / 2}px]`}>
          <div className="text-[#fc907e] bg-gradient-to-br font-bold from-[#fc907e] to-[#9f6eed] bg-clip-text text-transparent transition-all  group-hover:text-white duration-300 ease-linear text-xs md:text-sm lg:text-xl ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
