"use client"
import React, { use, useState } from "react";
import "@/styles/navbar.css";   
import Link from "next/link";

function Navbar() {
    const [hiddenMenu,setHiddenMenu] = useState(true);
    function MenuToggle(){
        setHiddenMenu(!hiddenMenu);
    }

    const eventsLink = "/events";
    const projectsLink = "/projects";
    const membersLink = "/members";
    const contactUsLink = "/contact_us";
    
    return (
        <>
            <div id="pseudo"></div>
            <div className="navbar">
                <a href="/" className="logo-container">
                    <img className="logo-img"  src="https://avatars.githubusercontent.com/u/9347727?s=200&v=4" alt="IIITV Logo" />
                    <h1 className="logo-title">Coding Club</h1>
                </a>
                <div className="menu-container">
                    <Link href={eventsLink} className="text-primary">Events</Link>
                    <Link href={projectsLink} className="text-primary">Projects</Link>
                    <Link href={membersLink} className="text-primary">Members</Link>
                    <Link href={contactUsLink} className="text-primary">Contact Us</Link>
                </div>
                <div className="mobile-menu">
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
                            <p><Link href={eventsLink} className="text-primary">Events </Link></p>
                            <p><Link href={projectsLink} className="text-primary">Projects </Link></p>
                            <p><Link href={membersLink} className="text-primary">Members </Link></p>
                            <p><Link href={contactUsLink} className="text-primary">Contact Us </Link></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Navbar;
