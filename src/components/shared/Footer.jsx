import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaCamera, FaEarthAsia, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <h1 className="text-orange-500 text-xl">SOLSTICE</h1>
          <p className="text-lg">
            Premium summer essentials for the <br /> discerning explorer. Crafting
            joyful <br /> moments under the sun since 2026.
          </p>
          <div className="flex items-center gap-2 text-xl mt-3">
            <CiShare2 />
            <FaEarthAsia />
            <FaCamera />
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
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">CONTACT US</a>
          <a className="link link-hover flex gap-2 items-center text-lg"><FaFacebook/> Facebook</a>
          <a className="link link-hover flex gap-2 items-center text-lg"><FaInstagram/> Instagram</a>
          <a className="link link-hover flex gap-2 items-center text-lg"><FaXTwitter/>Twitter</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">TERMS OF SERVICE</a>
          <a className="link link-hover">PRIVACY POLICY</a>
        </nav>
      </footer>
      <span className="border-b-2 border-gray-400 w-10/12 mx-auto my-10">Hello</span>

    </div>
  );
};

export default Footer;
