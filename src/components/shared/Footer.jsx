import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaMailBulk } from "react-icons/fa";
import {
  FaCamera,
  FaEarthAsia,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
          <aside>
            <h1 className="text-orange-500 text-xl">SOLSTICE</h1>
            <p className="text-lg">
              Premium summer essentials for the <br /> discerning explorer.
              Crafting joyful <br /> moments under the sun since 2026.
            </p>
            <div className="flex items-center gap-2 text-xl mt-3">
              <CiShare2 />
              <FaEarthAsia />
              <FaCamera />
            </div>
            <h1 className="text-2xl text-gray-500 font-semibold">Contact Us</h1>
            <div className="">
              <p className="flex items-center gap-2 text-xl"><FaMailBulk color="orange"/> rakibulislamashik78@gmail.com</p>
              <p className="flex items-center gap-2 text-xl"><FaPhone color="orange"/> 0607420771</p>
              <p className="flex items-center gap-2 text-xl"><FaLocationArrow color="orange"/> Sherpur,Bangldesh</p>
            </div>
          </aside>
          <nav>
            <h6 className="footer-title">Shop</h6>
            <a className="link link-hover">NEW ARRIVALS</a>
            <a className="link link-hover">BEST SELLERS</a>
            <a className="link link-hover">SUMMER CARE</a>
            <a className="link link-hover">ACCESSORIES</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social link</h6>
            <a className="link link-hover flex gap-2 items-center text-lg">
              <FaFacebook /> Facebook
            </a>
            <a className="link link-hover flex gap-2 items-center text-lg">
              <FaInstagram /> Instagram
            </a>
            <a className="link link-hover flex gap-2 items-center text-lg">
              <FaXTwitter />
              Twitter
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">TERMS OF SERVICE</a>
            <a className="link link-hover">PRIVACY POLICY</a>
          </nav>
        </footer>
    </div>
  );
};

export default Footer;
