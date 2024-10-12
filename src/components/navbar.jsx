"use client";
import React, { use, useState, useEffect } from "react";
import axios from "axios";
import "@/styles/navbar.css";
import Link from "next/link";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";

import { supabase } from "@/utils/supabase/client";
import { Dropdown_Menu } from "./user_dropdown";
import { LoggingOut } from "@/components/ui/loggingout";

const notoSansFont = Noto_Sans({ weight: ["300", "400"], subsets: ["latin"] });

function Navbar() {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [loggingOut, setLoggingOut] = useState(false);

  function MenuToggle() {
    setHiddenMenu(!hiddenMenu);
  }

  const eventsLink = "/events";
  const blogsLink = "/blogs";
  const membersLink = "/members";
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
        const { error } = await getUsernameFromUser();
        if (error) throw error;
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
        <Dropdown_Menu
          username={username}
          email={user?.email}
          onProfile="/account"
          onLogout={logout}
        />
      )}

      <div id="pseudo"></div>
      <div className="navbar !py-[2.7em]">
        <Link
          href="/"
          className={`logo-container ${notoSansFont.className}`}
          prefetch={false}
        >
          <Image
            className="logo-img"
            src="/iiitv-logo.svg"
            alt="IIITV Logo"
            height={512}
            width={512}
          />
          <div className="logo-title-container">
            <p className="logo-title">Coding Club</p>
            <p className="logo-subtitle">Community</p>
          </div>
        </Link>
        <div
          className={`menu-container ${user && "px-9"} ${notoSansFont.className}`}
        >
          <Link href={eventsLink} className="text-primary" prefetch={false}>
            Events
          </Link>
          <Link href={blogsLink} className="text-primary" prefetch={false}>
            Blogs
          </Link>
          <Link href={membersLink} className="text-primary" prefetch={false}>
            Members
          </Link>
          <Link href={contactUsLink} className="text-primary" prefetch={false}>
            Contact Us
          </Link>
        </div>
        <div className={`mobile-menu ${notoSansFont.className}`}>
          <div className="menu-icon">
            <input
              type="checkbox"
              id="hi"
              hidden
              onChange={MenuToggle}
              value={!hiddenMenu}
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
              <p>
                <Link
                  href={eventsLink}
                  className="text-primary"
                  prefetch={false}
                >
                  Events{" "}
                </Link>
              </p>
              <p>
                <Link
                  href={blogsLink}
                  className="text-primary"
                  prefetch={false}
                >
                  Blogs{" "}
                </Link>
              </p>
              <p>
                <Link
                  href={membersLink}
                  className="text-primary"
                  prefetch={false}
                >
                  Members{" "}
                </Link>
              </p>
              <p>
                <Link
                  href={contactUsLink}
                  className="text-primary"
                  prefetch={false}
                >
                  Contact Us{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
