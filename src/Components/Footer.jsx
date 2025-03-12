import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p></p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://github.com/Shuvamdt"
          rel="noreferrer noopener"
          target="_blank"
        >
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a
          href="https://x.com/ShuvamDutta123?t=YOQSoMipkVU14SdSt3pafw&s=08"
          rel="noreferrer noopener"
          target="_blank"
        >
          <div className="social-icon">
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/shuvamdutta963/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <div className="social-icon">
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
      </div>
      <p className="text-white-500">©2025 Shuvam All rights reserved</p>
    </section>
  );
};

export default Footer;
