import React from "react";
import AppLayout from "../components/Layout/AppLayout";
import { OutlineButton, SolidButton } from "../components/utils/Button";

const Service = () => {
  return (
    <>
      <AppLayout>
        <section
          className="py-24 bg-cover bg-blend-overlay bg-custom-dark-500"
          // style={{ backgroundImage: `url(${require("../assets/bg2.jpg")})` }}
        >
          <div className="max-w-[1280px] mx-2 md:mx-auto">
            <div className="flex flex-wrap justify-between">
              <div className="md:w-1/2 m-auto md:pr-4 text-center">
                <h1 className="font-extrabold text-4xl lg:text-4xl xl:text-5xl capitalize text-gray-200">
                  We offer an exciting opportunity to acquire rare minerals!
                </h1>
                <p className="text-gray-400 py-4 lg:py-6 max-w-lg mx-auto">
                  Explore our collection of exquisite minerals available for
                  sale. But that's not all - we also empower you to unleash your
                  inner miner and embark on an exhilarating mining adventure of
                  your own.
                </p>
                <div className="flex gap-4">
                  <SolidButton
                    text="Get in touch"
                    goto="/contact"
                    margin="mx-auto"
                  />
                </div>
              </div>
              {/* <div className="md:w-1/2 my-auto md:pr-4">
                <div className="relative block group " href="#0">
                  <div
                    className="absolute inset-0 rounded-xl bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                    aria-hidden="true"
                  ></div>
                  <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                    <img
                      className="rounded-xl absolute inset-0 w-full h-full object-cover brightness-75 contrast-100 transform hover:scale-105 transition duration-700 ease-out"
                      src="https://img.freepik.com/free-photo/heavy-excavator-digging-day-light_23-2149194832.jpg?w=1060&t=st=1693209706~exp=1693210306~hmac=182a3f2e2b2e445e7f82d51ed4f7d627d3909068380504088020d1e632e4d0d6"
                      width="540"
                      height="303"
                      alt="About Lambano"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Items */}
        <div className="bg-white pt-20 mx-auto">
          {/* <img
            className="-m-36 rounded-xl w-[70%] h-96 object-cover brightness-75 contrast-100 mx-auto"
            src="https://img.freepik.com/free-photo/heavy-excavator-digging-day-light_23-2149194832.jpg?w=1060&t=st=1693209706~exp=1693210306~hmac=182a3f2e2b2e445e7f82d51ed4f7d627d3909068380504088020d1e632e4d0d6"
            width="540"
            height="303"
            alt="About Lambano"
            loading="lazy"
          /> */}
          {/* Item */}
          <div className="mt-44">
            <h2>gggggggggg</h2>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default Service;
