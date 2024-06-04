"use client";

import Link from "next/link";
import React, {useState, useEffect} from "react";
import "../styles/navbar.css";
import Image from "next/image";
import Menu from "../../public/assets/menu.svg";
import Close from "../../public/assets/close.svg";
function NavBar({children}) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menu, setMenu] = useState(false);
  const [scrollNearTop, setScrollNearTop] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY < 100) {
      setScrollNearTop(true);
    } else {
      setScrollNearTop(false);
    }
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className=" flex flex-col gap-3 md:gap-6 lg:gap-12">
      {/* navbar */}
      <div
        className={` ${
          !show ? " -translate-y-full" : "translate-y-0"
        } z-50 fixed transition-all ease-in-out  duration-500 flex px-12 md:px-12 lg:px-24  h-[70px] text-white w-full bg-[#151218] ${
          scrollNearTop ? " bg-opacity-100" : " bg-opacity-65"
        } `}
      >
        <div className="  flex justify-between items-center w-full self-center  ">
          <div className=" font-bold text-2xl">
            <Link href={"/"}>Clever Books</Link>
          </div>
          <div className={`  hidden   lg:flex`}>
            <div className={`flex gap-6`}>
              <div className=" text-white hover:text-salmon transition-all duration-[0.3] ease-linear">
                <Link href={"#"}>Product</Link>
              </div>
              <div className=" text-white hover:text-salmon transition-all duration-[0.3] ease-linear">
                <Link href={"#"}>Pricing</Link>
              </div>
              <div className=" text-white hover:text-salmon transition-all duration-[0.3] ease-linear">
                <Link href={"#"}>Industry</Link>
              </div>
              <div className=" text-white hover:text-salmon transition-all duration-[0.3] ease-linear">
                <Link href={"#"}>Customer Stories</Link>
              </div>
              <div className=" text-white hover:text-salmon transition-all duration-[0.3] ease-linear">
                <Link href={"#"}>About</Link>
              </div>
              <div className=" text-white hover:text-salmon transition-all duration-[0.3] ease-linear">
                <Link href={"#"}>Blog</Link>
              </div>
            </div>
          </div>
          <div className=" hidden lg:flex">
            <div className=" flex items-center gap-5">
              <Link href={"#"}>
                <div className=" login-btn-class">Login</div>
              </Link>
              <div className="px-6 py-4 btn-primary-class cursor-pointer ">
                Talk to Us
              </div>
            </div>
          </div>
          <div className=" flex lg:hidden items-center cursor-pointer">
            <div
              onClick={() => {
                setMenu(!menu);
              }}
              className=" relative w-6 h-6"
            >
              {!menu ? (
                <Image fill src={Menu} alt="menu" />
              ) : (
                <Image fill src={Close} alt="close" />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div className={`${menu ? "block" : "hidden"}  mt-[70px] bg-white`}>
        <div className={` flex flex-col `}>
          <div className={`flex flex-col px-12 py-12  gap-10 `}>
            <div className=" text-black text-xl  hover:text-salmon transition-all duration-[0.3] ease-linear">
              <Link href={"#"}>Product</Link>
            </div>
            <div className=" text-black text-xl  hover:text-salmon transition-all duration-[0.3] ease-linear">
              <Link href={"#"}>Pricing</Link>
            </div>
            <div className=" text-black text-xl  hover:text-salmon transition-all duration-[0.3] ease-linear">
              <Link href={"#"}>Industry</Link>
            </div>
            <div className=" text-black text-xl  hover:text-salmon transition-all duration-[0.3] ease-linear">
              <Link href={"#"}>Customer Stories</Link>
            </div>
            <div className=" text-black text-xl  hover:text-salmon transition-all duration-[0.3] ease-linear">
              <Link href={"#"}>About</Link>
            </div>
            <div className=" text-black text-xl  hover:text-salmon transition-all duration-[0.3] ease-linear">
              <Link href={"#"}>Blog</Link>
            </div>
          </div>
        </div>
        <div className=" flex flex-col text-black">
          <div className=" flex flex-col items-center gap-5">
            <Link href={"#"}>
              <div className=" login-btn-class">Login</div>
            </Link>
            <div className="px-6 py-4 btn-primary-class cursor-pointer ">
              Talk to Us
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className={` ${menu ? "hidden" : "block"} mt-[80px] `}>
        {children}
      </div>
    </div>
  );
}

export default NavBar;
