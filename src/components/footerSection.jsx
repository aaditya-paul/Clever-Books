import Link from "next/link";
import React from "react";
import Up from "../../public/assets/up.svg";
import Image from "next/image";
function FooterSection() {
  return (
    <div className=" w-full h-full bg-[#151218] md:p-12 lg:pt-48 lg:p-36 p-6  pt-0 md:pt-36">
      <div className=" text-white text-4xl font-primary my-12  ">
        <Link href={"/"}>
          <div className=" relative w-16 h-16">
            <Image fill src={Up} alt="up" />
          </div>
        </Link>
      </div>
      <div className=" flex flex-col lg:flex-row gap-12 md:gap-24 lg:gap-36">
        <div className=" basis-2/3 flex flex-col gap-5">
          <div className=" text-white text-4xl font-primary ">
            <Link href={"/"}>Clever Books</Link>
          </div>
          <div className=" hidden lg:flex text-white text-opacity-55 text-lg font-primary">
            Darsheel Savla, a co-founder at PatilKaki, is a charismatic and
            creative powerhouse who infuses his passion for food, people, and
            brand building into everything he does. With an unshakable drive and
            an insatiable appetite for culinary exploration, he&apos;s
            determined to bring the legendary recipes of PatilKaki to the world.
          </div>
        </div>
        <div className=" basis-2/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 justify-end">
          <div className=" max-w-64 flex flex-col gap-10 text-white">
            <div className=" font-bold">Explore</div>
            <div className=" text-opacity-55 text-white">
              <Link href={"#"}>Product</Link>
            </div>
            <div className=" text-opacity-55 text-white">
              <Link href={"#"}>Pricing</Link>
            </div>
            <div className=" text-opacity-55 text-white">
              <Link href={"#"}>Customer</Link>
              Stories
            </div>
            <div className=" text-opacity-55 text-white">
              <Link href={"#"}>Career</Link>
            </div>
          </div>
          <div className="  max-w-64 flex flex-col gap-10 text-white">
            <div className=" font-bold">Learn</div>
            <div className=" text-opacity-55 text-white">
              <Link href={"#"}>About Us</Link>
            </div>
            <div className=" text-opacity-55 text-white">
              <Link href={"#"}>Blog</Link>
            </div>
          </div>
          <div className=" max-w-64 flex flex-col gap-10 text-white">
            <div className=" font-bold">Contact Clever Books</div>
            <div className=" text-opacity-55 text-white">example@mail.com</div>
            <div className=" text-opacity-55 text-white">
              Registered Office: 1507, Incubex, 11th cross road, 19th Main Road,
              Bengaluru, India. 560102
            </div>
            <div className=" text-opacity-55 text-white">
              Corporate Office: 291, All Time Space, 4th Floor, 15th A Cross,
              Sector - 6, HSR Layout, Bengaluru, India. 560102
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
