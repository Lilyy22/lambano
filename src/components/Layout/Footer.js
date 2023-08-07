import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#ebf4f5] py-10 font-tailwind">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 pt-16 pb-24 border-b border-gray-200">
          <div className="mt-2">
            <h1 className="py-4 font-bold text-xl">LambanoMetals</h1>
            <p className="pb-2 mb-6 font-medium text-gray-500">
              We take great pride in providing our valued clients with
              comprehensive, full-cycle services that are designed to exceed
              their expectations.
            </p>
          </div>

          <div className="lg:ml-auto md:ml-8 mt-2">
            <h1 className="text-lg xl:text-xl capitalize font-bold py-4">
              Quick Links
            </h1>
            <ul className="text-gray-500 text-sm font-medium">
              <li className="pb-2 hover:text-custom-purple-600">
                <a>Our Minerals</a>
              </li>
              <li className="pb-2 hover:text-custom-purple-600">
                <a>About</a>
              </li>
              <li className="pb-2 hover:text-custom-purple-600">
                <a>Representatives</a>
              </li>
              <li className="pb-2 hover:text-custom-purple-600">
                <a>Blog/News</a>
              </li>
            </ul>
          </div>

          <div className="lg:ml-auto mt-2">
            <h1 className="text-lg xl:text-xl capitalize font-bold py-4">
              what we offer
            </h1>
            <ul className="text-gray-500 text-sm font-medium">
              <li className="pb-2 hover:text-custom-purple-600">
                <a>Minerals</a>
              </li>
              <li className="pb-2 hover:text-custom-purple-600">
                <a>equipment supply</a>
              </li>
              <li className="pb-2 hover:text-custom-purple-600">
                <a>consulting</a>
              </li>
              <li className="pb-2 hover:text-custom-purple-600">
                <a>mining project</a>
              </li>
            </ul>
          </div>

          <div className="lg:ml-auto mt-2">
            <h1 className="text-lg xl:text-xl capitalize font-bold py-4">
              contact
            </h1>
            <ul className="text-gray-500 text-sm font-medium">
              <li className="pb-2 hover:text-custom-purple-600">
                <a>+251 972 364 578</a>
              </li>
              <li className="pb-2 hover:text-custom-purple-600">
                <a>+251 972 364 578</a>
              </li>
              <li className="pb-2 hover:text-custom-purple-600">
                <a>info@lambanometals.com</a>
              </li>
              <li className="pb-2 hover:text-custom-purple-600">
                <a>support@lambanometals.com</a>
              </li>
              <div className="flex gap-2 my-2">
                <FaFacebookSquare size={22} />
                <FaTwitterSquare size={22} />
                <FaInstagramSquare size={22} />
                <FaYoutubeSquare size={22} />
              </div>
              {/* <li className='pb-2'>
                              <div className='flex gap-4 my-5'>
                                <a className='hover:text-custom-purple-600'>
                                  <FaFacebook size={20}/>
                                </a> 
                                <a className='hover:text-custom-purple-600'>
                                  <FaTwitter size={20}/>
                                </a> 
                                <a className='hover:text-custom-purple-600'>
                                  <Faaedin size={20}/>
                                </a> 
                                <a className='hover:text-custom-purple-600'>
                                  <FaTelegram size={20}/>
                                </a> 
                                <a className='hover:text-custom-purple-600'>
                                  <RiWhatsappFill size={23}/>
                                </a> 
                              </div>
                            </li> */}
            </ul>
          </div>
        </div>

        <div className="flex justify-between py-4 text-gray-500 text-sm capitalize">
          <span>&#169;2023 LambanoMetals. All Rights Reserved.</span>
          <div className="flex gap-2">
            <a
              to="/privacy"
              className="pl-1 hover:text-custom-purple-600 hover:underline"
            >
              privacy
            </a>
            <a
              to="/terms"
              className="pl-1 hover:text-custom-purple-600 hover:underline"
            >
              terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
