import React from "react";
import AppLayout from "../components/Layout/AppLayout";
import { OutlineButton, SolidButton } from "../components/utils/Button";
import Small from "../components/utils/Small";

const About = () => {
  return (
    <>
      <AppLayout>
        <section
          className="pt-24 pb-20 bg-contain bg-blend-overlay bg-custom-dark-500 mx-auto"
          // style={{ backgroundImage: `url(${require("../assets/nbg.png")})` }}
        >
          <div className="max-w-[1280px] mx-2 md:mx-auto">
            <div className="w-full md:max-w-2xl my-auto md:pr-4 md:mx-auto text-center mb-20">
              <h1 className="font-extrabold text-4xl lg:text-4xl xl:text-5xl capitalize text-gray-200">
                We pride ourselves in giving full-cycle services
              </h1>
              <p className="text-gray-500 py-4 lg:py-6">
                Embracing the Earth's Treasures: Your Premier Destination for
                Dependable Mineral Supply and Unparalleled Mining Expertise,
                Enabling Sustainable Growth and Success.
              </p>
              <OutlineButton text="Get in touch" goto="/contact" />
            </div>
            <div className="w-full md:max-w-5xl my-auto md:pr-4 md:mx-auto">
              <img
                className="rounded-xl w-full h-96 object-cover brightness-75 contrast-100 transform hover:scale-105 transition duration-700 ease-out"
                src="https://www.mtga.com.au/wp-content/uploads/2022/04/Australian_Mining_Equipment-MTGA-2-scaled.jpg"
                width="540"
                height="303"
                alt="About Lambano"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-xl mx-auto my-12">
            <h1 className="text-3xl font-bold text-gray-200 mb-6 text-center">
              Company Description
            </h1>
            <p className="text-gray-400 my-6 text-center md:text-left ">
              Lambano Metals is a minerals and metals supplier headquartered at
              Addis Ababa, Ethiopia. We are focused majorly on industrial
              minerals and metals in addressing critical needs of natural
              resources that are needed for human progress.
            </p>

            <p className="text-gray-400 hidden md:block">
              Having understood the unutilized resources of Ethiopia, we aspire
              to be a community based sustainable supplier of major industrial
              commodities, both for domestic and global markets.
            </p>
          </div>
        </section>

        <section className="font-tailwind">
          <div className="max-w-[1280px] mx-auto text-center">
            <div className="flex flex-wrap md:justify-evenly my-24">
              <div className="w-full max-w-sm text-center mb-6 p-4 bg-[#293041]/80 border border-[#434959] rounded-xl">
                <img
                  loading="lazy"
                  src="https://scatec.com/wp-content/uploads/sites/7/2020/03/Human-rights_Scatec-Solar-676x410.jpg"
                  alt="happy african labors"
                  className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
                />
                <h1 className="font-bold text-xl capitalize mb-2 text-gray-100">
                  Our Vision
                </h1>
                <p className="text-gray-400 text-sm px-4">
                  Our vision is to be the global leader in supplying top-quality
                  metals and minerals, setting the industry standard for
                  excellence.
                </p>
              </div>

              <div className="w-full max-w-sm text-center mb-6 p-6 bg-[#293041]/80  border border-[#434959] rounded-xl">
                <img
                  loading="lazy"
                  src="https://scatec.com/wp-content/uploads/sites/7/2020/03/Human-rights_Scatec-Solar-676x410.jpg"
                  alt="happy african labors"
                  className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
                />
                <h1 className="font-bold text-xl capitalize mb-2 text-gray-100">
                  Our Mission
                </h1>
                <p className="text-gray-400 text-sm px-4">
                  We thrive to supply industrial commodities by unveiling the
                  untapped resources of Ethiopia and empowering small scale
                  miners in creating a sustainable supply chain
                </p>
              </div>
            </div>
          </div>
          {/* <button className="w-full bg-teal-500 px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
      Learn More
    </button> */}
        </section>

        {/* values */}
        <section className="bg-custom-white-500">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <div>
                <Small text="Values" />
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Values
                </h2>
              </div>
              <div className="mt-8">
                <div className="pt-2 mb-6">
                  <h2 className="font-medium text-xl text-gray-900">Trust</h2>
                  <p className="mt-2 text-sm text-gray-500">
                    We know that the opportunity given to us is as a result of
                    trust by the community, the government and our various
                    partners. We operate in utmost transparency to keep intact
                    the trust we earned.
                  </p>
                </div>
                <div className="pt-2 mb-6">
                  <h2 className="font-medium text-xl text-gray-900">
                    Embrace change
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    In every ever changing and dynamic sector we are in, we
                    embrace change as the industry evolves and are committed to
                    leading the change in the sector.
                  </p>
                </div>
                <div className="pt-2 mb-6">
                  <h2 className="font-medium text-xl text-gray-900">
                    Sustainability
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    We believe meeting the demand of our generation doesn't have
                    to be at the cost of compromising the ability of future
                    generations to do so. And we thrive in having a balance
                    between profits, planet and people.
                  </p>
                </div>
                <div className="pt-2 mb-6">
                  <h2 className="font-medium text-xl text-gray-900">
                    Collaboration (team work)
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    We believe that teamwork is the backbone of our business.
                    Thus, we create a welcoming work environment for our team as
                    we thrive to bring about the change we foresee.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="https://plus.unsplash.com/premium_photo-1661866916518-1dcc1e907c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-2xl object-cover h-64 md:h-72 bg-gray-100"
              />
              <img
                src="https://images.unsplash.com/photo-1611377247946-ae36f1d725f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="rounded-2xl object-cover h-64 md:h-72 bg-gray-100"
              />
              <img
                src="https://images.unsplash.com/photo-1584715642530-3cb85fc36539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-2xl object-cover h-64 md:h-72 bg-gray-100"
              />
              <img
                src="https://images.unsplash.com/photo-1627768919962-fb6af351759c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=680&q=80"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-2xl object-cover h-64 md:h-72 bg-gray-100"
              />
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto bg-custom-dark-500 py-12 text-center">
          <Small text="Our Team" />
          <h1 className="font-bold text-2xl text-gray-200 text-center capitalize">
            meet our dedicated professionals
          </h1>
          <div className="flex flex-wrap py-20">
            <div className="w-1/2 md:w-[23%] text-center mb-6">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt="happy african labors"
                className="rounded-full w-24 h-24 object-cover mx-auto mb-4 border border-gray-500"
              />
              <h1 className="font-bold text-lg capitalize text-gray-200">
                Jhon Doe
              </h1>
              <p className="text-gray-500 text-sm italic px-4">ceo</p>
            </div>
            <div className="w-1/2 md:w-[23%] text-center mb-6">
              <img
                loading="lazy"
                src="https://img.freepik.com/premium-photo/black-woman-portrait-face-isolated-gray-background-profile-ambition-vision-confident-african-american-female-person-lady-model-looking-with-smile-career-job-hair-style_590464-154640.jpg"
                alt="happy african labors"
                className="rounded-full w-24 h-24 object-cover mx-auto mb-4 border border-gray-500"
              />
              <h1 className="font-bold text-lg capitalize text-gray-200">
                Emily Stwert
              </h1>
              <p className="text-gray-500 text-sm italic px-4">ceo</p>
            </div>
            <div className="w-1/2 md:w-[23%] text-center mb-6">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt="happy african labors"
                className="rounded-full w-24 h-24 object-cover mx-auto mb-4 border border-gray-500"
              />
              <h1 className="font-bold text-lg capitalize text-gray-200">
                Jhon Doe
              </h1>
              <p className="text-gray-500 text-sm italic px-4">ceo</p>
            </div>
            <div className="w-1/2 md:w-[23%] text-center mb-6">
              <img
                loading="lazy"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_88Pw6jbIKvC5Ef_BUmtFvNA8mCSUkGEg6w&usqp=CAU"
                alt="happy african labors"
                className="rounded-full w-24 h-24 object-cover mx-auto mb-4 border border-gray-500"
              />
              <h1 className="font-bold text-lg capitalize text-gray-200">
                Jhon Becky
              </h1>
              <p className="text-gray-500 text-sm italic px-4">ceo</p>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
};

export default About;
