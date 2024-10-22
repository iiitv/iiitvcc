"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ManWithLaptopSvg from "./components/manWithLaptopSvg";
import ManSittingAtTableSvg from "./components/manSittingAtTableSvg";
import "./styles.css";

import { Montserrat } from "next/font/google";

import axios from "axios";
import Alert from "@/components/ui/alert";

const montserratFont = Montserrat({
  weight: ["100", "200", "400", "600"],
  subsets: ["latin"],
});

export default function Page() {
  const [messageOrBugDropdown, setMessageOrBugDropdown] = useState(false);
  const [messageOrBug, setMessageOrBug] = useState("Message");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    organisation: '',
    messageType: 'Message', // Initialize with 'Message' by default
    message: '',
  });


  const [formSubmitted, setFormSubmitted] = useState(false);
  const [status, setStatus] = useState('');

  const linkedInLink = "https://www.linkedin.com/company/iiitvcc/";
  const twitterLink = "https://x.com/iiitvcc";
  const instagramLink = "https://www.instagram.com/codingclub_iiitv/";
  const facebookLink = "https://www.facebook.com/iiitvcc/";
  const ccEmailLink = "mailto:codingclub@iiitvadodara.ac.in";

  function handleDropDownClick() {
    setMessageOrBugDropdown((prev) => !prev);
  }

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus("Sending");
      const response = await axios.post('/api/sendEmail', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        setStatus('Email sent successfully!');
        setFormSubmitted(true);
      } else {
        setStatus('Failed to send email.');
        console.error("Email sending failed");
      }
    } catch (error) {
      setStatus('Error occurred while sending email.');
      console.error("Error sending email: ", error);
    }
  };


  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div
        className={`${montserratFont.className} flex gap-1 justify-center items-center my-5`}
      >
        <p>IIIT Vadodara</p>
        <div className="bg-white rounded-full w-2 h-2"></div>
        <p className="text-primary">Coding Club</p>
      </div>
      <div
        className={`${montserratFont.className} tracking-tighter text-5xl sm:text-7xl font-semibold flex gap-5 justify-center`}
      >
        <p>
          Contact <span className="text-primary">Us</span>
        </p>
      </div>
      <div
        className={`${montserratFont.className} tracking-tighter text-xs sm:text-base sm:w-1/2 flex gap-5 justify-center text-center`}
      >
        <p>
          At the Coding Club of IIIT Vadodara, we're more than just a group of
          programmers—we're a community of innovators, creators, and
          problem-solvers. Whether you have a burning question, a brilliant
          idea, or just want to collaborate with like-minded tech enthusiasts,
          we're here to connect. Reach out to us and let's turn your coding
          dreams into reality!
        </p>
      </div>
      <div className="grid w-full gird-cols-12 md:grid-cols-5 text-primary">
        <div className="col-span-1 hidden md:flex m-0 p-0 flex justify-center items-end">
          <ManSittingAtTableSvg />
        </div>
        {formSubmitted ?
          <div className="col-span-1 w-full flex flex-col mx-3 md:mx-0 md:col-span-3  mt-40 items-center">
            <SuccessIcon />
            <p className=" md:text-2xl text-foreground mt-5">
              Message Send <span className="text-primary">Succesfully...</span>
            </p>
          </div>
          : (status === "Sending" ? <div className="col-span-1 mx-3 md:mx-0 md:col-span-3 mt-5 items-center justify-center content-center"> <p className=" md:text-3xl text-center text-primary mt-5">Sending...</p></div>:
            (<div className="col-span-1 mx-3 md:mx-0 md:col-span-3 mt-5">
                <div className={`${montserratFont.className} relative`}>
                  <form
                    id="contact_form"
                    className="grid grid-cols-2 gap-x-5 gap-y-2"
                    onSubmit={handleSubmit}
                  >
                    <div className="col-span-2 md:col-span-1">
                      <Label htmlFor="name" className="text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-[8px] border border-input bg-background px-4 py-6 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={formData.email}
                        className="rounded-[8px] border border-input bg-background px-4 py-6 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <Label htmlFor="contact" className="text-foreground">
                        Contact No.
                      </Label>
                      <Input
                        id="contact"
                        type="tel"
                        placeholder="Contact No."
                        required
                        onChange={handleChange}
                        value={formData.contact}
                        className="rounded-[8px] border border-input bg-background px-4 py-6 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <Label htmlFor="organisation" className="text-foreground">
                        Organisation
                      </Label>
                      <Input
                        id="organisation"
                        type="text"
                        placeholder="Organisation Name"
                        required
                        onChange={handleChange}
                        value={formData.organisation}
                        className="rounded-[8px] border border-input bg-background px-4 py-6 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none sm:text-sm"
                      />
                    </div>
                    <div className="col-span-2 mt-5">
                      <Label htmlFor="message_or_bug" className="text-foreground">
                        Send a Message or report a bug
                      </Label>
                      <div>
                        <div
                          className="flex justify-between cursor-pointer rounded-[8px] border border-input bg-background px-4 py-4 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none sm:text-sm"
                          onClick={handleDropDownClick}
                        >
                          <p id="message_or_bug" className="font-semibold">
                            {messageOrBug}
                          </p>
                          <svg
                            className={`${messageOrBugDropdown ? "scale-[-1]" : null} -mr-1 h-5 w-5  text-gray-400 cursor-pointer transition-all ease-in-out duration-500`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div
                          className={`${messageOrBugDropdown ? null : "hidden"} absolute right-0 z-10 mt-1 bg-secondary focus:border-primary w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                        >
                          <div className="py-1" role="none">
                            <p
                              href="#"
                              className="block px-4 py-2 text-sm w-full cursor-pointer"
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-0"
                              onClick={() => {
                                setMessageOrBug("Message");
                                setMessageOrBugDropdown(false);
                                setFormData({
                                  ...formData,
                                  messageType: "Message",
                                });
                              }}
                            >
                              Message
                            </p>
                            <hr className="text-muted-foreground mx-3" />
                            <p
                              className="block px-4 py-2 text-sm w-full cursor-pointer"
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-1"
                              onClick={() => {
                                setMessageOrBug("Report a Bug");
                                setMessageOrBugDropdown(false);
                                setFormData({
                                  ...formData,
                                  messageType: "Report a Bug",
                                });
                              }}
                            >
                              Report a Bug
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 mt-5">
                      <textarea
                        id="message"
                        type="text"
                        placeholder="How can we help?"
                        required
                        onChange={handleChange}
                        value={formData.message}
                        className="w-full rounded-[8px] border border-input bg-background px-4 py-4 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none sm:text-sm h-64"
                      />
                    </div>
                  </form>
                </div>
              </div>
            ))}
        <div className="hidden md:flex col-span-1 flex justify-center items-end">
          <ManWithLaptopSvg />
        </div>
      </div>
      {formSubmitted ? null : (status=== "Sending" ? null : (
        <button form="contact_form" type="submit">
          <div
            className={`${montserratFont.className} m-2 text-xl rounded-full py-2 px-5 bg-primary text-background`}
          >
            Send Your Message
          </div>
        </button>
      ))}
      <div
        className={`${montserratFont.className} mt-24 text-2xl sm:text-3xl md:text-4xl text-center`}
      >
        <p>Get in touch with</p>
        <p>
          IIITV <span className="text-primary">Coding Club</span>
        </p>
      </div>
      <div className="flex m-5 sm:gap-5 md:gap-10">
        <Link href={facebookLink}>
          <div className="socials-link-div grid grid-cols-1 justify-items-center items-center">
            <Image
              src={"/facebook-2.svg"}
              width={40}
              height={40}
              alt="Facebook Icon"
              style={{ zIndex: "1" }}
              className="col-span-1 row-start-1 col-span-full m-0 p-0"
            ></Image>
            <Image
              src={"/facebook-2.svg"}
              width={50}
              height={50}
              alt="Facebook Icon"
              style={{ filter: "blur(10px)" }}
              className="col-span-1 row-start-1 col-span-full m-0 p-0 opacity-0 transition-all ease-in-out duration-500"
            ></Image>
          </div>
        </Link>
        <Link href={instagramLink}>
          <div className="socials-link-div grid grid-cols-1 justify-items-center items-center">
            <Image
              src={"/instagram-2.svg"}
              width={40}
              height={40}
              alt="Instagram Icon"
              style={{ zIndex: "1" }}
              className="col-span-1 row-start-1 col-span-full m-0 p-0"
            ></Image>
            <Image
              src={"/instagram-2.svg"}
              width={50}
              height={50}
              alt="Instagram Icon"
              style={{ filter: "blur(10px)" }}
              className="col-span-1 row-start-1 col-span-full m-0 p-0 opacity-0 transition-all ease-in-out duration-500"
            ></Image>
          </div>
        </Link>
        <Link href={twitterLink}>
          <div className="socials-link-div grid grid-cols-1 justify-items-center items-center">
            <Image
              src={"/twitter-2.svg"}
              width={40}
              height={40}
              alt="Twitter Icon"
              style={{ zIndex: "1" }}
              className="col-span-1 row-start-1 col-span-full m-0 p-0"
            ></Image>
            <Image
              src={"/twitter-2.svg"}
              width={50}
              height={50}
              alt="Twitter Icon"
              style={{ filter: "blur(10px)" }}
              className="col-span-1 row-start-1 col-span-full m-0 p-0 opacity-0 transition-all ease-in-out duration-500"
            ></Image>
          </div>
        </Link>
        <Link href={linkedInLink}>
          <div className="socials-link-div grid grid-cols-1 justify-items-center items-center">
            <Image
              src={"/linkedin.svg"}
              width={40}
              height={40}
              alt="Linkedin Icon"
              style={{ zIndex: "1" }}
              className="col-span-1 row-start-1 col-span-full m-0 p-0"
            ></Image>
            <Image
              src={"/linkedin.svg"}
              width={50}
              height={50}
              alt="Linkedin Icon"
              style={{ filter: "blur(10px)" }}
              className="col-span-1 row-start-1 col-span-full m-0 p-0 opacity-0 transition-all ease-in-out duration-500"
            ></Image>
          </div>
        </Link>
        <Link href={ccEmailLink}>
          <div className="socials-link-div grid grid-cols-1 justify-items-center items-center">
            <Image
              src={"/gmail.svg"}
              width={40}
              height={40}
              alt="Gmail Icon"
              style={{ zIndex: "1" }}
              className="col-span-1 row-start-1 col-span-full m-0 p-0"
            ></Image>
            <Image
              src={"/gmail.svg"}
              width={50}
              height={50}
              alt="Gmail Icon"
              style={{ filter: "blur(10px)" }}
              className="col-span-1 row-start-1 col-span-full m-0 p-0 opacity-0 transition-all ease-in-out duration-500"
            ></Image>
          </div>
        </Link>
      </div>
      <div className="mb-10 w-full flex justify-center items-center">
        <div className="col-span-6 w-full mx-3 md:w-3/5">
          <iframe
            className="rounded-xl"
            width="100%"
            height="500"
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Indian%20Institute%20of%20Information%20Technology%20Vadodara+(IIIT%20Vadodara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      {status==='Failed to send email.'?<Alert status={response.data.status} message={response.data.error}/>:null}
      {status==='Error occurred while sending email.'?<Alert status={500} message={'Error occurred while sending email.'}/>:null}
    </div>
  );
}

const SuccessIcon = () => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 50 50"
    width={100}
    xmlSpace="preserve"
  >
    <circle style={{ fill: "currentColor" }} cx="25" cy="25" r="25" />
    <polyline
      style={{
        fill: "none",
        stroke: "#FFFFFF",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
      }}
      points="38,15 22,33 12,25"
    />
  </svg>
);
