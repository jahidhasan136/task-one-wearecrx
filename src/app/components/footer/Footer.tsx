import React from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div>
      <div className="grid xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-8 md:gap-10">
        {/* column one */}
        <div className="grid xs:gap-4 md:gap-7">
          <h2 className="font-bold xs:text-xl md:text-[32px] tracking-[-0.48px] text-nowrap">
            Business Logo
          </h2>
          <div className="flex items-center gap-4 text-2xl">
            <FaFacebook />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>

        {/* column two */}
        <div className="grid md:flex items-center xs:gap-8 md:gap-20">
          <div className="grid xs:gap-4 md:gap-6">
            <h3 className="font-semibold text-sm leading-6 text-blackFontP text-nowrap">
              Our Services
            </h3>
            <div className="grid gap-4 text-sm leading-5 text-blackFontP">
              <p>Plumbing</p>
              <p>Drainage</p>
              <p>Bathrooms</p>
              <p>Commercial</p>
            </div>
          </div>
          <div className="grid gap-4 md:gap-6">
            <h3 className="font-semibold text-sm leading-6 text-blackFontP text-nowrap">
              Useful Links
            </h3>
            <div className="flex items-center gap-10">
              <div className="grid gap-4 text-sm leading-5 text-blackFontP text-nowrap">
                <p>Contact Us</p>
                <p>Updates</p>
                <p>About Us</p>
                <p>Rates</p>
              </div>
              <div className="grid gap-4 text-sm leading-5 text-blackFontP text-nowrap">
                <p>Customer Services</p>
                <p>Updates</p>
                <p>Locations</p>
                <p>Sitemap</p>
              </div>
            </div>
          </div>
        </div>

        {/* column three */}
        <div className="grid xs:gap-4 md:gap-6">
          <h3 className="font-semibold text-sm leading-6 text-blackFontP text-nowrap">
            Contact Info
          </h3>
          <div className="grid gap-5">
            <div className="flex items-center gap-3">
              <CiLocationOn className="text-2xl" />
              <p className="text-sm leading-6 font-semibold">
                1 Sail Street, London, SE11 6NQ
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CiMail className="text-2xl" />
              <p className="text-sm leading-6 font-semibold">
                enquiries@PlumbingPros.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <PiPhoneCallThin className="text-2xl" />
              <p className="text-sm leading-6 font-semibold">020 4527 6474</p>
            </div>
          </div>
        </div>
      </div>

      {/* copyright text */}
      <div className="xs:text-[10px] md:text-sm xs:leading-4 md:leading-5 text-blackFontP xs:grid gap-2 md:flex items-center xs:justify-center md:justify-between xs:mt-8 md:mt-10 lg:mt-20">
        <p>© Plumbing Pros. All Rights Reserved </p>
        <p>Website by IH Adventure And Creative</p>
      </div>
    </div>
  );
};

export default Footer;
