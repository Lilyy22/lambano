import React from "react";
import AppLayout from "../components/Layout/AppLayout";
import MiniCard from "../components/utils/MiniCard";
import { MdPhonelinkRing } from "react-icons/md";
import Small from "../components/utils/Small";

const Contact = () => {
  return (
    <>
      <AppLayout>
        <section className="max-w-7xl mx-auto py-16">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="font-medium text-4xl lg:text-5xl mb-4 capitalize text-white">
              Get in touch
            </h1>
            <p className="text-gray-500 mb-8">
              Reach Out for Inquiries, Collaborations, and Unleash the Potential
              of Mineral Solutions Together.
            </p>
          </div>
          <div className="flex flex-wrap justify-between py-12">
            <div className="w-full md:mr-auto mx-auto md:max-w-xl text-gray-300">
              <form
                className="p-3 md:p-6 bg-[#293041] border-t border-[#434959] rounded-xl"
                // onSubmit={handleSubmit}
                autoComplete="false"
              >
                <div className="pb-1 flex flex-wrap">
                  <div className="md:w-1/2 w-full">
                    <label htmlFor="firstName" className="py-px">
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="firstName"
                      className="text-gray-300 bg-gray-900 outline-none rounded focus:ring-custom-purple-500 focus:ring-1 border border-slate-800 block w-full px-3 py-2 my-1"
                      type="text"
                      placeholder="first name"
                      // value={firstName}
                      // onChange={(e) => {
                      //   setfirstName(e.target.value);
                      // }}
                      required
                    />
                  </div>
                  <div className="md:w-1/2 w-full md:pl-3 py-1 md:py-0">
                    <label htmlFor="lastName" className="py-px">
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="lastName"
                      className="text-gray-300 bg-gray-900 outline-none rounded focus:ring-custom-purple-500 focus:ring-1 border border-slate-800 block w-full px-3 py-2 my-1"
                      type="text"
                      placeholder="last name"
                      // value={lastName}
                      // onChange={(e) => {
                      //   setlastName(e.target.value);
                      // }}
                      required
                    />
                  </div>
                </div>
                <div className="py-1">
                  <label htmlFor="email" className="py-px">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    className="text-gray-300 bg-gray-900 outline-none rounded focus:ring-custom-purple-500 focus:ring-1 border border-slate-800 block w-full px-3 py-2 my-1"
                    type="text"
                    placeholder="example@gmail.com"
                    // value={email}
                    // onChange={(e) => {
                    //   setEmail(e.target.value);
                    // }}
                  />
                </div>

                <div className="py-1 relative">
                  <label htmlFor="message" className="py-px">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    className="passInput text-gray-300 bg-gray-900 outline-none rounded focus:ring-custom-purple-500 focus:ring-1 border border-slate-800 block w-full px-3 py-1 my-1"
                    placeholder="message"
                    // value={message}
                    rows={4}
                    // onChange={(e) => {
                    //   setMessage(e.target.value);
                    // }}
                    required
                  ></textarea>
                </div>

                <div className="flex justify-between mt-1 mb-3">
                  <div className="flex items-center my-auto">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="w-4 h-4 border accent-custom-purple-500 rounded"
                      required
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 text-sm font-medium capitalize"
                    >
                      I agree with privacy policy and terms & conditions.
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    className="w-full text-center py-2 mt-3 bg-custom-purple-500/80 hover:bg-custom-purple-500 rounded text-white font-bold transition ease-in-out delay-100 capitalize"
                    aria-label="send"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

            <div className="my-5 mx-auto w-full md:max-w-lg md:mt-auto">
              <div className="text-slate-400 mt-8 px-auto">
                <MiniCard />
                <div className="rounded-xl flex gap-6 bg-[#293041] border-t border-[#434959] py-6 px-2 md:p-6 my-12 md:w-96 ml-auto">
                  <div className="bg-gray-600 rounded-full w-16 h-16 p-4">
                    <MdPhonelinkRing size={30} />
                  </div>
                  <div className="flex">
                    <ul className="text-sm md:text-base leading-loose">
                      <div className="mb-4">
                        <small className="text-custom-white-500 capitalize">
                          usa
                        </small>

                        <li>+251447788855</li>
                      </div>
                      <div className="mb-4">
                        <small className="text-custom-white-500 capitalize">
                          usa
                        </small>

                        <li>+251447788855</li>
                      </div>
                      <div className="mb-4">
                        <small className="text-custom-white-500 capitalize">
                          usa
                        </small>

                        <li>+251447788855</li>
                        <li>+251447788855</li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12663413.653406335!2d-97.25909925!3d39.20531634164339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1681203038853!5m2!1sen!2sus"
              className="rounded-md w-full h-64 grayscale hover:grayscale-0"
              title="our location"
              aria-hidden="true"
            ></iframe>
          </div>
        </section>
      </AppLayout>
    </>
  );
};

export default Contact;
