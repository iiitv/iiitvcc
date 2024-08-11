"use client"
import React, { use, useState } from "react";
import "@/styles/navbar.css";   
import Link from "next/link";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";

const notoSansFont = Noto_Sans({ weight: ["300","400"], subsets: ["latin"] });

function Navbar() {
    const [hiddenMenu,setHiddenMenu] = useState(true);
    function MenuToggle(){
        setHiddenMenu(!hiddenMenu);
    }

    const eventsLink = "/events";
    const blogsLink = "/blogs";
    const membersLink = "/members";
    const contactUsLink = "/contact_us";
    
    return (
        <>
            <div id="pseudo"></div>
            <div className="navbar">
                <Link href="/" className={`logo-container ${notoSansFont.className}`} prefetch={false}>
                    <Image className="logo-img"  src="/iiitv-logo.svg" alt="IIITV Logo" height={512} width={512}/>
                    <div className="logo-title-container">
                        <p className="logo-title">Coding Club</p>
                        <p className="logo-subtitle">Community</p>
                    </div>
                </Link>
                <div className={`menu-container ${notoSansFont.className}`}>
                    <Link href={eventsLink} className="text-primary" prefetch={false}>Events</Link>
                    <Link href={blogsLink} className="text-primary" prefetch={false} >Blogs</Link>
                    <Link href={membersLink} className="text-primary" prefetch={false}>Members</Link>
                    <Link href={contactUsLink} className="text-primary" prefetch={false}>Contact Us</Link>
                </div>
                <div className={`mobile-menu ${notoSansFont.className}`}>
                    <div className="menu-icon">
                        <input type="checkbox" id="hi"  hidden onChange={MenuToggle} value={!hiddenMenu} />
                        <label className="menu" htmlFor="hi">
                            <div className="bar"></div> 
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </label>
                        
                    </div>
                    
                    <div className="mobile-menu-container" style={{display : (hiddenMenu ? "none" : "") }}>
                        <div className="mobile-menu-container2">
                            <p><Link href={eventsLink} className="text-primary" prefetch={false}>Events </Link></p>
                            <p><Link href={blogsLink} className="text-primary" prefetch={false}>Blogs </Link></p>
                            <p><Link href={membersLink} className="text-primary" prefetch={false}>Members </Link></p>
                            <p><Link href={contactUsLink} className="text-primary" prefetch={false}>Contact Us </Link></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Navbar;
