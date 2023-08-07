import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Footer from "./Footer";

const AppLayout = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header
        className={`sticky top-0 w-full z-50 transition-all delay-100 ease-in font-tailwind py-2 md:py-6 ${
          scrolled ? "backdrop-blur-md py-2" : ""
        }`}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-center w-full relative">
            <div className="my-auto font-bold text-xl text-gray-300">
              LambanoMetals
            </div>

            <div className="md:hidden">
              <button
                className="py-3 m-auto z-20"
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <HiMenu size={30} className="text-gray-900" />
              </button>
            </div>

            <nav className={`hidden md:flex font-bold`}>
              {/* <nav
              className={
                menuToggle
                  ? "rounded lg:rounded-none absolute lg:static top-[66px] left-0 p-4 marker:w-full lg:w-auto border lg:border-none shadow-md lg:shadow-none"
                  : "hidden lg:flex my-auto"
              }
            > */}
              <ul className="flex gap-8 tracking-wider text-gray-300 my-auto">
                <li className="text-sm capitalize hover:text-[#79f1f7] transition-all duration-75">
                  <a>Home</a>
                </li>
                <li className="text-sm capitalize hover:text-[#79f1f7] transition-all duration-75">
                  <a>about</a>
                </li>
                <li className="text-sm capitalize hover:text-[#79f1f7] transition-all duration-75">
                  <a>service</a>
                </li>
                <li className="text-sm capitalize hover:text-[#79f1f7] transition-all duration-75">
                  <a>contact</a>
                </li>
              </ul>
              <button
                type="button"
                className="px-5 py-1 ml-8 text-gray-300 hover:text-gray-900 hover:outline-none hover:bg-[#79f1f7] rounded-md outline outline-[#79f1f7] capitalize"
              >
                Get in touch
              </button>
            </nav>
          </div>
        </div>
      </header>

      <section className="max-w-[1280px] mx-2 md:mx-auto mt-12 py-12">
        <div className="flex flex-wrap justify-between">
          <div className="md:w-1/2 my-auto md:pr-4">
            <h1 className="font-extrabold text-4xl lg:text-5xl xl:text-6xl capitalize text-gray-200">
              We pride ourselves in giving full-cycle services
            </h1>
            <p className="text-gray-500 py-4 lg:py-6">
              We pride ourselves in giving full-cycle services We pride
              ourselves in giving full-cycle services We pride ourselves in
              giving full-cycle services
            </p>
            <button
              type="button"
              className="px-5 py-2 rounded-md bg-[#79f1f7] font-bold capitalize"
            >
              Get in touch
            </button>
            <div className="flex gap-4 mt-12">
              <h1 className="font-bold text-2xl text-gray-500">Stripe</h1>
              <h1 className="font-bold text-2xl text-gray-500">Airbnb</h1>
              <h1 className="font-bold text-2xl text-gray-500">Vise</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mt-20 mb-36">
        <div className="flex flex-wrap md:justify-evenly">
          <div className="w-full md:w-[23%] text-center mb-6 text-gray-200">
            <img
              src="https://media.gettyimages.com/id/1324872027/photo/african-female-gardener-working-in-greenhouse.jpg?s=612x612&w=gi&k=20&c=6QkGl4sV6LsYE-YQ3504kU_ww4Vwh1zutr0ikHdyTAE="
              className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
            />
            <h1 className="font-bold text-xl capitalize mb-2">
              Environment management
            </h1>
            <p className="text-gray-500 text-sm px-4">
              we approach our environment with care and attention.
            </p>
          </div>
          <div className="w-full md:w-[23%] text-center mb-6 text-gray-200">
            <img
              src="https://scatec.com/wp-content/uploads/sites/7/2020/03/Human-rights_Scatec-Solar-676x410.jpg"
              className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
            />
            <h1 className="font-bold text-xl capitalize mb-2">
              Community engagement
            </h1>
            <p className="text-gray-500 text-sm px-4">
              We give back 40 percent to the community from our revenue.
            </p>
          </div>
          <div className="w-full md:w-[23%] text-center mb-6 text-gray-200">
            <img
              src="https://www.amnesty.org.uk/files/styles/poster/s3/2020-04/269218_%282%29.jpg?VersionId=5qqjobVSTI67CwDLG_gDbEOvq2Nw6QFV&itok=e-_6vTMh"
              className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
            />
            <h1 className="font-bold text-xl capitalize mb-2">Human rights</h1>
            <p className="text-gray-500 text-sm px-4">
              We do everything we can under the law to protect our workforce
              from any human rights violations
            </p>
          </div>
          <div className="w-full md:w-[23%] text-center text-gray-200">
            <img
              src="https://nosa.co.za/wp-content/uploads/2020/12/December-blog-2-01-scaled.jpg"
              className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
            />
            <h1 className="font-bold text-xl capitalize mb-2">
              Health and safety
            </h1>
            <p className="text-gray-500 text-sm px-4">
              We believe that productivity doesnot come before safety.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white my-20 py-16">
        <div className="max-w-[1280px] mx-2 md:mx-auto">
          <div className="w-full md:w-1/2">
            <h1 className="font-bold text-2xl capitalize mb-4">Our products</h1>
            <p className="text-gray-500">
              We produce and market a diverse range of metal and mineral ores
              both from our various mining sites, and small scale miners and
              commodity suppliers.
            </p>
          </div>
          <div className="flex flex-wrap mt-12">
            <div className="w-1/2 md:w-1/4 my-4">
              <h1 className="font-bold text-xl">Nickel</h1>
            </div>
            <div className="w-1/2 md:w-1/4 my-4">
              <h1 className="font-bold text-xl">Tantalum</h1>
            </div>
            <div className="w-1/2 md:w-1/4 my-4">
              <h1 className="font-bold text-xl">Chromite</h1>
            </div>
            <div className="w-1/2 md:w-1/4 my-4">
              <h1 className="font-bold text-xl">Berlin</h1>
            </div>
            <div className="w-1/2 md:w-1/4 my-4">
              <h1 className="font-bold text-xl">Quartz</h1>
            </div>
            <div className="w-1/2 md:w-1/4 my-4">
              <h1 className="font-bold text-xl">Dolomite</h1>
            </div>
            <div className="w-1/2 md:w-1/4 my-4">
              <h1 className="font-bold text-xl">Feldspar</h1>
            </div>
            <div className="w-1/2 md:w-1/4 my-4">
              <h1 className="font-bold text-xl">Mica</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-2 md:mx-auto my-20">
        <div className="flex flex-wrap justify-center my-28">
          <div className="w-full md:w-1/3 md:m-auto">
            <h1 className="font-bold text-3xl capitalize mb-4 text-[#79f1f7]">
              Developing mining projects
            </h1>
            <p className="text-gray-500">
              These mining project developments are in various stages and we are
              open and ready to collaborate with both
            </p>
            <button
              type="button"
              className="px-5 py-2 my-6 rounded-md bg-gray-400 font-bold capitalize"
            >
              Get in touch
            </button>
          </div>
          <div className="w-full md:w-1/2 md:ml-20">
            <img
              src="https://www.festanks.com.au/wp-content/uploads/2019/07/Syama-resolute-mining.jpg"
              className="rounded-md w-full object-cover grayscale hover:grayscale-0"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center my-28">
         
          <div className="w-full md:w-1/3 md:m-auto">
            <h1 className="font-bold text-3xl capitalize mb-4 text-[#79f1f7]">
              Consulting Service
            </h1>
            <p className="text-gray-500">
              We are here to help in consulting and specially arranging
              collaboration between local and new entry investors.
            </p>
            <button
              type="button"
              className="px-5 py-2 my-6 rounded-md bg-gray-400 font-bold capitalize"
            >
              Get in touch
            </button>
          </div>
          <div className="w-full md:w-1/2 md:mr-20 md:order-first">
            <img
              src="https://www.bara-consulting.com/wp-content/uploads/2019/11/Yeristovo-rock-mining-1024x683.jpg"
              className="rounded-md w-full object-cover grayscale hover:grayscale-0"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center my-28">
          <div className="w-full md:w-1/3 md:m-auto">
            <h1 className="font-bold text-3xl capitalize mb-4 text-[#79f1f7]">
              Supplying Machinery and Technologies
            </h1>
            <p className="text-gray-500">
              We provide a variety of equipment, machinery and technologies that
              mechanize the mining work
            </p>
            <button
              type="button"
              className="px-5 py-2 my-6 rounded-md bg-gray-400 font-bold capitalize"
            >
              Get in touch
            </button>
          </div>
          <div className="w-full md:w-1/2 md:ml-20">
            <img
              src="https://www.deere.africa/assets/images/region-1/homepage/jdf-prl-homepage-afme.jpg"
              className="rounded-md w-full object-cover grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-2 md:mx-auto mt-5 py-12">
        <h1 className="font-bold text-3xl text-center capitalize mb-4 text-gray-300">
          Our Representatives
        </h1>
        <p className="text-gray-400 text-center">
          We have Representatives all over the world. Get in touch
        </p>
        <img
          src={require("../../assets/l-map.png")}
          className="w-full md:w-[70%] mx-auto my-20"
        />
      </section>
      <Footer />
    </>
  );
};

export default AppLayout;
