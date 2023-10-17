import React, { useEffect, useRef } from "react";
import AppLayout from "../components/Layout/AppLayout";
import { OutlineButton, SolidButton } from "../components/utils/Button";
import Small from "../components/utils/Small";
import { useLocation } from "react-router-dom";
import { TeamCard } from "../components/TeamCard";
import { HeadingCenter } from "../components/Heading";

const About = () => {
  const location = useLocation();
  const section1 = useRef(null);

  useEffect(() => {
    if (location.hash) {
      if (section1.current && location.hash === "#section1") {
        section1.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <AppLayout>
        <section className="pt-24 pb-20 bg-contain bg-blend-overlay bg-custom-dark-500 mx-auto">
          <div className="max-w-[1280px] mx-2 md:mx-auto">
            <div className="w-full md:max-w-2xl my-auto md:pr-4 md:mx-auto text-center mb-20">
              <h1 className="font-extrabold text-4xl lg:text-4xl xl:text-5xl capitalize text-gray-200 inline-block">
                We pride ourselves in giving full-cycle services
              </h1>
              <p className="text-gray-500 py-4 lg:py-6">
                Empowering Industries with Reliable Minerals and Unmatched
                Mining Proficiency, Fuelling Sustainable Advancement and
                Triumph.
              </p>
              <OutlineButton
                text="Get in touch"
                goto="/contact"
                customStyle="mx-auto"
              />
            </div>
            <div className="w-full md:max-w-5xl my-auto md:pr-4 md:mx-auto">
              <img
                className="rounded-xl w-[80%] mx-auto h-96 object-cover brightness-75 contrast-100 transform hover:scale-105 transition duration-700 ease-out"
                src="https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?w=1380&t=st=1697541010~exp=1697541610~hmac=0ce82478bd733ae80ed3efe5d4268ecff1d723951057db506d42fd2a43bcdd52"
                width="540"
                height="303"
                alt="About Lambano"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="my-2 relative">
          <div className="max-w-xl mx-auto border-y border-gray-800 py-12">
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
          <div
            aria-hidden="true"
            class="absolute top-16 inset-0 grid grid-cols-2 -space-x-52 opacity-10 z-10"
          >
            <div class="blur-[50px] h-72 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          </div>
        </section>

        <section className="font-tailwind">
          <div className="max-w-[1280px] mx-auto text-center">
            <div className="flex flex-wrap md:justify-evenly my-24">
              <div className="w-full max-w-sm text-center mb-6 p-4 bg-[#293041]/80 border border-[#434959] rounded-xl">
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
        </section>

        {/* values */}
        <section id="section1" ref={section1} className="bg-custom-white-500">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="lg:order-last">
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
                <SolidButton text="Get in touch" goto="/contact" />
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="https://plus.unsplash.com/premium_photo-1661866916518-1dcc1e907c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="hidden md:block rounded-2xl object-cover h-64 md:h-72 bg-gray-100"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1611377247946-ae36f1d725f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="hidden md:block rounded-2xl object-cover h-64 md:h-72 bg-gray-100"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1584715642530-3cb85fc36539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-2xl object-cover h-64 md:h-72 bg-gray-100"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1627768919962-fb6af351759c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=680&q=80"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-2xl object-cover h-64 md:h-72 bg-gray-100"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto bg-custom-dark-500 py-12 text-center">
          <HeadingCenter
            intro="our team"
            title="Meet the team"
            headingLight={true}
          />
          <div className="flex flex-wrap justify-evenly py-20 mt-12">
            <TeamCard
              name="John Doe"
              jobtitle="Accountant"
              photo="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            />
            <TeamCard
              name="John Doe"
              jobtitle="Accountant"
              photo="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            />
            <TeamCard
              name="John Doe"
              jobtitle="Accountant"
              photo="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            />
          </div>
        </section>
      </AppLayout>
    </>
  );
};

export default About;
