import "@/styles/footer.css";
import React from "react";
import Link from "next/link";
import { Noto_Sans, Montserrat } from "next/font/google";
import Image from "next/image";

const notoSansFont = Noto_Sans({ weight: ["300", "400"], subsets: ["latin"] });
const montserratFont = Montserrat({
  weight: ["100", "400"],
  subsets: ["latin"],
});

function Footer() {
  const homeLink = "/home";
  const eventsLink = "/events";
  const blogsLink = "/blogs";
  const membersLink = "/members";
  const ccEmailLink = "mailto:codingclub@iiitvadodara.ac.in";
  const addressLink = "https://goo.gl/maps/7g5D6XJpMAD2";
  const linkedInLink = "https://www.linkedin.com/company/iiitvcc/";
  const twitterLink = "https://x.com/iiitvcc";
  const instagramLink = "https://www.instagram.com/codingclub_iiitv/";
  const facebookLink = "https://www.facebook.com/iiitvcc/";
  const iconWidthHeight = "30";
  return (
    <div className="footer">
      <div
        className={`${notoSansFont.className} footer-container-1 grid grid-cols-1 lg:grid-cols-12`}
      >
        <hr className="col-span-1 lg:col-span-12 footer-divider-1" />
        <div className="col-span-1 lg:col-span-4">
          <div className="footer-cc-logo">
            <Image
              className="footer-cc-logo-img "
              src="/iiitv-logo.svg"
              width={512}
              height={512}
              alt="IIITV Logo"
            />
            <div>
              <p className="footer-cc-logo-title">Coding Club</p>
              <p className="footer-cc-logo-subtitle">Community</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 footer-first-container-2">
          <div className="footer-links-container col-span-2 sm:col-start-2">
            <p>Links</p>
            <Link
              href={homeLink}
              className={montserratFont.className}
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href={eventsLink}
              className={montserratFont.className}
              prefetch={false}
            >
              Events
            </Link>
            <Link
              href={blogsLink}
              className={montserratFont.className}
              prefetch={false}
            >
              Blogs
            </Link>
            <Link
              className={montserratFont.className}
              href={membersLink}
              prefetch={false}
            >
              Members
            </Link>
          </div>

          <div className="footer-contact-container col-span-2 sm:col-span-8 sm:col-start-4">
            <p>Contact</p>
            <div>
              <p>Email</p>
              <Link href={ccEmailLink} target="_blank">
                <h2 className={montserratFont.className}>
                  : codingclub@iiitvadodara.ac.in
                </h2>
              </Link>
              <p>Phone</p>
              <h2 className={montserratFont.className}>
                : +919531852385,+919305066259
              </h2>
              <p>Address</p>
              <Link
                href={addressLink}
                target="_blank"
                className={montserratFont.className}
              >
                : c/o Block No. 9, Government Engineering College, Sector 28,
                Gandhinagar, Gujarat
              </Link>
            </div>
          </div>
          <div className="footer-icon-container col-span-1 sm:col-start-12">
            <Link href={linkedInLink} prefetch={false} target="_blank">
              <Image
                src="/linkedin.svg"
                width={iconWidthHeight}
                height={iconWidthHeight}
                alt="Linkedin logo"
              ></Image>
            </Link>
            <Link href={twitterLink} prefetch={false} target="_blank">
              <Image
                src="/twitter-2.svg"
                width={iconWidthHeight}
                height={iconWidthHeight}
                alt="Twitter Logo"
              ></Image>
            </Link>
            <Link href={instagramLink} prefetch={false} target="_blank">
              <Image
                src="/instagram-2.svg"
                width={iconWidthHeight}
                height={iconWidthHeight}
                alt="Instagram Logo"
              ></Image>
            </Link>
            <Link href={facebookLink} prefetch={false} target="_blank">
              <Image
                src="/facebook-2.svg"
                width={iconWidthHeight}
                height={iconWidthHeight}
                alt="Facebook Logo"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
      <div className={`${montserratFont.className} footer-container-2`}>
        <div className="footer-dot-container">
          <p>Designed by DOT</p>
          <Image
            className="dot-logo"
            src="/dot-logo.svg"
            alt="IIITV Logo"
            width={512}
            height={512}
          />
        </div>
        <hr className="footer-container-2-divider"></hr>
        <div className="footer-cc-container">
          <p>Developed by Coding Club</p>
          <Image
            className="footer-cc-logo-img-2"
            src="/iiitv-logo.svg"
            alt="IIITV Logo"
            width={512}
            height={512}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
