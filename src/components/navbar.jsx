"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "@/styles/navbar.css";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/utils/supabase/client";
import { ProfileDropdown } from "./profile_dropdown";
import { LoggingOut } from "@/components/ui/loggingout";

function Navbar() {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [loggingOut, setLoggingOut] = useState(false);

  function MenuToggle() {
    setHiddenMenu(!hiddenMenu);
  }

  const aboutLink = "/about";
  const eventsLink = "/events";
  const blogsLink = "/blogs";
  const membersLink = "/members";
  const resourcesLink = "/resources";
  const contactUsLink = "/contact_us";

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.log(error.message);
        return;
      }
      setUser(user);
    };
    getUser();
  }, []);

  useEffect(() => {
    const getUsername = async () => {
      const { data, error, status } = await supabase
        .from("users")
        .select("username")
        .eq("id", user.id)
        .single();

      if (status === 406) {
        return;
      }
      setUsername(data.username);
    };

    if (user) {
      getUsername();
    }
  }, [user]);

  const logout = async () => {
    setLoggingOut(true);
    axios.get("/api/logout").then((res) => {
      window.location.href = "/home";
    });
  };

  if (loggingOut) {
    return <LoggingOut />;
  }

  return (
    <>
      {user && (
        <ProfileDropdown
          username={username}
          email={user?.email}
          onLogout={logout}
        />
      )}
      <div id="pseudo"></div>
      <div className="navbar">
        <div className="navbar-content">
          <Link href="/" className="logo-container" prefetch={false}>
            <Image
              className="logo-img"
              src="/iiitv-logo.svg"
              alt="IIITV Logo"
              height={512}
              width={512}
            />
            <div className="logo-title-container">
              <p className="logo-title">Coding Club</p>
            </div>
          </Link>

          <div className="menu-container">
            <Link href={aboutLink} className="nav-link" prefetch={false}>
              About
            </Link>
            <Link href={eventsLink} className="nav-link" prefetch={false}>
              Events
            </Link>
            <Link href={blogsLink} className="nav-link" prefetch={false}>
              Blogs
            </Link>
            <Link href={membersLink} className="nav-link" prefetch={false}>
              Members
            </Link>
            <Link href={resourcesLink} className="nav-link" prefetch={false}>
              Resources
            </Link>
            <Link href={contactUsLink} className="nav-link" prefetch={false}>
              Contact Us
            </Link>
          </div>

          <div className="menu-right">{/* Empty spacer for balance */}</div>

          {/* Mobile Menu */}
          <div className="mobile-menu">
            <div className="menu-icon">
              <input
                type="checkbox"
                id="hi"
                hidden
                onChange={MenuToggle}
                checked={!hiddenMenu}
              />
              <label className="menu" htmlFor="hi">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </label>
            </div>

            <div
              className="mobile-menu-container"
              style={{ display: hiddenMenu ? "none" : "" }}
            >
              <div className="mobile-menu-container2">
                <Link
                  href={aboutLink}
                  className="mobile-menu-item"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href={membersLink}
                  className="mobile-menu-item"
                  prefetch={false}
                >
                  Members
                </Link>
                <Link
                  href={eventsLink}
                  className="mobile-menu-item"
                  prefetch={false}
                >
                  Events
                </Link>
                <Link
                  href={blogsLink}
                  className="mobile-menu-item"
                  prefetch={false}
                >
                  Blogs
                </Link>
                <Link
                  href={resourcesLink}
                  className="mobile-menu-item"
                  prefetch={false}
                >
                  Resources
                </Link>
                <Link
                  href={contactUsLink}
                  className="mobile-menu-item mobile-contact-btn"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
